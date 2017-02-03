/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
	var edad;
	//defino las variables
	nombre=document.getElementById('elNombre').value;
	edad=document.getElementById('laEdad').value;
	//Tomo los Ids de los dos
	alert("Usted se llama "+nombre+ " y tiene " +edad+ " años");
	//Muestro la informacion contatenando el nombre,la frase y la edad;
}

