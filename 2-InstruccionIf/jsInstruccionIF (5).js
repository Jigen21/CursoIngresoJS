function Mostrar()
{
	var Edad;
	Edad=parseInt(Edad);
	Edad=document.getElementById('edad').value;

	//Primera forma de hacerlo
	/*if(Edad<18 && Edad>12)
	{
		alert("Es adolescente");
	}
    else
    {
    	alert("No es adolescente");
    }*/


    //Segunda forma de hacerlo 
	/*if(!(Edad<18 && Edad >12))
	{
		alert("No es adolescente");
	}*/

    //Tercera forma de hacerlo
	if(Edad>=18 || Edad<=12)
	{
		alert("No es adolescente");
	}
//tomo la edad  


}//FIN DE LA FUNCIÓN