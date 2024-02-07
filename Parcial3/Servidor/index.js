const http = require ('http');

const servidor = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.write("Servidor HTTP node constestando a peticion get");
    res.end();
});

servidor.listen(8082,()=>{
    console.log("Servidor HTTP corriendo en el puerto 8082");
});

