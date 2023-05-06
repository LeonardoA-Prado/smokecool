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

//Input Mango para coger el id y la cantidad, se actualiza la cantidad si le vuelves a dar y crear un nuevo array con la cantidad cambiada

const productoMango = [];

function InputMango() {
  const cantidadMango = document.getElementById("CMango");
  const canMango = cantidadMango.value.trim();
  const cMango = canMango !== "" ? parseInt(canMango) : 0;
  const idMango = document.getElementById("IdMango").textContent;
  let found = false;

  for (let i = 0; i < productoMango.length; i++) {
    if (productoMango[i].id === idMango) {
      productoMango[i].cantidad = cMango;
      found = true;
      break;
    }
  }

  if (!found) {
    const proMango = {
      id: idMango,
      cantidad: cMango
    };
    productoMango.push(proMango);
  }

  console.log(productoMango);
}

const inputMango = document.getElementById("BMango");
inputMango.addEventListener("input", InputMango());

const cantidadMango = document.getElementById("CMango");
cantidadMango.addEventListener("blur", function() {
  const idMango = document.getElementById("IdMango").textContent;
  const cMango = parseInt(cantidadMango.value.trim());
  const indexMango = productoMango.findIndex(mango => mango.id === idMango);
  if (indexMango >= 0 && cMango !== productoMango[indexMango].cantidad) {
    const updatedMango = {
      id: idMango,
      cantidad: cMango
    };
    productoMango.splice(indexMango, 1, updatedMango);
  }
  console.log(productoMango);
});

//Input Pistacho

const productoPistacho = [];

function InputPistacho() {
  const cantidadPistacho = document.getElementById("CPistacho");
  const canPistacho = cantidadPistacho.value.trim();
  const cPistacho = canPistacho !== "" ? parseInt(canPistacho) : 0;
  const idPistacho = document.getElementById("IdPistacho").textContent;
  let found = false;

  for (let i = 0; i < productoPistacho.length; i++) {
    if (productoPistacho[i].id === idPistacho) {
      productoPistacho[i].cantidad = cPistacho;
      found = true;
      break;
    }
  }

  if (!found) {
    const proPistacho = {
      id: idPistacho,
      cantidad: cPistacho
    };
    productoPistacho.push(proPistacho);
  }

  console.log(productoPistacho);
}

const inputPistacho = document.getElementById("BPistacho");
inputPistacho.addEventListener("input", InputPistacho());

const cantidadPistacho = document.getElementById("CPistacho");
cantidadPistacho.addEventListener("blur", function() {
  const idPistacho = document.getElementById("IdPistacho").textContent;
  const cPistacho = parseInt(cantidadPistacho.value.trim());
  const indexPistacho = productoPistacho.findIndex(pistacho => pistacho.id === idPistacho);
  if (indexPistacho >= 0 && cPistacho !== productoPistacho[indexPistacho].cantidad) {
    const updatedPistacho = {
      id: idPistacho,
      cantidad: cPistacho
    };
    productoPistacho.splice(indexPistacho, 1, updatedPistacho);
  }
  console.log(productoPistacho);
});


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


