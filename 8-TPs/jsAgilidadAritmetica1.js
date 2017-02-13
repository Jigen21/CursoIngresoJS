/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var RandomUno;
var RandomDos;
var Operador;
var Resultado


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
