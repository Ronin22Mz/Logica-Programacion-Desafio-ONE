//Crea un sistema de puntuación para un juego. 
// Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
// En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuacion = prompt('Ingrese su puntuacion');

if (puntuacion >= 100){
    alert('¡Felicidades, has ganado!')
}else {
    alert('Intentalo nuevamente para ganar.')
}