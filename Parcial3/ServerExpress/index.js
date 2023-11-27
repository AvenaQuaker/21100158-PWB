const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql2');

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

app.patch('/city',(req,res)=>{
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
            res.json({  status:0,
                        mensaje:'ID de la Ciudad no Existe',
                        datos: {}});
        }else{
            res.json({  status:1,
                        mensaje:'Usuario Encontrado',
                        datos: results[0]});
        }
    }
);

});

app.listen(8083,(req,res)=>{
    console.log('Servidor express corriendo en puerto 8083');
});


