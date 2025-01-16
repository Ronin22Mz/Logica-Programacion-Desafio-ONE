//Verifica si un número ingresado por el usuario es positivo o negativo. 
// Muestra una alerta informativa.

let numero = prompt('Ingresa un numero: ');

if (numero > 0){
    alert(`El numero ${numero} es positivo`);
}
else if (numero < 0){
    alert(`El numero ${numero} es negativo`);
}
else{
    alert(`El numero es Cero`);
}