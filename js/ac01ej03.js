/**
 * AC01Ej3.js - Ejercicio 3 de la Actividad 01
 * 
 * Descripción: Descripcion: Programa del ejercicio 1 en consola y en html
 * 
 * Autor: Mario Eduardo Terrazas Parada
 * Fecha: 21/04/2024
 * 
 * Validación: Este programa genera un número específico de números primos de forma aleatoria y los imprime en la consola.
 */

const NELEMENTOS_PRIMOS = 10; // Número de elementos primos a generar

let numerosPrimosGenerados = [];

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// Función para generar números primos aleatorios menores que 110 y almacenarlos en un array
function generarNumerosPrimosAleatorios() {
    const numerosPrimos = [];
    let contador = 0;

    while (contador < NELEMENTOS_PRIMOS) {
        const numeroAleatorio = Math.floor(Math.random() * 110); // Genera un número aleatorio entre 0 y 109
        if (esPrimo(numeroAleatorio)) {
            numerosPrimos.push(numeroAleatorio);
            contador++;
        }
    }
    
    numerosPrimosGenerados = numerosPrimos;
}

// Función para imprimir los números primos generados en la consola
function imprimirNumerosPrimos() {
    console.log("Números primos generados:");
    numerosPrimosGenerados.forEach(numero => {
        console.log(numero);
    });
}

// Generar números primos aleatorios y almacenarlos en el array
generarNumerosPrimosAleatorios();

// Imprimir los números primos generados en la consola
imprimirNumerosPrimos();
