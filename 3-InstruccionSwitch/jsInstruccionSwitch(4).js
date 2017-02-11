function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
// febrero 28  abril 30  junio 30   septiembre 30  noviembre 30 
	
	switch(mesDelAño)
	{

		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
		alert("Tienen 30 dias");
		break;

		case"Febrero":
		alert("Tiene 28 dias");
		break;

		default:
		alert("Tienen 31 dias");
		break;

	}



}//FIN DE LA FUNCIÓN