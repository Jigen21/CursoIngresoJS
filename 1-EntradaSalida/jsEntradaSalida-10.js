/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultado;
	//defino las variables
	importe=document.getElementById('importe').value;
	//Tomo el ID de importe con .value al final;
	importe=parseInt(importe);
	resultado=parseInt(resultado);
	//transformo los numeros
	resultado=(importe*0.75);
	//Multiplico el importe por 0.75,para tener el descuento de un 25% del numero y lo defino como resultado
	document.getElementById('resultado').value=resultado;
	//Tomo el otro Id,despues de hacer la cuenta para que muestre el resultado
	alert("El Resultado es " + resultado);
	//muestro el resultado con alert
}
