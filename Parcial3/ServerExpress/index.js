const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql2');

app.use(cors());

app.get('/city',(req,res)=>{
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SONIC',
    database: 'world',
    port: 8082
});

// simple query
connection.query( 'SELECT * FROM city;',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
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

