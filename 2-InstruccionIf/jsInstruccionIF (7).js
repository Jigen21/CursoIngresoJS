function Mostrar()
{
//tomo la edad  
  var Edad;
  var Estado;
  Edad=document.getElementById('edad').value;
  Estado=document.getElementById('estadoCivil').value;
  alert(Estado);
  if(Edad<18)
  {
  	
  		alert("es muy pequeño para NO ser soltero");
  
  }
	


}//FIN DE LA FUNCIÓN