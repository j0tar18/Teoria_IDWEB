//*1. Crea un programa que lea tres notas y sus respectivos pesos (porcentaje de evaluación), y calcule el promedio ponderado final del estudiante. Muestra el resultado con dos decimales. Sugerencia: num.toFixed(2)*/

function Ejercicio01() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let peso1 = parseFloat(prompt("Ingrese el peso de la primera nota (%):"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let peso2 = parseFloat(prompt("Ingrese el peso de la segunda nota (%):"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
    let peso3 = parseFloat(prompt("Ingrese el peso de la tercera nota (%):"));

    const PROMEDIO = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

    alert("El promedio ponderado del estudiante es: " + PROMEDIO.toFixed(2));
}

/*2. Escribe un programa que lea una temperatura en grados Celsius y muestre su
equivalente en Fahrenheit y Kelvin.
Considerar: F = C * 9/5 + 32 K = C + 273.15*/

function Ejercicio02() {
    let temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura (°C)"));
    const TEMPERATURA_FAHRENHEIT = temperaturaCelsius * 9/5 + 32;
    const TEMPERATURA_KELVIN = temperaturaCelsius + 273.15;

    alert("Temperatura en grados Fahrenheit: " + TEMPERATURA_FAHRENHEIT +
        "\nTemperatura en grados Kelvin: " + TEMPERATURA_KELVIN);
}

/*3. Crea un programa que lea las coordenadas de dos puntos (x1, y1) y (x2, y2), y calcule
la distancia entre ellos. Usa Math.sqrt() como si fuera Java*/

function Ejercicio03() {
    let x1 = parseFloat(prompt("Ingrese la coordenada x1:"));
    let y1 = parseFloat(prompt("Ingrese la coordenada y1:"));
    let x2 = parseFloat(prompt("Ingrese la coordenada x2:"));
    let y2 = parseFloat(prompt("Ingrese la coordenada y2:"));

    const DISTANCIA = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

    alert(`Distancia entre los puntos (${x1},${y1}) y (${x2},${y2}): ${DISTANCIA}`);
}




