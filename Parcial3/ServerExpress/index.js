const express = require('express');
const cors = require('cors')
const app = express();
const mySQL = require('mysql2');

app.use(cors());

app.get('/',(req,res)=>{
    res.json({mensaje: "Server Express respondiendo a Get"});
});

app.post('/',(req,res)=>{
    res.json({mensaje: "Server Express respondiendo a Post"});
})

app.delete('/',(req,res)=>{
    res.json({mensaje: "Server Express respondiendo a Delete"});
})

app.listen(8082,(req,res)=>{
    console.log('Servidor express corriendo en puerto 8082');
});

// create the connection to database
const connection = mySQL.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: "";
    database: 'BaseDeDatos'
});

// simple query
connection.query(
    "SELECT * FROM `Tienda`",
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
);