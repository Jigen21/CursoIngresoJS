function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var Numeros;
	var SumaDeLosNegativos=0;
	var SumaDeLosPositivos=0;
	var CantidadDePositivos=0;
  var CantidadDeNegativos=0;
  var CantidadDeCeros=0;
  var PromedioDePositivos;
  var PromedioDeNegativos;
  var CantidadDeNumerosPares=0;

	while(respuesta!="no")
	{
      	contador++;
      	Numeros=prompt("Ingrese Siguiente Numero");
      	Numeros=parseInt(Numeros);
      	//Suma De Los Negativos y cantidad de negativos
      	if(Numeros<0)
      		{   
      			SumaDeLosNegativos=parseInt(SumaDeLosNegativos);
      			SumaDeLosNegativos=SumaDeLosNegativos+Numeros;
      			CantidadDeNegativos=parseInt(CantidadDeNegativos);
      		    CantidadDeNegativos++;
      			
      		}
      	//Suma de los positivos	y cantidad de positivos
      	if(Numeros>0)
      	{
      		SumaDeLosPositivos=parseInt(SumaDeLosPositivos);
      		SumaDeLosPositivos=SumaDeLosPositivos+Numeros;
      		CantidadDePositivos=parseInt(CantidadDePositivos);
      	    CantidadDePositivos++;
      	}	

      	//Cantidad De Ceros
      	if(Numeros==0)
      	{
      		CantidadDeCeros=parseInt(CantidadDeCeros);
      		CantidadDeCeros++;
      	}

      	//Cantidad De Numeros Pares
      	if(Numeros%2==0)
      	{
      		CantidadDeNumerosPares=parseInt(CantidadDeNumerosPares);
      		CantidadDeNumerosPares++;
      	}
        
        respuesta=prompt("Ponga No para dejar de ingresar numeros");
        PromedioDePositivos=SumaDeLosPositivos/contador;
        PromedioDeNegativos=SumaDeLosNegativos/contador;
      	

	   
	}
	document.write("SumaDeLosNegativos "+SumaDeLosNegativos+"<br>");
	document.write("SumaDeLosPositivos "+SumaDeLosPositivos+"<br>");
	document.write("CantidadDeNumerosPositivos "+CantidadDePositivos+"<br>");
	document.write("CantidadDeNumerosNegativos "+CantidadDeNegativos+"<br>");
	document.write("CantidadDeCeros "+CantidadDeCeros+"<br>");
	document.write("CantidadDeNumerosPares "+CantidadDeNumerosPares+"<br>");
	document.write("PromedioDeNumerosPositivos "+PromedioDePositivos+"<br>");
	document.write("PromedioDeNumerosNegativos "+PromedioDeNegativos+"<br>");

	




}//FIN DE LA FUNCIÓN