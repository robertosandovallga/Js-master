'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones.

function Saludo(){
    //Conjunto de instrucciones a ejecutar.
    console.log("1.- Hola que tal!");
    console.log("2.- Si soy yo");
    
    return "3.- Hola de nuevo si soy yo";
}
Saludo(); // Asi se llama directamente una función

//Invocar o llamar a la función.
var resultado = Saludo(); // Asi se llama una función desde una variable.

console.log(resultado); // La variable de función conservará el resultado lanzado en la sentencia return. */

//--------------Funciones con parametros-------------------------

console.log("************************************")

function calculadora(numero1, numero2){
    //Conjunto de instrucciones a ejecutar.
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("************************************") */
    
    //return "Hola, soy la calculadora!! Escribe dos números -separados por una coma- dentro de los paréntesis de la función y lo calcularé por ti ";
} 

 //Invocar o llamar a la función.
calculadora(12, 8);
calculadora(98, 2);

for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
} 

//--------------Funciones con parametros opcionales-------------------------

 function calculadora2(numero1, numero2, mostrar = false){
    //Conjunto de instrucciones a ejecutar.
    
    if(mostrar == false){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("multiplicación: " + (numero1*numero2));
        console.log("División: " + (numero1/numero2));
        console.log("************************************")
    } else {
        document.write("Suma: " + (numero1+numero2) + "<br/>");
        document.write("Resta: " + (numero1-numero2) + "<br/>");
        document.write("multiplicación: " + (numero1*numero2) + "<br/>");
        document.write("División: " + (numero1/numero2) + "<br/>");
        document.write("************************************")
    }
    
    //return "Hola, soy la calculadora!! Escribe dos números -separados por una coma- dentro de los paréntesis de la función y lo calcularé por ti";
}

//Invocar o llamar a la función.
calculadora2(1, 4);
calculadora2(1, 5, true);
 
//-----------------------Funciones por consola y por pantalla-------------------

function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("multiplicación: " + (numero1*numero2));
    console.log("División: " + (numero1/numero2));
    console.log("************************************")
}

function porPantalla(numero1, numero2){
    document.write("Suma: " + (numero1+numero2) + "<br/>");
    document.write("Resta: " + (numero1-numero2) + "<br/>");
    document.write("multiplicación: " + (numero1*numero2) + "<br/>");
    document.write("División: " + (numero1/numero2) + "<br/>");
    document.write("************************************")
}

function calculadora3(numero1, numero2, mostrar = false){
    if(mostrar == false){
    porConsola(numero1, numero2);
    } else {
    porPantalla(numero1, numero2);
    }
    return  true;
}
calculadora3(1, 4);
calculadora3(1, 5, true);

/*
for(var i = 1; i <= 10; i++){
console.log(i);
calculadora(i, 8);
}
*/
