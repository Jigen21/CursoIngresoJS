/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
   var NumeroUno;
   var NumeroDos;
   var Resultado;
   //Defino las variables
   NumeroUno=document.getElementById('numeroUno').value;
   NumeroDos=document.getElementById('numeroDos').value;
   //Tomo el Id del html,y las defino
   NumeroUno=parseInt(NumeroUno);
   NumeroDos=parseInt(NumeroDos);
   //Transformo los numeros mediante parseInt
   Resultado=NumeroUno + NumeroDos;
   //Sumo los numeros para sacar el resultado
   alert("la suma es " + Resultado);
   //Uso el alert para mostrar la informacion final,la cual seria la frase + el resultado
}

