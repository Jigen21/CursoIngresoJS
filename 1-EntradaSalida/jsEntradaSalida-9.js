/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
   var sueldo;
   var resultado;
   //defino las variables
   sueldo=document.getElementById('sueldo').value;
   //tomo el ID de suelto con .value al final;
   sueldo=parseInt(sueldo);
   resultado=parseInt(resultado);
   //Transformo los numeros con parseInt
   resultado=(sueldo*1.10);
    //Multiplico el sueldo y lo defino como el resultado para aumentar el 10% del numero
    document.getElementById('resultado').value=resultado;
     //Tomo el ID de resultado despues de hacer la cuenta para que lo muestre
   alert("El resultado es " + resultado);
   //muestro el resultado de la cuenta con alert

	
}
