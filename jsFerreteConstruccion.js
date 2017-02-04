/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  var Largo;
  var Ancho;
  var Resultado;
  Largo=document.getElementById('Largo').value;
  Ancho=document.getElementById('Ancho').value;
  Largo=parseInt(Largo);
  Ancho=parseInt(Ancho);
  Resultado=parseInt(Resultado);
  Resultado=(((Largo+Ancho)*2)*3);
  // es la cuenta para conseguir el resultado de los hilos de alambre multiplicado por 3
  alert("La cantidad de alambre a comprar es " + Resultado);

}
function Circulo () 
{
   var radio;
   var Resultado;
   radio=document.getElementById('Radio').value;
   radio=parseInt(radio);
   Resultado=parseInt(Resultado);
   Resultado=((radio*2*3.14)*3);
   // es la cuenta para sacar el perimetro del circulo multiplicado por los 3 hilos de alambre
   alert("La cantidad de alambre a comprar es " + Resultado);

}
function Materiales () 
{
	var Largo;
	var Ancho;
	var BolsasDeCemento;
	var BolsasDeCal;
	Largo=document.getElementById('Largo');
	Ancho=document.getElementById('Ancho');
	Largo=parseInt(Largo);
	Ancho=parseInt(Ancho);
	BolsasDeCemento=parseInt(BolsasDeCemento);
	BolsasDeCal=parseInt(BolsasDeCal);
	ResultadoUno=(Largo+Ancho)*2)


}