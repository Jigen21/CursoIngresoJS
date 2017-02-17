/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

 var edad;
 var sexo;
 var verificacion=1;
 var estadocivil;
 var sueldobruto;
 var legajo;
 var nacionalidad;

function ComenzarIngreso () 
{
	while(verificacion==1)
	  {
      edad=prompt("ingrese su edad");
      edad=parseInt(edad);

      if (edad>=18&&edad<=90)
      {
      	document.getElementById("Edad").value=edad;
      	sexo=prompt("Cual es su genero?");
      	if(sexo=="m"  || sexo=="f")
      	{
      		document.getElementById("Sexo").value=sexo;
      		estadocivil=prompt("Cual es su estado civil?");
      		estadocivil=parseInt(estadocivil);

      		if(estadocivil==1||estadocivil==2||estadocivil==3||estadocivil==4)
      		{
      			if(estadocivil==1)
      			{
      			estadocivil="soltero";
      			}

      			else if(estadocivil==2)
      			{
      			estadocivil="casado";
      			}

      			else if(estadocivil==3)
      			{
      			estadocivil="divorciado";
      			}

      			else if(estadocivil==4)
      			{
      			estadocivil="viudo";
      			}

      			document.getElementById("EstadoCivil").value=estadocivil;
      			sueldobruto=prompt("ingrese su sueldo bruto");
      			
      			if(sueldobruto>8000)
      			{
      				document.getElementById("Sueldo").value=sueldobruto;
      				legajo=prompt("Ibgrese su legajo");

      				if(legajo>0&&legajo<=9999)
      				{
      					document.getElementById("Legajo").value=legajo;
      					nacionalidad=prompt("Ingrese su nacionalidad")

      					if (nacionalidad=="A")
      					{
      						nacionalidad="Argentino";
      						document.getElementById("Nacionalidad").value=nacionalidad;
      					}

      					if (nacionalidad=="E")
      					{
      						nacionalidad="Extranjero";
      						document.getElementById("Nacionalidad").value=nacionalidad;
      					}

      					if (nacionalidad=="N")
      					{
      						nacionalidad="Nacionalizado";
      						document.getElementById("Nacionalidad").value=nacionalidad;
      					}

      					
                        verificacion=0;

      				}

      				
      			}
      			
      			
      		}

      	}
      }

	}

   /*edad=prompt("Cual es su edad?");
   edad=parseInt(edad);
   if (edad>=18&&edad<=90)
   {
   	 document.getElementById('Edad').value=edad;
   	 sexo=prompt("cual es su genero?");
   }*/
}
