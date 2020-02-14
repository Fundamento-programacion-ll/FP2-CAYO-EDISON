var json1 = {

    nombre: "Edison",
    apellido: "Cayo",
    edad: 21,
    casado: true,
    mascota: ['Bingo'],

    colegio: [
        'Luis',
        0962807167
    ]

};


var a = 'A';
letv = 21;

var jsonanth = {

    nombre: 'Raul',
    apellido: 'Cayo'
}

console.log("NOMBRE:");
console.log(jsonanth.nombre, jsonanth.apellido);
var jsonsuma = {
    a: 1,
    b: 2
}
var n1 = 1;
var bool = false;
var string = "***HOLA*** ";
vard = 0;

console.log("SUMA");
console.log(jsonsuma.a + jsonsuma.b);
console.log("SUMA DE LOS QUE SEA");
console.log(undefined + false);
console.log(undefined + "dasdsadsa");

var mifunction = function() {
    console.log('function 1');
    return 12;
};

var miifunction = function(n1, n2) {
    return n1 + n2;

};
console.log(mifunction());
console.log(miifunction(1, 2));

var jsondunciones = {

    var: suma = function(n1, n2) {
        return n1 + n2;
    },
    var: resta = function(n1, n2) {
        return n1 - n2;
    },
    var: multiplicacion = function(n1, n2) {
        return n1 * n2;
    },
    var: div = function(n1, n2) {
        return n1 / n2;
    }
};
console.log("SUMA");
console.log(suma(1, 1));
console.log("RESTA");
console.log(resta(2, 1));
console.log("MULTIPLICACION");
console.log(multiplicacion(1, 2));
console.log("DIVICION");
console.log(div(4, 2));