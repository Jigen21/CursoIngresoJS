function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	respuesta=prompt("Ingrese un numero")

	while(respuesta!="si")
	{
		contador++;
		respuesta=parseInt(respuesta);
		acumulador=acumulador+respuesta;
		respuesta=prompt("Ingrese Si para parar")
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN