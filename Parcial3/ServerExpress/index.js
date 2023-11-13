const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log(res.query);
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

