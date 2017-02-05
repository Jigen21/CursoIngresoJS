/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
	var Centigrados;
	Fahrenheit=document.getElementById('Temperatura').value
	Fahrenheit=parseInt(Fahrenheit);
	Centigrados=parseInt(Centigrados);
	Centigrados=((Fahrenheit-32)/1.8);
	alert(Fahrenheit+ " son " + Centigrados + " centigrados"); 
}

function CentigradosFahrenheit () 
{
	var Centigrados;
	var Fahrenheit;
	Fahrenheit=document.getElementById('Temperatura').value;
	Centigrados=parseInt(Fahrenheit);
	Fahrenheit=parseInt(Fahrenheit);
	Fahrenheit=((Centigrados*1.8)+32);
	alert(Centigrados+ " son " + Fahrenheit + " centigrados");

}
