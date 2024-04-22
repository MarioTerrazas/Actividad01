/**
 * AC01Ej2.js - Ejercicio 2 de la Actividad 01
 * 
 * Descripción: Programa del ejercicio 2 en en html
 *  Este programa valida las credenciales de un usuario.
 * El usuario debe ser uno de los nombres "juan", "pedro", "maria" o "raul".
 * La contraseña debe ser "D153n0W3b2".
 * 
 * Autor: Mario Eduardo Terrazas
 * Fecha: 21/04/2024
 * 
 * Validación: Este programa valida las credenciales de un usuario ingresadas por el usuario.
 * Si las credenciales son válidas, se muestra un mensaje de acceso permitido, de lo contrario,
 * se muestra un mensaje de acceso denegado.
 */

// Función para validar credenciales de usuario
function validarCredenciales(usuario, contrasena) {
    const usuariosValidos = ["juan", "pedro", "maria", "raul"];
    const contrasenaValida = "D153n0W3b2";

    // Validar usuario y contraseña
    if (usuariosValidos.includes(usuario.toLowerCase()) && contrasena === contrasenaValida) {
        return true;
    } else {
        return false;
    }
}

// Función para cargar los datos del usuario y luego imprimir el mensaje de acceso
function cargarDatos() {
    const usuario = prompt("Ingrese su usuario:");
    const contrasena = prompt("Ingrese su contraseña:");
    console.log("Datos cargados correctamente.");
    imprimir(usuario, contrasena);
}

// Función para imprimir mensaje de acceso
function imprimir(usuario, contrasena) {
    const accesoPermitido = validarCredenciales(usuario, contrasena);
    if (accesoPermitido) {
        console.log("Credenciales válidas. Acceso permitido.");
    } else {
        console.log("Credenciales inválidas. Acceso denegado.");
    }
}

// Llamar a la función para cargar los datos del usuario y luego imprimir el mensaje de acceso
cargarDatos();

