export class label {
//Captura de datos
    addProduct(venta) {
      const productList = document.getElementById("label_venta");
      const element = document.createElement("div");
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Instrumento</strong>: ${venta.instrumento_venta} 
                      <strong>Precio</strong>: ${venta.precio_venta} 
                      <strong>Telefono</strong>: ${venta.telefono_venta}
                  </div>
              </div>
          `;
      productList.appendChild(element);
    }
}