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

/*4. Escribe un programa que calcule el monto final de una inversión usando interés
compuesto. El usuario ingresa el capital, la tasa de interés anual (%) y el número de
años. Mostrar el monto final y el interés ganado.
Considerar: Monto = Capital * (1 + tasa/100) ^ tiempo*/

function Ejercicio04() {
    let capital = parseFloat(prompt("Ingrese el capital inicial:"));
    let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
    let tiempo = parseFloat(prompt("Ingrese el número de años:"));

    const MONTO = capital * (1 + tasaInteres/100)**tiempo;
    const INTERES_GANADO = MONTO - capital;

    alert("Monto final: $: " + MONTO.toFixed(2) +
        "\nInterés ganado: " + INTERES_GANADO.toFixed(2));
}

/*5. Crea un programa que lea una velocidad en kilómetros por hora (km/h) y la convierta a:
metros por segundo (m/s) y millas por hora (mph)
Considerar: 1 milla = 1.60934 kilómetros*/

function Ejercicio05() {
    let kilometrosPorHora = parseFloat(prompt("Ingrese la velocidad (km/h):"));
    
    const KM_A_MILLAS = 1.60934;
    const METROS_POR_SEGUNDO = kilometrosPorHora * (5/18);
    const MILLAS_POR_HORA = kilometrosPorHora / KM_A_MILLAS;

    alert("Velocidad en m/s: " + METROS_POR_SEGUNDO.toFixed(2) + "\n" +
        "Velocidad en mph: " + MILLAS_POR_HORA.toFixed(2));
}

/*6. Crea un programa que lea tres números y muestre el número mayor*/

function Ejercicio06() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let numero3 = parseFloat(prompt("Ingrese el tercer número:"));
    
    const MAYOR = Math.max(numero1, numero2, numero3);
    
    alert("El número mayor es: " + MAYOR);
}

/*7. Crea un programa que lea por separado dos números y un operador (+, -, *, /, %, **).
Realizar la operación correcta según el operador.
Si el operador no es válido, muestra un mensaje de error.*/

function Ejercicio07() {
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación a realizar (+, -, *, /, %, **): ");

    switch(operacion) {
        case "+":
            alert("Suma: " + (numero1 + numero2));
            break;
        case "-":
            alert("Resta: " + (numero1 - numero2));
            break;
        case "*":
            alert("Multiplicación: " + (numero1 * numero2));
            break;
        case "/":
            if (numero2 === 0) {
                alert("Error: No se puede dividir entre cero.");
            } else {
                alert("División: " + (numero1 / numero2).toFixed(2));
            }
            break;
        case "%":
            if (numero2 === 0) {
                alert("Error: No se puede calcular el módulo con divisor cero.");
            } else {
                alert("Módulo: " + (numero1 % numero2));
            }
            break;
        case "**":
            alert("Exponente: " + (numero1 ** numero2));
            break;
        default:
            alert("Operador no válido.");
            break;
    }
}

/*8. Crea un programa que lea peso y estatura, calcule el IMC y lo clasifique:
IMC < 18.5 → Bajo peso
18.5 ≤ IMC < 25 → Normal
25 ≤ IMC < 30 → Sobrepeso
IMC ≥ 30 → Obesidad
*/

function Ejercicio08() {
    let peso = parseFloat(prompt("Ingrese su peso (kg):"));
    let estatura = parseFloat(prompt("Ingrese su estatura (m):"));
    let categoria;

    const IMC = peso/estatura**2;

     if (IMC < 18.5) {
        categoria = "Bajo peso";
    } else if (IMC < 25) {
        categoria = "Normal";
    } else if (IMC < 30) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }

    alert("Su IMC es de: " + IMC.toFixed(2) + "\nCategoría: " + categoria);
}

/*9. Crea un programa que lea una nota numérica (0–100) y la convierta a una calificación con letra:
90–100 → A
80–89 → B
70–79 → C
60–69 → D
0–59 → F*/

function Ejercicio09() {
    let nota = parseFloat(prompt("Ingrese su nota (0-100)"));
    let letra;

    if (nota < 0 || nota > 100) {
        alert("Error. Nota inválida.");
        return;
    }
    

    if (nota >= 90) {
        letra = "A";
    } else if (nota >= 80) {
        letra = "B";
    } else if (nota >= 70) {
        letra = "C";
    } else if (nota >= 60) {
        letra = "D";
    } else {
        letra = "F";
    }

    alert("Nota numérica: " + nota + "\nCalificación con letra: " + letra);
}

/*10. Crea un programa que lea las tres longitudes de un triángulo y determine su tipo:
Equilátero → los tres lados iguales Isósceles → dos lados iguales
Escaleno → todos los lados diferentes
También valida si los lados forman un triángulo válido (suma de dos lados > tercer lado).*/

function Ejercicio10() {
    let lado1 = parseFloat(prompt("Ingrese la longitud del lado 1 del triángulo:"));
    let lado2 = parseFloat(prompt("Ingrese la longitud del lado 2 del triángulo:"));
    let lado3 = parseFloat(prompt("Ingrese la longitud del lado 3 del triángulo:"));
    let tipo;

    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        alert("Error. La longitud de los lados no puede ser 0 o negativa.");
        return;
    }

    if ((lado1 + lado2) <= lado3 || (lado2 + lado3) <= lado1 || (lado1 + lado3) <= lado2) {
        alert("Error. No cumple con la desigualdad triangular.");
        return;
    }

    if (lado1 == lado2 && lado2 == lado3) {
        tipo = "Triángulo equilátero";
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        tipo = "Triángulo isósceles";
    } else {
        tipo = "Triángulo escaleno";
    }

    alert("El triángulo ingresado es: " + tipo);
}

/*11. Programa que pida al usuario que ingrese N números.
Calcula y muestra la suma total y su promedio redondeado a 2 decimales.*/

function Ejercicio11() {
    let numeros  = parseInt(prompt("Ingrese la cantidad de números que va a ingresar:"));
    let suma = 0;
    
    for (let i = 1; i <= numeros; i++) {
        let num = parseInt(prompt("Ingrese el número " + i + ":"));
        suma += num;
    }

    const PROMEDIO = suma/numeros;

    alert("Suma: " + suma + "\nPromedio: " + PROMEDIO.toFixed(2));
}

/*12. Programa que lea un número entero positivo n y muestre los primeros n términos de la
serie de Fibonacci 0, 1, 1, 2, 3, 5, 8, …*/

function Ejercicio12() {
    let n = parseInt(prompt("Ingrese un número entero positivo:"));

    if (n <= 0) {
        alert("Error. El número debe ser positivo.");
        return;
    }

    let a = 0, b = 1, siguienteTermino;

    let serieFibonacci = "Serie de Fibonacci: ";
    for (let i = 1; i <= n; i++) {
        serieFibonacci += a + (i < n ? ", " : "");
        siguienteTermino = a + b;
        a = b;
        b = siguienteTermino;
    }
    alert(serieFibonacci);
}

/*13. Programa que pida al usuario que ingrese la edad de personas (no se sabe la
cantidad).
Calcula y muestra: Promedio de edades y cantidad de personas mayores de edad*/

function Ejercicio13() {
    
}






