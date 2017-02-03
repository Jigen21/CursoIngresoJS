/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
   var NumeroUno;
   var NumeroDos;
   var Resultado;
   NumeroUno=document.getElementById('numeroUno').value;
   NumeroDos=document.getElementById('numeroDos').value;
   NumeroUno=parseInt(NumeroUno);
   NumeroDos=parseInt(NumeroDos);
   Resultado=NumeroUno + NumeroDos;
   alert("la suma es " + Resultado);
}

