function Mostrar()
{
	var Edad;
	Edad=parseInt(Edad);
	Edad=document.getElementById('edad').value;
/*	if(Edad>=18)
	{
		alert("Es mayor");
	}
	if(Edad<=17&&Edad>=13)
	{
		alert("Es adolescente");
	}
	if(Edad<=12)
	{
		alert("Es un niño");
	}*/

	if(Edad>=13&&Edad<=17)
	{
		alert("Es adolescente");
	}
	else
	{
		if(Edad>=18)
		{
			alert("Es Mayor");
		}
		else if(Edad<=12)
		{
			alert("Es Menor");
		}
// Esta mal el segundo

		
	}
//tomo la edad  




}//FIN DE LA FUNCIÓN