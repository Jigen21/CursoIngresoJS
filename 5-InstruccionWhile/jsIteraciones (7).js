function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero=0;

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("ingrese Si para continuar");
		acumulador=acumulador+numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN