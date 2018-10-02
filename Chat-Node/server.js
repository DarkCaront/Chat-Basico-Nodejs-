var app = require("express")(),
    http = require("http").Server(app),
    io = require ("socket.io")(http);

app.get('/', function(req, res){
    res.sendFile(__dirname +'/index.html');
    console.log("El archivo index.html ha sido cargado");
});

io.on('connection', function(socket){
    socket.on('message', function(msg){
        io.emit('message', msg);
    });
    console.log("Se ha conectado un usuario");
});

io.on('close', function(socket){
    console.log("Se ha ido un usuario");
});

http.listen(8080, function(){
    console.log("El servidor esta en el puerto 8080");
});