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
   var DivisoresPosibles=0;
   var Contador=1;
   var Resultado;
   var ContadorDos=1;
   var NumeroPrimo;
    

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
   
   if(NumeroIngresado>0)
   {

   while(NumeroDivisor<101)
   {
   	 if(NumeroIngresado%NumeroDivisor == 0)
   	 {
   	 	alert(NumeroDivisor);
   	 }
   	 NumeroDivisor++;
   }

   }
}

function VerificarPrimo()   //Le falta a este
{
   NumeroIngresado=document.getElementById('numero').value;
   NumeroIngresado=parseInt(NumeroIngresado);

   if(NumeroIngresado>0)
   {

      while(Contador<=NumeroIngresado)
      {
         if(NumeroIngresado%Contador==0)
         {
            DivisoresPosibles++;
         }
         Contador++;
      }
      if(DivisoresPosibles==2)
      {
         alert("Es un Numero Primo");
      }
      else
      {
         alert("No es un Numero Primo");
      }

   }
  
}

function NumerosPrimos()
{
   NumeroIngresado=document.getElementById('numero').value;
   NumeroIngresado=parseInt(NumeroIngresado);

   if(NumeroIngresado>0)
   {
      while(NumeroIngresado!=0)
      {
         DivisoresPosibles=0;
         Contador=1;

         while(Contador<=NumeroIngresado)
         {
            if(NumeroIngresado%Contador==0)
            {
               DivisoresPosibles++;
            }
            Contador++;
         }

      if(DivisoresPosibles==2)
         {
            NumeroPrimo=NumeroIngresado;
            alert(NumeroPrimo);
         }
        NumeroIngresado--;

      }


   }
   
}




