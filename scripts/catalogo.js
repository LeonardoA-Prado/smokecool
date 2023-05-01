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

const tabla = document.getElementsByTagName('table')[0];
const filasTabla = tabla.querySelectorAll('tr');

const datos = [];

for (let i = 1; i < filasTabla.length; i++) {
  const celdas = filas[i].querySelectorAll('td');
  const descripcion = celdas[1].querySelector('.descripcion').textContent;
  const id = celdas[1].querySelector('.id').textContent;
  const precio = celdas[2].querySelector('.precio').textContent;
  const cantidad = celdas[3].querySelector('.contador').value;
  datos.push({descripcion, id, precio, cantidad});
}

console.log(datos);

