const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql2');

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SONIC',
    database: 'world',
    port: 8082
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

app.post('/city',(req,res)=>{
    res.json({mensaje: "Server Express respondiendo a Post"});
})

app.delete('/city',(req,res)=>{
    res.json({mensaje: "Server Express respondiendo a Delete"});
})

app.patch('/city',(req,res)=>{
    res.json({mensaje: "Server Express respondiendo a Patch"});
})

app.listen(8083,(req,res)=>{
    console.log('Servidor express corriendo en puerto 8083');
});


