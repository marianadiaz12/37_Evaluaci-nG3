/*Ejercicio 2:Declara un arreglo vacío denominado nombres. 
Pide al usuario tres nombres y almacena esos nombres como elementos arreglo. 
A continuación muestra el contenido en un mensaje. */
 /*
Inicio
Leer nombre1, nombre2, nombre3
Guadar nombres en nombres = [nombre1, nombre2, nombre3];
imprimir arreglo nombres
 */

var nombre1 = prompt('Dame el nombre numero1');
var nombre2 = prompt('Dame el nombre numero2');
var nombre3 = prompt('Dame el nombre numero3');
var nombres = [nombre1 + " ", nombre2, nombre3];
alert(nombres);