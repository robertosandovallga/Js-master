'use strict'

// Bucle While // mientras se cumpla una condicion s

var year = 2018;

while(year <= 2051){
// Ejecuta esto
console.log("Estamos en el año:"+year);

// Operador de incremento
year++;
}

while(year != 1991){
    // Ejecuta esto
    console.log("Estamos en el año:"+year);
    
    // Operador de decremento
    year--;
}

//do while

var years = 30;

do{
    alert("Solo cuando sea diferente a 20");
    years--;

}while(years > 25)