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