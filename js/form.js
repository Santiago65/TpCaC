    var getData = function (){
    var name = document.getElementById ("nombreapellido").value;
    var mail = document.getElementById ("correoelectronico").value;
    var phone = document.getElementById ("telefono").value;
    var mensaje = document.getElementById ("mensaje").value;
    var usuario = document.getElementById('nombreapellido').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var correo = document.getElementById('correoelectronico').value;
    if (correo.length == 0) {
      alert('Introduce un email');
      return;
    }
    var telefono = document.getElementById('telefono').value;
    if (telefono.length == 0) {
      alert('No has puesto el telefono');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
      alert('No has escrito el mensaje');
      return;
    }
    
    
     console.log(name+" "+mail+" "+phone+" "+mensaje); 
     document.write("Nombre:"+" "+name+" "+"<br>"+"email:"+" "+mail+" "+"<br>"+"Teléfono:"+" "+phone+" "+"<br>"+"Mensaje:"+" "+mensaje+"<br>"+"El formulario fue enviado con exito"+"<br>"+"Volver a la página de inicio"+" "+'<a href="/index.html">Inicio</a>');
    } 

