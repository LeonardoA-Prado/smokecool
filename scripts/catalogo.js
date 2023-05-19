let carrito = []
let tablaCatalogo = document.getElementById('catalogo')

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
    cantidad.className = 'cantidad'
    cantidad.type = 'number'
    cantidad.placeholder = 'Cantidad'

    catalogo.append(cantidad)

    comprar.addEventListener('click', () => {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            imagen: producto.imagen,
            precio: producto.precio,
          });
          localStorage.setItem("carrito", JSON.stringify(carrito));
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