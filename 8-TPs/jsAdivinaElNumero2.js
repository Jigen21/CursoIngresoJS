/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var NumeroIngresado;

function comenzar()
{
	contadorIntentos=0;
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	document.getElementById('intentos').value=contadorIntentos;
	alert(numeroSecreto);
	//Genero el número RANDOM entre 1 y 100
	 
	

}

function verificar()
{
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;
	NumeroIngresado=document.getElementById('numero').value;
	
		if(contadorIntentos>0 && NumeroIngresado==numeroSecreto)
		{
			switch(contadorIntentos)
			{
				case 1:
				alert("Usted es psiquico");
				break;

				case 2:
				alert("excelente percepcion");
				break;

				case 3:
				alert("esto es suerte");
				break;

				case 4:
				alert("excelente tecnica");
				break;

				case 5:
				alert("Usted esta en la media");
				break;

				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				alert("Falta tecnica!!");
				break;

				default:
				alert("afortunado en el amor");
			}
		}

	

}