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
  const cantidadInput = fila.querySelector(".contador");
  const cantidad = cantidadInput.value.trim();
  const cantidadNum = cantidad !== "" ? parseInt(cantidad) : 0;
  const producto = {
    id: fila.querySelector(".id").textContent,
    cantidad: cantidadNum
  };
  productos.push(producto);
});

console.log(productos);

var n =0;

function IncrementarNumero() {
  n = n+1
  document.getElementById("number").innerHTML=n;
  OpcionCero();
}

function OpcionCero() {
  if(document.getElementById("number").innerHTML==0){
    document.getElementById("box").style.display="none";
  }
  else{
    document.getElementById("box").style.display="block";
  }
}


