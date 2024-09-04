'use strict'

//Condicional if
// si A es igual a B entonces haz algo

// Si pasa esto, entonces ejecuta esto!

var edad1 = 30;
var edad2 = 12;

// Si pasa esto
if (edad1 > 12) {
    // entonces ejecuta esto!
    console.log("Edad 1 es mayor que edad2");

} else {
    console.log("La edad uno es inferior");
}
/*
// Operadores relacionales
// = es que es parecido
// == es que son iguales aunque sean de tipos de datos distintos
// === es que son iguales y son del mismo tipo de datos
//!= diferente que
// maayor que o igual: >=
/* menos o igual: <=
igual: ==
distinto: != */

var edad18 = 18;
var nombre = 'David Suarez';

if (edad18 >= 18) {
    // Es mayor de edad
    console.log(nombre + " Tiene " + edad18 + " años, es Mayor de edad");

    if (edad18 <= 17) {
        console.log('Todavia eres milenial');
    } else {
        console.log('Ya no eres milenial');
    }

} else {
    //Es menor de edad
    console.log(nombre + " Tiene " + edad18 + " años, es Menor de edad");
}

/*
//Operadores Lógicos
ANd(Y): &&
OR(O): ||
NEGACION: !
*/

var year = 2018; // Si cambio a 2008 cambia la liena 78
//NEGACION  

if (year != 2016) {

    console.log("El año no es 2016 realmente es:" + year);
}

// AND
if (year >= 2000 && year <= 2020 && year != 2018) {
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

//OR

if(year == 20188 || year == 2018){
    console.log("El año acaba en 8");
}

// ( )
if(year == 2008 || (year >= 2018 && year ==2028)){
    console.log("El año acaba en 8");
}else{
    console.log("AÑO NO REGISTRADO")
}


