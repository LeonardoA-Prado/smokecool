let carritoJSON = localStorage.getItem("carrito");
let carritoProductos = document.getElementById('carrito')

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

    cantidadCelda.append(cantidad)
    fila.append(cantidadCelda)


    let eliminarCelda = document.createElement('td')
    let eliminar = document.createElement('button')
    eliminar.className = 'eliminar'
    eliminar.innerText = "Eliminar"

    eliminarCelda.append(eliminar)
    fila.append(eliminarCelda)

    eliminar.addEventListener("click", () => {
        fila.style.display = "none"
    })
  });
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