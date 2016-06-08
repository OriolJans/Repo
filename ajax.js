function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
 
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
 
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
	  xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function enviarDatosAlumno(){

  divResultado = document.getElementById('resultado');
  nom=document.nuevo_alumno.nombre.value;
  ape=document.nuevo_alumno.apellido.value;
  curso=document.nuevo_alumno.curso.value;
 
  ajax=objetoAjax();
 
  ajax.open("POST", "registro.php",true);
  ajax.onreadystatechange=function() {
  	if (ajax.readyState==4) {
		divResultado.innerHTML = ajax.responseText
		LimpiarCampos();
	}
 }
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("nombre="+nom+"&apellido="+ape+"&curso="+curso)
}
 
function LimpiarCampos(){
  document.nuevo_alumno.nombre.value="";
  document.nuevo_alumno.apellido.value="";
  document.nuevo_alumno.curso.value="";
  document.nuevo_alumno.nombre.focus();
}