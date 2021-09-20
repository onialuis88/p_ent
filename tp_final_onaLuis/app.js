//DOM

import { venta_instrumento } from "./constructor.js";
import { informacion } from "./datos.js";

document.getElementById("formularioVenta")
document.addEventListener("submit", e => {
    e.preventDefault();

    //Obtencion de valores del formulario del HTML
    const nombre = document.getElementById("nombre").value;
    const instrumento = document.getElementById("instrumento").value;
    const precio = document.getElementById("precio").value;
    const telefono = document.getElementById("telefono").value;

    //Creación del objeto
    const labelinstr = new venta_instrumento (nombre, instrumento, precio, telefono)
    const lbl = new informacion();


    lbl.addInstrumento(labelinstr);
    $(".btn-secondary").hide();
});

//ACUERDO DE ESTADO DE SALUD

let checkbox = document.querySelector('#chequeo');
let button = document.querySelector('#masInformacion');

button.style.display = 'none';

checkbox.addEventListener('change', () => {
    if(!checkbox.checked) {
        button.style.display = 'none'
        }
    else button.style.display = null;
})

//AJAX

document.querySelector('#masInformacion').addEventListener('click', traerDatos);

function traerDatos(){
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
                        
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            let res = document.querySelector('#res');
            res.innerHTML = ''; //res.innerHTML para que el boton no repita al hacer click y ahorrar poner show o hide
            for(let item of datos){
                res.innerHTML += `
                <tr>
                  <td>${item.nombre}</td>
                  <td>${item.direccion}</td>
                  <td>${item.telefono}</td>
                </tr>
                `
            }
        }
    }
}

