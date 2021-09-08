//evento pantalla principal  
window.onload = function (){
    const efecto = document.querySelector("#effect");

    window.addEventListener('scroll',scrollEfecto);

    function scrollEfecto () {
        if (window.scrollY >= 500) {
            efecto.style.opacity ='1';
            efecto.style.transform = 'translateX(0px)';
            efecto.style.transition ='1s ease-in-out' 
        }
        else {
            efecto.style.opacity = '0';
            efecto.style.transform = 'translateX(-50px)';
        }
    }
}

//formulario de contacto (CONTACTO.HTML)

var getContacto = function (){
    let nombre = document.getElementById("nombre_contacto").value;
    let correo = document.getElementById("correo_contacto").value;
    let telefono = document.getElementById("telefono_contacto").value;
    let nota = document.getElementById("nota_contacto").value;

    console.log("Cliente: " + nombre + "; correo: " + correo + "; Telefono: " + telefono + "; nota" + nota);
    
    //paso de información al localstorage

    const enJSON_nombre = JSON.stringify(nombre)
    const enJSON_correo = JSON.stringify(correo)
    const enJSON_telefono = JSON.stringify(telefono)
    const enJSON_nota = JSON.stringify(nota)

    localStorage.setItem("Cliente: ", enJSON_nombre);
    localStorage.setItem("Correo: ", enJSON_correo);
    localStorage.setItem("Telefono: ", enJSON_telefono);
    localStorage.setItem("Nota: ", enJSON_nota);
}

//AJAX
const URLGET = "data/datos.json"

$("#masInformacion").click(() => {
  $.get(URLGET,function (respuesta,estado){
      if(estado === "success"){
        let misDatos = respuesta;
        for (const dato of misDatos) {
          $("body").prepend(`<div>
                                <h3>${dato.zona}</h3>
                                <p> ${dato.telefono}</p>
                                </div>`)
        }
      }
  });
});