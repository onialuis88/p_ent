//FORMULARIO CONTACTO

$("#enviarInformacion").click(function() {
    
    let nombreContacto=$('#nombreContacto').val(),
        correo=$('#correoContacto').val(),
        asunto=$('#asuntoContacto').val(),
        mensaje=$('#mensajeContacto').val();
  
    // validacion de nombre
    if(nombreContacto == ""){
        cambiarColor("nombreContacto");
        mostraAlerta("Campo obligatorio");
        return false;
    }

    // validamos de correo
    if(correo == ""){
        cambiarColor("correoContacto");
        mostraAlerta("Campo obligatorio");
        return false;
    }

    // Validación del asunto
    if(asunto == ""){
        cambiarColor("asuntoContacto");
        mostraAlerta("Campo obligatorio");
        return false;
    }

    // Validación del mensaje
    if(mensaje == ""){
        cambiarColor("mensajeContacto");
        mostraAlerta("Campo obligatorio");
        return false;
    }

    alert(nombreContacto + " Le responderemos a la brevedad!!!");

    let nombreLocal = document.getElementById("nombreContacto").value;
    let correoLocal = document.getElementById("correoContacto").value;
    let asuntoLocal = document.getElementById("asuntoContacto").value;

    console.log("Cliente: " + nombreLocal + "; Correo: " + correoLocal + "; Asunto: " + asuntoLocal);
    
    //paso de información al localstorage

    const enJSON_nombre = JSON.stringify(nombreLocal)
    const enJSON_correo = JSON.stringify(correoLocal)
    const enJSON_asunto = JSON.stringify(asuntoLocal)
    
    localStorage.setItem("Nombre: ", enJSON_nombre);
    localStorage.setItem("Correo: ", enJSON_correo);
    localStorage.setItem("Asunto", enJSON_asunto);

    $('form').submit();
    return true;    
})

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombreContacto');
    colorDefault('correoContacto');
    colorDefault('asuntoContacto');
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensajeContacto');
});

// Cartel de alerta
function cambiarColor(dato){
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

// Muestra de alerta

function mostraAlerta(texto){
    $('#nombreContacto').before('<div class="alert">Error: '+ texto +'</div>');
} 

//capturacion por localstorage

function ventaLocal(){
    let nombreLocal = document.getElementById("nombreContacto").value;
    let correoLocal = document.getElementById("correoContacto").value;
    let asuntoLocal = document.getElementById("asuntoContacto").value;

    console.log("Cliente: " + nombreLocal + "; Correo: " + correoLocal + "; Asunto: " + asuntoLocal);
    
    //paso de información al localstorage

    const enJSON_nombre = JSON.stringify(nombreLocal)
    const enJSON_correo = JSON.stringify(correoLocal)
    const enJSON_asunto = JSON.stringify(asuntoLocal)
    
    localStorage.setItem("Nombre: ", enJSON_nombre);
    localStorage.setItem("Correo: ", enJSON_correo);
    localStorage.setItem("Asunto", enJSON_asunto);
    //alert("te enviaremos un mail")
}