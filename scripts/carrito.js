let carritoJSON = localStorage.getItem("carrito");
let carritoProductos = document.getElementById('carrito')

if (carritoJSON) {
  let carrito = JSON.parse(carritoJSON);

  carrito.forEach((producto) => {
    let fila = document.createElement('tr')
    fila.innerHTML = `
            <td>${producto.nombre}</td>
            <td><img src="${producto.imagen}"></td>
            <td>${producto.precio} €</td>
    `

    carritoProductos.append(fila)

    let eliminar = document.createElement('button')
    eliminar.className = 'eliminar'
    eliminar.innerText = "Eliminar"

    fila.append(eliminar)

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