var saludo = document.getElementById("saludo");
var lista = document.getElementById("lista");
var saludar = function(){
	var nombre =prompt("Escribe tu nombre");
	var mensaje = ("Bienvenid@ " + nombre);
	

saludo.innerHTML = mensaje;

}

saludo.addEventListener("click", saludar);