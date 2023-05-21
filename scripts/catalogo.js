let carrito = []
let tablaCatalogo = document.getElementById('catalogo')
let cantidadCarrito = document.getElementById('cantidadCarrito')
let notificacion = document.querySelector('#noti');
let textoError = document.querySelector('#notigrax');

productos.forEach((producto) => {
  let catalogo = document.createElement('div')
  catalogo.className = 'tarjeta'
  catalogo.innerHTML = `
    <h2 class="nombreProducto">${producto.nombre}</h2>
    <img class="imagenProducto" src="${producto.imagen}">
    <h3 class="precioProducto">${producto.precio} €</h3>
    `

  tablaCatalogo.append(catalogo)

  let comprar = document.createElement("button")
  comprar.className = 'comprame'
  comprar.innerText = "Comprar";

  catalogo.append(comprar);

  let cantidad = document.createElement("input")
  cantidad.min = 0;
  cantidad.className = 'cantidad'
  cantidad.type = 'number'
  cantidad.placeholder = 'Cantidad'

  catalogo.append(cantidad)

  comprar.addEventListener('click', () => {
    const cantidadSeleccionada = parseInt(cantidad.value);
    if(isNaN(cantidadSeleccionada) || cantidadSeleccionada <= 0) {
      textoError.textContent = 'Debes indicar una cantidad válida'
      notificacion.classList.add('mostrar')

      setTimeout(() => {
        notificacion.classList.remove('mostrar');
      }, 3000);
    }
    else {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        imagen: producto.imagen,
        precio: producto.precio,
        cantidad: cantidadSeleccionada
      })
      sessionStorage.setItem("carrito", JSON.stringify(carrito));
      carritoCounter()
    }
  })
})

const buscador = document.getElementById("buscador");

buscador.addEventListener('input', () => {
  let busqueda = buscador.value.toLowerCase()
  let tarjetas = tablaCatalogo.querySelectorAll('.tarjeta')

  tarjetas.forEach((tarjeta) => {
    let nombreProducto = tarjeta.querySelector('.nombreProducto').textContent.toLowerCase()

    if (nombreProducto.includes(busqueda))
      tarjeta.style.display = 'block';
    else
      tarjeta.style.display = 'none';
  })
})