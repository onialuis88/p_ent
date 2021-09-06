$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
  });

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

//formulario de venta de instrumento (VENTA.HTML)

var getVenta = function (){
    let nombre = document.getElementById("nombre_venta").value;
    let instrumento = document.getElementById("instrumento_venta").value;
    let telefono = document.getElementById("telefono_venta").value;

    console.log("Cliente: " + nombre + "; Instrumento: " + instrumento + "; Telefono: " + telefono);
    
    //paso de información al localstorage

    const enJSON_nombre = JSON.stringify(nombre)
    const enJSON_instrumento = JSON.stringify(instrumento)
    const enJSON_telefono = JSON.stringify(telefono)
    
    localStorage.setItem("Nombre: ", enJSON_nombre);
    localStorage.setItem("Instrumento: ", enJSON_instrumento);
    localStorage.setItem("Estado", enJSON_telefono);
}