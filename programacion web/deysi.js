document.getElementById("myform").addEventListener("submit", function(event){
event.preventDefault();
var nombre=document.getElementById("nombre").value;
var apellido=document.getElementById("apellido").value; 
var fecha=document.getElementById("fecha de acimiento").value;  
if(nombre && apellido && fecha) {
    document.getElementById("mensajeEXITO").innertext="mensaje enviado con exito";
    document.getElementById("mensajeEXITO").style.display="block";
    setTimeout(function(){
        document.getElementById("mensajeEXITO").style.display="none";  
        document.getElementById("myform").reset();
    }, 5000);
    }else{
        alert("porfavor complete el formulario ");
    }
    });