var noticia = 'Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de "Superresolución" que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).'



var notmod = "";
var lg = noticia.length;
var acumulador = 0;
var acumulador2 = 0;
var acumulador3 = 0;


while (lg >= 0) {
    if (noticia.charAt(lg) == ";") {
        acumulador++
    }
    if (noticia.charAt(lg) == ",") {
        acumulador2++
    }
    if (noticia.charAt(lg) == ".") {
        acumulador3++
    }

    if (noticia.charAt(lg) == " ") {
        notmod = noticia.replace(" ", "_");
    }

    lg--
}


console.log("item ");
console.log(noticia.replace("REALIZE", "REALIZA"));
console.log("item 2");
console.log("EL NUMERO ES DE ; es:", acumulador, "EL NUMERO DE , ES:", acumulador2, " ES NUMERO ES", acumulador3);
console.log("item 3");
console.log(notmod);