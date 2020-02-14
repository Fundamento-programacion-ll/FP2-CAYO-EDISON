const EventEmitter = require('Even');

class eventouno extends EventEmitter {}
var instantciaEventouno = new eventouno();
instantciaEventouno.on('SALUDO', respuesta => {
    console.log('HOLA MUNDOOOO', respuesta);
    console.log(`HOLAAAAAAAA`);
});
instantciaEventouno.emit('SALUDO', 'Edison');