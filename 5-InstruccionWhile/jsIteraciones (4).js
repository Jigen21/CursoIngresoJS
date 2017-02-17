function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	//while(!(numero>=0&&<=9))
	while(numero<0||numero>=9)
	{
      numero=prompt("Reintente")
	}
    
	document.getElementById('Numero').value=numero



}//FIN DE LA FUNCIÓN