/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*var Resultado;
	Resultado=2%10;
	alert(Resultado);
	Resultado=10%2;
	alert(Resultado);

	La muestra del profe sobre como sacar el resto en una cuenta

	var numeroDividendo;
	var numeroDivisor;
	var resto;
	dividendo.document.getElementById('numeroDividendo').value;
	divisor.document.getElementById('numeroDivisor').value;
	numeroDividendo=parseInt(numeroDividendo);
	numeroDivisor=parseInt(numeroDivisor);
	resto=numeroDividendo%numeroDivisor;
	alert("El resto es "+Resto);   

	Estaba mal<<despues de la variable va un "=",no un punto,luego document.get...*/


	var numeroDividendo;
	var numeroDivisor;
	var Resultado;
	//Defino las variables
	numeroDividendo=document.getElementById('numeroDividendo').value;
	numeroDivisor=document.getElementById('numeroDivisor').value;
	//Tomo el ID de los dos numeros
	numeroDividendo=parseInt(numeroDividendo);
	numeroDivisor=parseInt(numeroDivisor);
	//Transformo los numeros con parseInt
	Resultado=(numeroDividendo%numeroDivisor);
	//Saco el resto con el modulo "%", y lo defino como Resultado
	alert("El resto es " + Resultado);
	//Muestro el Resultado,el cual seria el resto de la operacion





}
