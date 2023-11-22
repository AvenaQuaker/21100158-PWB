const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql2');

app.use(cors());

app.get('/city',(req,res)=>{

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SONIC',
    database: 'world',
    port: 8082
});

connection.query( 'SELECT * FROM city;',
    function(err, results, fields) {
        console.log(results); 
        console.log(fields); 
        res.json({results});
    }
);

    
    
});

app.post('/',(req,res)=>{
    res.json({mensaje: "Server Express respondiendo a Post"});
})

app.delete('/',(req,res)=>{
    res.json({mensaje: "Server Express respondiendo a Delete"});
})

app.listen(8083,(req,res)=>{
    console.log('Servidor express corriendo en puerto 8083');
});

