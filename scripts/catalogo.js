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

    comprar.addEventListener('click', () => {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
          });
          console.log(carrito)
          localStorage.setItem("carrito", JSON.stringify(carrito));
    })
})

const buscador = document.getElementById("buscador");
const filas = document.querySelectorAll(".tablaSabores tbody tr");

buscador.addEventListener("input", function () {
    const valorBuscado = this.value.trim().toLowerCase();

    filas.forEach(function (fila) {
        const textoFila = fila.textContent.trim().toLowerCase();
        const coincide = textoFila.includes(valorBuscado);
        fila.style.display = coincide ? "" : "none";
    });
});