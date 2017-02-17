function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("ingrese Si para continuar");
		if(numero>0)
		{
		positivo=positivo+numero;
		}
		if(numero<0)
		{
		   negativo=negativo*numero
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN