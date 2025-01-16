//Crea una variable "numero" y solicita un valor con prompt. 
// Luego, verifica si es positivo, negativo o cero utilizando un if-else y 
// muestra el mensaje correspondiente.

let numero = parseInt(prompt("Ingrese un numero:"));

if(numero > 0){
    console.log("El numero es positivo")
}else if (numero < 0){
    console.log("El numero es negativo")   
}else{
    console.log("El numero es Cero")
}