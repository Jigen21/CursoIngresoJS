function Mostrar()
{
//tomo la edad  
  var Edad;
  var Estado;
  var Soltero;
  Edad=document.getElementById('edad').value;
  Estado=document.getElementById('estadoCivil').value;
  Soltero="Soltero"

  if(Edad<18&&Estado!=Soltero)
  {
  	
  		alert("es muy pequeño para NO ser soltero");
  
  }
	


}//FIN DE LA FUNCIÓN