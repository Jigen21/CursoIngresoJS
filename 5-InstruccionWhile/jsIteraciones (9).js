function Mostrar()
{

	var contador=0;
	// declarar variables
	var nombre;
	var respuesta='si';
    var edad; 
    var maximo;
    var minimo;
    var NombreDelMayor;
    var NombreDelMenor;
    var sexo;
    var nota;
    var notaminima;
    var sexominimo;
    var aprobados;
    var HombresDesaprobados;
    var MujeresDesaprobadas;
    var PromedioDeNotas;
    var AcumuladorDeNotas;
    var EdadDeMujeres;
    var PromedioDeEdadMujeres;
    var MujeresAprobadasConNotaPar;
    var Bandera="no";
    var NombreDel10;
    var SexoDel10;
    var EdadDel10;
    
	while(respuesta!='no')
	{
	  edad=prompt("Ingrese edad");
	  edad=parseInt(edad);

	  while(edad<0 || edad>100)
    	{
    		edad=prompt("Error,Ingrese edad");
	        edad=parseInt(edad);
    	}


      nombre=prompt("Por favor ingrese nombre");
      sexo=prompt("Defina su genero");

      while(sexo!="f" && sexo!="m")
      {
      	   sexo=prompt("Error,Defina su genero devuelta")
      }


      nota=prompt("Ingrese nota");
      nota=parseInt(nota);

      while(nota<0 || nota>11)
      {
      	 nota=prompt("Error,Ponga nota devuelta")
      	 nota=parseInt(nota);
      }
       

      //Guardar los datos del primero que se saco 10

      if(nota==10&&Bandera=="no")
      {
      	NombreDel10=nombre;
      	EdadDel10=edad;
      	SexoDel10=sexo;
      	Bandera=="si"

      }


	  contador=contador+1;

	   //Sumando y Sacando el promedio de las notas


	   AcumuladorDeNotas=AcumuladorDeNotas+nota;

		//cuantas mujeres y cuantos hombres desaprobaron

	  if(nota<3)
 	  	{
 	  		if(sexo=="f")
 	  		{
 	  			MujeresDesaprobadas=MujeresDesaprobadas+1;

 	  			

 	  		}
 	  		if(sexo=="m")
 	  		{
 	  			HombresDesaprobados=HombresDesaprobados+1;
 	  		}
 	  	}


	  //cantidad de personas aprobadas,se aprueba con 4,
       if(nota>3)
       {
       	aprobados=aprobados+1;
       }

       //la cantidad de mujeres que aprobaron con nota par y son menores de edad

       if(sexo=="f"&&edad<18)
       {
       	if(nota==4||nota==6||nota==8||nota==10)
       	{
           MujeresAprobadasConNotaPar++;

       	}
       }

      
      



       //la edad promedio de las mujeres(falta)

       if(sexo=="f")
       {
       	 EdadDeMujeres=EdadDeMujeres+edad;
       }
 	  


	  if(contador==1)
	  {
	  	maximo=edad;
	  	minimo=edad;
	  	nombre=NombreDelMayor;
	  	
	  }

	  else
	  {

	  	if(edad<minimo)
	  	{
          minimo=edad;
          NombreDelMenor=nombre;
          
          
	  	}

	  	if(edad>maximo)
	  	{
          maximo=edad;
          NombreDelMayor=nombre;
          
	  	}

	  	
	  }

	  if(contador==1)
	  {
	  	notaminima=nota;
	  	sexominimo=sexo;

	  }

	  else
	  {
	  	if(nota<notaminima)
	  	{
	  		notaminima=nota;
	  		sexominimo=sexo;
	  	}
	  }







	  promedionotas=AcumuladorDeNotas/contador;
	  respuesta=prompt("Para salir teclee no");
	}

		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN