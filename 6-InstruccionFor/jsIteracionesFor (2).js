function Mostrar()
{

  //cargar planillas de un censo(100 planillas)si tienen mascota,y pueden tener 2 valores,si o no,pedir con prompt si tienen mascota

   var mascota;
   var cont;//son planillas
   var mascotasi=0;//si tienen mascota
   var mascotano=0;//los que no tienen mascota
   var mascotamal=0;
   var perro=0;
   var gato=0;
   var edad=0;
   var edadmayor=0;
   var edadmaxima=0;
   var edadminima=0;
   var sexo;
   var mujer=0;
   var EdadDelGato;
   var NombreDelPrimerGato;
   var PrimerGato="False";

   for(cont=0;cont<2;cont++)
  {
  	 mascota=prompt("Tienen mascota?");

     while(mascota!="si"&&mascota!="no")
     {
       mascota=prompt("Solo ingrese Si o no");
     }

    
     if(mascota=="si")//Cuando si tiene mascota
     {
       mascotasi++;
       
       sexo=prompt("Es Mujer u Hombre");//Pregunto el genero
       while(sexo!="m"&&sexo!="h")
        {
          sexo=prompt("Solo escriba m o h");
        }

        edad=prompt("Ingrese su edad");//Pregunto la edad al dueño


       mascota=prompt("Es Perro o Gato?")//pregunto si es perro o gato
       while(mascota!="perro"&&mascota!="gato")
        {
       	  mascota=prompt("Ingresa Perro o Gato");
        }

       if(mascota=="perro")//Si es perro
        {
       	  perro++;
       	  
        }

       if(mascota=="gato")//Si es gato
        {
       	  gato++;
        	

          NombreDelGato=prompt("Ingrese el nombre de su gato");//Pregunto el nombre del gato

          EdadDelGato=prompt("Ingrese la edad de su gato");//Pregunto la edad del gato


           while(EdadDelGato<0||EdadDelGato>15)
           {
              EdadDelGato=prompt("Por favor,ingrese una edad valida de 0 a 15");

           }


           if(PrimerGato=="False"&&sexo=="m"&&edad>30&&EdadDelGato<=5)//Pregunto si es el primero
               {
                 NombreDelPrimerGato=NombreDelGato;
                 PrimerGato="True";
                 

               }


        }


     

        

       //Necesito la persona mas vieja que no tenga mascota(listo)
       //Tarea,Necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga mas de 5 años de edad(validacion de 0 a 15 edad del gato)
     }

     if(mascota=="no")  //Cuando No tiene mascota
       {
 	   mascotano++;
 	   edad=prompt("Ingrese su edad")

 	   if(edad>edadmaxima) //Para saber la edad mas vieja que no tenga mascota
	  	{
          edadmaxima=edad;
          edadmayor=edad;
          
          
	  	}


 	   alert("No tienen mascota "+mascotano);
       }
  }
  alert(edadmayor);
  alert(NombreDelPrimerGato);

}