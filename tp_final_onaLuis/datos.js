export class informacion {
  addInstrumento(instrumento) {
      const label = document.getElementById("label");
      const element = document.createElement("div");
      
      
      element.innerHTML = `<div class = "labelVenta">
                                  <br><strong>Nombre </strong>: ${instrumento.nombre} 
                                  <br><strong>Instrumento</strong>: ${instrumento.instrumento} 
                                  <br><strong>Precio</strong>:  ${instrumento.precio} 
                                  <br><strong>Telefono</strong>: ${instrumento.telefono}
                           </div>
                                 
                              `;
      label.appendChild(element);
      alert("En la brevedad un luthier se comunicara con ud para coordinar visita");
      
  }
} 

