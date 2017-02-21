/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
 	var NumeroIngresado;
 	var Eleccion;
 	var NumeroDivisor=1;
    

function ComenzarIngreso () 
{
    

}



function NumerosPares()
{
   NumeroIngresado=document.getElementById('numero').value;
   NumeroIngresado=parseInt(NumeroIngresado);
   while(NumeroIngresado>0)
   {

   	if(NumeroIngresado % 2 == 0)
   	{
       alert(NumeroIngresado);
   	}
   	NumeroIngresado=NumeroIngresado-1;

   }
   
   
}

function NumerosImpares()
{
   NumeroIngresado=document.getElementById('numero').value;
   NumeroIngresado=parseInt(NumeroIngresado);
   while(NumeroIngresado>0)
   {

   	if(NumeroIngresado % 2 != 0)
   	{
       alert(NumeroIngresado);
   	}
   	NumeroIngresado=NumeroIngresado-1;

   }
   
   
}

function NumerosDivisibles()
{
   NumeroIngresado=document.getElementById('numero').value;
   NumeroIngresado=parseInt(NumeroIngresado);
   NumeroDivisor=parseInt(NumeroDivisor);
   
   while(NumeroDivisor<101)
   {
   	 if(NumeroIngresado%NumeroDivisor == 0)
   	 {
   	 	alert(NumeroDivisor);
   	 }
   	 NumeroDivisor++;
   }
}

function VerificarPrimo()   //Le falta a este
{
   NumeroIngresado=document.getElementById('numero').value;
   NumeroIngresado=parseInt(NumeroIngresado);
   NumeroDivisor=NumeroIngresado;

   while(NumeroIngresado>0)
   {
   	 NumeroIngresado--;
   	 if(NumeroIngresado%NumeroDivisor == 0)
   	 {
   	 	alert(NumeroIngresado)
   	 }
   	 
   }
  
}

function NumerosPrimos()
{
   alert("asdasd5");
}




