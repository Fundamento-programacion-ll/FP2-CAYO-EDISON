var arreglo = {

}
var arreglojson = [{
    nombre: 'Edison',
    apellido: 'Cayo',
    edad: 19
}, {
    nombre: '   Cristian',
    apellido: 'Cayo',
    edad: 15
}, {
    nombre: 'Luis',
    apellido: 'Quinde',
    edad: 28
}, {
    nombre: 'Rosa',
    apellido: 'Oña',
    edad: 40
}, {
    nombre: 'Juan',
    apellido: 'Asifuela',
    edad: 26
}];
var buscarusu= (arreglojson, usuariobuscar) => {
    var usuarioencontrado = arreglojson.find((usuario) => {

        return usuario.nombre === usuariobuscar;
    });
    console.log(usuarioencontrado);
};
buscarusu(arreglojson, ('Edison'));
//agregar usuario

var nuevousu = (arreglojson, n, a, e) => {
    var nuevo = {
        nombre: n,
        apellido: a,
        edad: e
    }
    return arreglojson.push(nuevo);
};
nuevousuario(arreglojson, ("Edison"), ("Cayo "), (27));


//buscar usuario
var buscarusu= (arreglojson, usuariobuscar) => {
    var usuarioencontrado = arreglojson.find((usuario) => {

        return usuario.nombre === usuariobuscar;
    });
    if (usuarioencontrado === undefined) {
        nuevousu(arreglojson, (usuariobuscar), ("APELLIDO NUEVO"), (27));

    } else {
        console.log(usuarioencontrado);
    }

};
buscarusu(arreglojson, ('dsa'));
console.log(arreglojson);
//eliminar usuario

var eliminarusuario = ((arreglojson, u) => {
    var usuarioencontrado = arreglojson.filter((usuario) => {
        return usuario.nombre !== u;
    });
    console.log(usuarioencontrado);
});
eliminarusu(arreglojson, ('dsa'));
console.log(arreglojson);