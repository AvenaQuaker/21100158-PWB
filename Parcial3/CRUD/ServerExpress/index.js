const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql2');
const fs = require('fs');
const PDFDocument = require('pdfkit');  

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SONIC',
    database: 'world',
    port: 8082
});

app.get('/',(req,res)=>{
    connection.query('SELECT * FROM city', function(err, results, fields) {
        res.json(results);
    });
});

app.get('/city',(req,res)=>{
    console.log(req.query.ID);
    let consulta = "";

    if(typeof(req.query.ID)=='undefined'){
        consulta = 'SELECT * FROM city';
    }else{
        consulta = 'SELECT * FROM city WHERE ID=' + (req.query.ID)
    }

    console.log(consulta)
    
    connection.query(consulta, function(err, results, fields) {
        if(results.length==0){
            res.json({  status:0, mensaje:'ID de la Ciudad no Existe', datos: {}});
        }else{
            res.json({  status:1, mensaje:'Usuario Encontrado', datos: results[0]});
        }
    }
);
});

app.get('/PDF', (req, res) => {
    connection.query('SELECT * FROM city', function (err, results, fields) {
        if (err) {
            res.status(500).json({ status: 0, mensaje: 'Error al obtener datos de la base de datos' });
            return;
        }

        // Crear un nuevo documento PDF
        const doc = new PDFDocument();

        // Establecer el encabezado y escribir datos
        doc.text('Datos de la ciudad:', 50, 50);

        let verticalOffset = 70;
        results.forEach((city) => {
            doc.text(`ID: ${city.ID}, Name: ${city.Name}, CountryCode: ${city.CountryCode}, District: ${city.District}, Population: ${city.Population}`, 50, verticalOffset);
            verticalOffset += 20;
        });

        // Guardar el documento y enviar como respuesta
        const pdfFileName = 'ciudades.pdf';
        const pdfStream = fs.createWriteStream(pdfFileName);

        doc.pipe(pdfStream);
        doc.end();

        pdfStream.on('finish', () => {
            res.download(pdfFileName, (err) => {
                if (err) {
                    res.status(500).json({ status: 0, mensaje: 'Error al descargar el archivo PDF' });
                } else {
                    fs.unlink(pdfFileName, (err) => {
                        if (err) {
                            console.error('Error al borrar el archivo PDF', err);
                        }
                    });
                }
            });
        });
    });
});

app.post('/city', (req, res) => {
    const { ID, Name, CountryCode, District, Population } = req.body;

    if (!ID || !Name || !CountryCode || !District || !Population) {
        res.status(400).json({ status: 0, mensaje: 'Faltan campos requeridos para crear el registro' });
        return;
    }

    const Insertar = `INSERT INTO city (ID, Name, CountryCode, District, Population) VALUES (?, ?, ?, ?, ?)`;
    const values = [ID, Name, CountryCode, District, Population];

    connection.query(Insertar, values, (err, results, fields) => {
        if (!err && results.affectedRows === 1) {
            res.json({ status: 1, mensaje: 'Se ha insertado el nuevo registro', datos: {
                ID: ID,
                Name: Name,
                CountryCode: CountryCode,
                District: District,
                Population: Population
            } });
        } else {
            res.status(500).json({ status: 0, mensaje: 'Ocurrió un error en la inserción', datos: {} });
        }
    });
});

app.delete('/city',(req,res)=>{
    console.log(req.query.ID);
    let sentenciaSQL = "";

    if(typeof(req.query.ID)=='undefined'){
        res.json({  status:0,
            mensaje:'Falto Enviar el ID del Usuario',
            datos: {}});
    }else{
        sentenciaSQL = 'DELETE FROM city WHERE ID=' + (req.query.ID)
    }

    console.log(sentenciaSQL)
    
    connection.query(sentenciaSQL, function(err, results, fields) {
        if(results.affectedRows==1){
            res.json({  status:1, mensaje:'Registro Eliminado', datos: {}});
        } else {
            res.json({  status:0, mensaje:'Hubo un Error en la Eliminacion', datos: {}});
        }
    }
);

});

app.patch('/city', (req, res) => {
    const { ID, Name, CountryCode, District, Population } = req.body;

    if (!ID || (!Name && !CountryCode && !District && !Population)) {
        res.status(400).json({ status: 0, mensaje: 'Se requiere al menos un campo para actualizar' });
        return;
    }

    let actualizaciones = [];
    let values = [];

    if (Name) {
        actualizaciones.push('Name = ?');
        values.push(Name);
    }
    if (CountryCode) {
        actualizaciones.push('CountryCode = ?');
        values.push(CountryCode);
    }
    if (District) {
        actualizaciones.push('District = ?');
        values.push(District);
    }
    if (Population) {
        actualizaciones.push('Population = ?');
        values.push(Population);
    }

    const actualizacionSQL = `UPDATE city SET ${actualizaciones.join(', ')} WHERE ID = ?`;
    values.push(ID);

    connection.query(actualizacionSQL, values, (err, results, fields) => {
        if (results.affectedRows === 1) {
            res.json({
                status: 1,
                mensaje: 'Se ha actualizado el registro correctamente',
                datos: {
                    ID: ID,
                    Name: Name,
                    CountryCode: CountryCode,
                    District: District,
                    Population: Population
                }
            });
        } else {
            res.status(500).json({ status: 0, mensaje: 'Ocurrió un error en la actualización', datos: {} });
        }
    });
});

app.listen(8083,(req,res)=>{
    console.log('Servidor express corriendo en puerto 8083');
});


