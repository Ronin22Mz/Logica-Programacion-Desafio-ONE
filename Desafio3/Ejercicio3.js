//Crea un programa de cuenta regresiva. Pide un número y 
// cuenta desde 0 hasta ese número utilizando un bucle 
// 'while' en la consola del navegador.

let numero = parseInt(prompt("Ingrese un número: "));
while (numero >= 0) {
    console.log(numero);
    numero--;
}