/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	//Defino la variable
	nombre=prompt("Ingrese Su Nombre");
	//Guardo el dato en prompt
	document.getElementById('elNombre').value=nombre;
	//el document puede ir para el otro lado tambien

}

