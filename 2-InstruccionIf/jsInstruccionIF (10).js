function Mostrar()
{
	var Minumerorandom = Math.floor((Math.random() * 10) + 1);
	if(Minumerorandom>=9&&Minumerorandom<=10)
	{
		alert(Minumerorandom);
		alert("Excelente");
	}
	if(Minumerorandom>=4&&Minumerorandom<=8)
	{
		alert(Minumerorandom);
		alert("Aprobo");
	}
	if(Minumerorandom<=3)
	{
		alert(Minumerorandom);
		alert("Vamos,la proxima se puede");
	}

	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN