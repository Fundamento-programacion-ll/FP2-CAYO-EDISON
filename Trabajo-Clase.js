var nombre = "Edison";
var a = "";
var lo = nombre.length;
console.log(nombre.length); 
console.log(nombre.indexOf('A'));
console.log(nombre.substring(2, 4))
console.log(nombre.search('N'));

console.log(nombre.charAt(6));

while (lo >= 0) {
    a += nombre.charAt(lo);
    console.log(a);
    lo--;
}
var nu = 9;
console.log(nombre.slice(1, -7));
console.log(nombre.slice(1, 6));
console.log(nombre.split(" "));
var texto = "HOLA MUNDO";
console.log("ANTES QUE REMPLAZA:", texto);
console.log("DESPUES QUE REMPLAZE ");
var lg = texto.length;
while (lg >= 0) {
    var texmod = texto.replace("LUIS", "HOLA");
    lg--;
}


console.log(texmod);
var tex2 = "       HOLA PRUEBA DOS       ";
console.log(tex2);
console.log(tex2.trim());
console.log(texto.concat("", nombre));
console.log(texto.localeCompare("HOLSA"));
console.log(texto.toLowerCase());