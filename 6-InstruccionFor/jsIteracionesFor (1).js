function Mostrar()
{
   var cont=0;
   var random;
   var contador1=0;
   var contador2=0;
   var contador3=0;
   var contador4=0;
   var contador5=0;
   var contador6=0;
   var contador7=0;
   var contador8=0;
   var contador9=0;
   var contador10=0;

   for(;cont<100;cont++)
   {
   	random= Math.floor((Math.random() * 10) + 1);
   	

   	switch(random)
   	{
   		case 1:
   		contador1++;
   		break;

   		case 2:
   		contador2++;
   		break;

   		case 3:
   		contador3++;
   		break;

   		case 4:
   		contador4++;
   		break;

   		case 5:
   		contador5++;
   		break;

   		case 6:
   		contador6++;
   		break;
 //probamos el continue para sacar el menor numero de veces el 7
   		case 7:
   		if(contador7==7)
   		{
   			
   			continue;
   		}
   		contador7++;
   		break;

   		case 8:
   		contador8++;
   		break;

   		case 9:
   		contador9++;
   		break;

   		case 10:
   		contador10++;


   	}

   }
   console.log("la cantidad de 1 es " + contador1/cont*100+"%");
   console.log("la cantidad de 2 es " + contador2/cont*100+"%");
   console.log("la cantidad de 3 es " + contador3/cont*100+"%");
   console.log("la cantidad de 4 es " + contador4/cont*100+"%");
   console.log("la cantidad de 5 es " + contador5/cont*100+"%");
   console.log("la cantidad de 6 es " + contador6/cont*100+"%");
   //Cuenta para sacar solo el /%
   console.log("la cantidad de 7 es " + contador7*cont/100+"%");
   console.log("la cantidad de 8 es " + contador8/cont*100+"%");
   console.log("la cantidad de 9 es " + contador9/cont*100+"%");
   console.log("la cantidad de 10 es " + contador10/cont*100+"%");
   console.log(cont);

   //contador1*contador/100
   
   
   


  /* for(cont=0;cont<5;cont++)
   {
   	console.log(cont);
   }

   for(i=5;i<5;i++)
   {
   	console.log(i);
   }*/

   /*for(;cont<5;cont++)
    {
       console.log(cont);
    }
*/

   /*for(;cont<5;)
   {
   	console.log(cont);
   	cont++;

   	if(cont==5)
   	{
   	  break;
   	}

   }*/
}