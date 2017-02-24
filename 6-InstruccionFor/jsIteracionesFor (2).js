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

   for(cont=0;cont<3;cont++)
  {
  	 mascota=prompt("Tienen mascota?")

     while(mascota!="si"&&mascota!="no")
     {
       mascota=prompt("Solo ingrese Si o no");
     }

    
     if(mascota=="si")
     {
       mascotasi++;
       alert("Tienen mascota "+mascotasi);

       mascota=prompt("Es Perro o Gato?")
       while(mascota!="perro"&&mascota!="gato")
       {
       	mascota=prompt("Ingresa Perro o Gato")
       }
       if(mascota=="perro")
       {
       	perro++;
       	alert(perro);
       }
       if(mascota=="gato")
       {
       	gato++;
       	alert(gato);
       }

       //Necesito la persona mas vieja que no tenga mascota
       //Tarea,Necesito saber el nombre del primer gato que sea de una mujer mayor a 30 años y el gato no tenga mas de 5 años de edad(validacion de 0 a 15 edad del gato)
     }

     if(mascota=="no")
       {
 	   mascotano++;
 	   edad=prompt("Ingrese su edad")

 	   if(edad>edadmaxima)
	  	{
          edadmaxima=edad;
          edadmayor=edad;
          
          
	  	}


 	   alert("No tienen mascota "+mascotano);
       }
  }
  alert(edadmayor);

}