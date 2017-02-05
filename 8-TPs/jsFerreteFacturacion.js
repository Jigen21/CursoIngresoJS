/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var Resultado;
	//Defino las variables
	numeroUno=document.getElementById('PrecioUno').value;
	numeroDos=document.getElementById('PrecioDos').value;
	numeroTres=document.getElementById('PrecioTres').value;
	//Defino el Id
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);
	//Transformo los numeros
	resultado=numeroUno+numeroDos+numeroTres;
	//Hago la cuenta y lo defino como resultado
	alert("La suma es " + resultado);
	//Muestro el resultado en pantalla

}
function Promedio () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var Resultado;
	//Defino las variables
	numeroUno=document.getElementById('PrecioUno').value;
	numeroDos=document.getElementById('PrecioDos').value;
	numeroTres=document.getElementById('PrecioTres').value;
	//Defino el Id
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);
	//Transformo los numeros
	resultado=numeroUno+numeroDos+numeroTres;
	resultado=resultado/3;
	//Hago la suma de los 3 precios y los divido por su cantidad para conseguir el promedio
	alert("El promedio es " + resultado);
	//Muestro el promedio en pantalla
}
function PrecioFinal () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var Resultado;
	//Defino las variables
	numeroUno=document.getElementById('PrecioUno').value;
	numeroDos=document.getElementById('PrecioDos').value;
	numeroTres=document.getElementById('PrecioTres').value;
	//Defino el IdM
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);
	//Transformo los numeros
	resultado=numeroUno+numeroDos+numeroTres;
	resultado=resultado*1.21;
	//Hago la suma de los precios y los multiplico por 1.21,para conseguir el aumento del iva
	alert("El precio final es " + resultado);
	//Muestro el precio final en pantalla
}