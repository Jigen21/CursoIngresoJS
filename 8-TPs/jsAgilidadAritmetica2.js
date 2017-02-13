/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var RandomUno;
var RandomDos;
var Operador;
var Resultado;

function comenzar()
{
	RandomUno = Math.floor((Math.random() * 10) + 1);
	RandomDos = Math.floor((Math.random() * 10) + 1);
	Operador  = Math.floor((Math.random() * 4) + 1);
	document.getElementById('PrimerNumero').value=RandomUno;
	document.getElementById('SegundoNumero').value=RandomDos;

	if(Operador==1)
		{
			document.getElementById('Operador').value="Suma";
			Resultado=RandomUno+RandomDos;
		}
	else if(Operador==2)
		{
			document.getElementById('Operador').value="Resta";
			Resultado=RandomUno-RandomDos;
		}
	else if(Operador==3)
		{
			document.getElementById('Operador').value="Division";
			Resultado=RandomUno/RandomDos;
		}
	else
	 	{
	 		document.getElementById('Operador').value="Multiplicacion";
	 		Resultado=RandomUno*RandomDos;
		} 
	temporizador = setInterval(comenzar,5000);
	
}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=document.getElementById('Respuesta').value;
	if(respuesta==Resultado)
	{
		alert("Acertaste");
	}
	else if(respuesta!=Resultado)
	{
		alert("Te equivocaste");
	}


}//FIN DE LA FUNCIÓN
