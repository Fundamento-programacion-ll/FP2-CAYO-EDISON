var arreglojson = [{
    nombre: 'Edison',
    edad: 19
}, {
    nombre: 'Cristian',
    edad: 20
}, {
    nombre: 'Luis',
    edad: 18
}, {
    nombre: 'Carmen',
    edad: 30
}, {
    nombre: 'Juan',
    edad: 26
}];
console.log(arreglojson[1].edad);
var suma = 0;
for (let index = 0; index < arreglojson.length; index++) {
    var element = arreglojson[index].edad;
    suma = suma + element;
};
arreglojson.push('Edison').nombre;
console.log(arreglojson);
console.log(suma);