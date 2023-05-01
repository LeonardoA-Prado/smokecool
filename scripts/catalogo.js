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

const productos = [];

const filasTabla = document.querySelectorAll(".tablaSabores tbody tr");
filasTabla.forEach(fila => {
  const producto = {
    id: fila.querySelector(".id").textContent,
    cantidad: fila.querySelector(".contador").value,
  };
  productos.push(producto);
});

console.log(productos);

