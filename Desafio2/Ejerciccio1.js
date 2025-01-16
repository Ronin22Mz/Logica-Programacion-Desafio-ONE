//Pregunta al usuario qué día de la semana es. 
// Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
// De lo contrario, muestra "¡Buena semana!".

//Ejercicio 1 || es un operador OR 
let dia = prompt("¿Que dia de la semana es? ");
if (dia === 'Sábado' || dia === 'sabado' || dia === 'Domingo' || dia === 'domingo')
    {
        alert('¡Buen fin de semana!')
}else{
    alert('¡Buena semana!');
}