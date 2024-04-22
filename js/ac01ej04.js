/**
 * AC01Ej4.js - Ejercicio 4 de la Actividad 01
 * 
 * Descripción:Programa del ejercicio 4 se ejecuta en en html
 * 
 *  Este programa analiza una frase y cuenta la cantidad de veces que aparece la letra "o",
 * las vocales que aparecen y la frecuencia de cada vocal en la frase.
 * 
 * Autor: Mario Eduardo Terrazas Parada
 * Fecha: 21/04/2024
 * 
 * Validación: Este programa solicita al usuario que ingrese una frase. Luego, analiza la frase para contar
 * la cantidad de veces que aparece la letra 'o', las vocales en total y la frecuencia de cada vocal.
 * Finalmente, imprime los resultados del análisis en la consola.
 */

// Definir la frase como una constante al principio del archivo
const FRASE = prompt("Ingrese una frase:");

// Función para contar la cantidad de veces que aparece una letra en una frase
function contarLetra(frase, letra) {
    return frase.toLowerCase().split(letra).length - 1;
}

// Función para contar la cantidad de vocales en una frase
function contarVocales(frase) {
    return frase.match(/[aeiou]/gi).length;
}

// Función para contar la frecuencia de cada vocal en una frase
function contarFrecuenciaVocales(frase) {
    const frecuenciaVocales = {};
    for (let letra of frase.toLowerCase()) {
        if ("aeiou".includes(letra)) {
            frecuenciaVocales[letra] = (frecuenciaVocales[letra] || 0) + 1;
        }
    }
    return frecuenciaVocales;
}

// Función para imprimir los resultados del análisis de la frase
function imprimirResultados(frase) {
    console.log("Cuantas veces aparece la letra 'o':", contarLetra(frase, 'o'));
    console.log("Vocales que aparecen en la frase:", contarVocales(frase));
    console.log("Frecuencia de cada vocal:", contarFrecuenciaVocales(frase));
}

// Imprimir los resultados del análisis de la frase
imprimirResultados(FRASE);
