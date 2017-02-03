/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    //La funcion para sumar
	var numeroUno;
	var numeroDos;
	var Resultado;
	//Defino las variables
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	//Tomo el ID del html,y defino la informacion
	numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    //Transformo los numeros
	Resultado=numeroUno + numeroDos;
	//Defino el resultado,el cual seria la suma del numero uno y el numero dos
	alert("La Suma Es " + Resultado);
	//Muestro la informacion el cual seria la frase y el Resultado
}

function restar()
{
	//Lo mismo que arriba solo que restando en el Resultado
	var numeroUno;
	var numeroDos;
	var Resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
	Resultado=numeroUno-numeroDos;
	alert("La Resta Es " + Resultado);
}

function multiplicar()
{ 
	//Lo mismo que el primero,solo que multiplicando en el Resultado
	var numeroUno;
	var numeroDos;
	var Resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
	Resultado=numeroUno * numeroDos;
	alert("La Multiplicacion Es " + Resultado);
}

function dividir()
{
	//Lo mismo que en el primero,solo que dividiendo el Resultado
	var numeroUno;
	var numeroDos;
	var Resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
	Resultado=numeroUno / numeroDos;
	alert("La Division Es " + Resultado);
}

