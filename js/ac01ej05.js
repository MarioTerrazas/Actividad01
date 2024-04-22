/**
 * AC01Ej5.js - Ejercicio 5 de la Actividad 01
 * 
 * Descripción: Este programa combina nombres y apellidos aleatoriamente,
 * y formatea los nombres con la primera letra en mayúscula y el resto en minúscula.
 * charAt(0) devuelve el primer carácter del nombre.
 * toUpperCase() convierte ese primer carácter a mayúscula.
 * slice(1) devuelve el resto del nombre, comenzando desde el segundo carácter.
 * toLowerCase() convierte todos los caracteres restantes a minúscula.
 * 
 * Autor: Mario Eduardo Terrazas Parada
 * Fecha: 21/04/2024
 * 
 * Validación: Este programa combina nombres y apellidos aleatoriamente y los imprime en la consola.
 */

// Constante para definir la cantidad de elementos a generar
const NELEMENTOS = 10;

// Arrays de nombres y apellidos en minúscula
let nombres = ["juan", "maría", "pedro", "ana", "luis", "laura", "carlos", "sofía", "javier", "elena", "diego", "lucía", "miguel", "carmen", "manuel", "paula", "francisco", "isabel", "david", "andrea"];
let apellidos = ["garcía", "martínez", "lópez", "gonzález", "rodríguez", "hernández", "sánchez", "pérez", "martín", "gómez", "fernández", "díaz", "moreno", "álvarez", "romero", "ruiz", "alonso", "navarro", "torres", "jiménez"];

let nomape = [];

// Función para formatear un nombre con la primera letra en mayúscula y el resto en minúscula
function formatearNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

// Función para combinar nombres y apellidos aleatoriamente
function combinarNombresApellidos() {
    for (let i = 0; i < NELEMENTOS; i++) {
         nomal = nombres[Math.floor(Math.random() * nombres.length)];
        apeal = apellidos[Math.floor(Math.random() * apellidos.length)];
        let nombreCompleto = formatearNombre(nomal) + " " + formatearNombre(apeal);
        nomape.push(nombreCompleto);
    }
}

// Función para imprimir nombres y apellidos combinados
function imprimirNombresApellidos() {
    console.log("Nombres y apellidos combinados:");
    nomape.forEach(nombreApellido => console.log(nombreApellido));
}

// Generar nombres y apellidos aleatorios
combinarNombresApellidos();

// Imprimir nombres y apellidos combinados
imprimirNombresApellidos();
