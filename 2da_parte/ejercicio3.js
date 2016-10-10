/*Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural". */

function palindromo(frase){
	var frase = frase.replace(/\s/g, "");
	for (var i=0; i<frase.length; i++){
		var x = frase[i].toLowerCase();
		var y = frase[frase.length-(i+1)].toLowerCase();
		if (x!==y) {
			return false;
		}
	}
	return true;
}
console.log(isPalindromo("casa"));