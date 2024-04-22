
/**
 * AC01Ej1.js - Ejercicio 1 de la Actividad 01
 * 
 * Descripcion: Programa del ejercicio 1 en consola y en html
 * Autor: Mario Eduardo Terrazas
 * Fecha: 21/04/2024
 * 
 * Validacion: Este programa muestra un mensaje de bienvenida y detecta el navegador en el que se está ejecutando.
 * Utiliza la cadena del agente de usuario (user agent) proporcionada por el navegador.
 */

// Obtener la cadena del agente de usuario del navegador

const navegador = navigator.userAgent;

// Función para mostrar un mensaje de bienvenida y detectar el navegador
function DetectarNavegador() {
    // Mensaje de bienvenida
    console.log("¡Bienvenido!");
    nave= ("Estás ejecutando el programa en el navegador " + navegador + ".");
}
function imprimir()
{
    console.log(nave);
}
// Llamada a la función para mostrar el mensaje de bienvenida y detectar el navegador
DetectarNavegador();
imprimir();
