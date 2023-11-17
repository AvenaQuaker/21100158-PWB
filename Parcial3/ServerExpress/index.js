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