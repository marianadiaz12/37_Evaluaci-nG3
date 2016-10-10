/*Ejercicio 1: <br>Haz el juego de piedra papel o tijera con 3 turnos*/

/*Pseudocodigo
Inicio
var jugador1
var jugador2
Elige una opción
Lee jugador1
Lee jugador2
repetir desde i=1 hasta i=3 de i++
	si jugador1 = piedra y jugador2= piedra
		Escribir empate
	si no, si jugador1= piedra y jugador2= tijera
		Escribir gana Jugador1 con piedra
	si no 


*/
for (var i = 1; i<=3; i++) {
	var jugador1 = prompt('Elige un opción jugador 1: piedra, tijera, papel');
	var jugador2 = prompt('Elige un opción jugador 2: piedra, tijera, papel');

	if(jugador1 === jugador2){
		alert('empate');
		}
	else if(jugador1 === "piedra"){
		if(jugador2 === "tijera"){
			alert('Gana jugador1')
		}
		else {
			alert('Gana jugador 2')
		}
	}
	else if(jugador1 === "tijera"){
		if(jugador2 === "piedra"){
			alert('Gana jugador2')
		}
		else {
			alert('Gana jugador 1')
		}
	}
	else if(jugador1 === "papel"){
		if(jugador2 === "tijera"){
			alert('Gana jugador2')
		}
		else {
			alert('Gana jugador 1')
		}
	}
}
	