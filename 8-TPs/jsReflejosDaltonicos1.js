/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var Respuesta;

function comenzar()
{

	ColorSecreto=Math.floor( Math.random()*6)+1;
	switch(ColorSecreto)
	{
		case 1:
		ColorSecreto="azul";
		break;

		case 2:
		ColorSecreto="amarillo";
		break;

		case 3:
		ColorSecreto="marron";
		break;

		case 4:
		ColorSecreto="verde";
		break;

		case 5:
		ColorSecreto="celeste";
		break;

		case 6:
		ColorSecreto="rojo";
		break;

	}

	document.getElementById('ColorElejido').value=ColorSecreto;

	
}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{

   if(ColorSecreto=="azul")
   {
   		switch(colorParametro)
   		{
   		case "azul":
   		alert("es el correcto,tardaste");
   		break;

   		default:
   		break;
   		}
   }


   else if(ColorSecreto=="amarillo")
   {
   		switch(colorParametro)
   		{
   		case "amaillo":
   		alert("es el correcto,tardaste");
   		break;

   		default:
   		break;
   		}
   }


   else if(ColorSecreto=="marron")
   {
   		switch(colorParametro)
   		{
   		case "marron":
   		alert("es el correcto,tardaste");
   		break;

   		default:
   		break;
   		}
   }


   else if(ColorSecreto=="verde")
   {
   		switch(colorParametro)
   		{
   		case "verde":
   		alert("es el correcto,tardaste");
   		break;

   		default:
   		break;
   		}
   }


   else if(ColorSecreto=="celeste")
   {
   		switch(colorParametro)
   		{
   		case "celeste":
   		alert("es el correcto,tardaste");
   		break;

   		default:
   		break;
   		}
   }


   else(ColorSecreto=="rojo")
   {
   		switch(colorParametro)
   		{
   		case "rojo":
   		alert("es el correcto,tardaste");
   		break;

   		default:
   		break;
   		}
   }



/*	if(colorParametro=="azul")
   {
   	alert("asdasd");
   }  
   tambien funciona con if*/


}//FIN DE LA FUNCIÓN
