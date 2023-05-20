let carritoJSON = localStorage.getItem("carrito");
let carritoProductos = document.getElementById('carrito')
let total = 0;

if (carritoJSON) {
  let carrito = JSON.parse(carritoJSON);

  carrito.forEach((producto) => {
    let fila = document.createElement('tr')
    fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td><img class="imagenCarrito" src="${producto.imagen}"></td>
            <td>${producto.precio} €</td>
    `

    carritoProductos.append(fila)

    let cantidadCelda = document.createElement('td')
    let cantidad = document.createElement('input')
    cantidad.className = 'cantidaas'
    cantidad.type = 'number'
    cantidad.value = producto.cantidad;

    cantidadCelda.append(cantidad)
    fila.append(cantidadCelda)

    cantidad.addEventListener('click', () => {

    })


    let eliminarCelda = document.createElement('td')
    let eliminar = document.createElement('button')
    eliminar.className = 'eliminar'
    eliminar.innerText = "Eliminar"

    eliminarCelda.append(eliminar)
    fila.append(eliminarCelda)

    eliminar.addEventListener("click", () => {
      const index = carrito.findIndex(item => item.id === producto.id);
      if (index !== -1) {
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        fila.remove();
      }
    })

    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

  });

  let filaPago = document.createElement('tr')
  filaPago.innerHTML = `
    <td class="pagar" colspan="2"><b>Total a pagar</b></td>
    <td class="precio" colspan="3"><b>${total.toFixed(2)} €</b></td>
  `

  carritoProductos.append(filaPago)
} 
else
{
  let noti = document.createElement('div')
  noti.className = 'carritoVacio'
  noti.innerHTML = `
    <h1 class="compraYa">El carrito está vacío</h1>
  `
  carritoProductos.append(noti)
}