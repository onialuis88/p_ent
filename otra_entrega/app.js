let bienvenida = prompt("Hola, me indicaría su nombre por favor?");

alert("Bienvenido " + bienvenida);
alert("La pagina esta en construcción pero, aguarda a proximas actualizaciones :) ");

let edad = parseInt(prompt("Ingrese su edad: "));
anios(edad);

function anios(edad){
    if (edad > 18){
        alert("Tiene la edad para comprar cualquier artículo");
    }
    else if (edad < 18){
        alert("Tiene prohibido comprar bebidad alcohólicas");
    }
}

