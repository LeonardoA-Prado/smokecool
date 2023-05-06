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

//Input Clorofila

const productoClorofila = [];

function InputClorofila() {
  const cantidadClorofila = document.getElementById("CClorofila");
  const canClorofila = cantidadClorofila.value.trim();
  const cClorofila = canClorofila !== "" ? parseInt(canClorofila) : 0;
  const idClorofila = document.getElementById("IdClorofila").textContent;
  let found = false;

  for (let i = 0; i < productoClorofila.length; i++) {
    if (productoClorofila[i].id === idClorofila) {
      productoClorofila[i].cantidad = cClorofila;
      found = true;
      break;
    }
  }

  if (!found) {
    const proClorofila = {
      id: idClorofila,
      cantidad: cClorofila
    };
    productoClorofila.push(proClorofila);
  }

  console.log(productoClorofila);
}

const inputClorofila = document.getElementById("BClorofila");
inputClorofila.addEventListener("input", InputClorofila());

const cantidadClorofila = document.getElementById("CClorofila");
cantidadClorofila.addEventListener("blur", function() {
  const idClorofila = document.getElementById("IdClorofila").textContent;
  const cClorofila = parseInt(cantidadClorofila.value.trim());
  const indexClorofila = productoClorofila.findIndex(clorofila => clorofila.id === idClorofila);
  if (indexClorofila >= 0 && cClorofila !== productoClorofila[indexClorofila].cantidad) {
    const updatedClorofila = {
      id: idClorofila,
      cantidad: cClorofila
    };
    productoClorofila.splice(indexClorofila, 1, updatedClorofila);
  }
  console.log(productoClorofila);
});

//Input Bacon

const productoBacon = [];

function InputBacon() {
  const cantidadBacon = document.getElementById("CBacon");
  const canBacon = cantidadBacon.value.trim();
  const cBacon = canBacon !== "" ? parseInt(canBacon) : 0;
  const idBacon = document.getElementById("IdBacon").textContent;
  let found = false;

  for (let i = 0; i < productoBacon.length; i++) {
    if (productoBacon[i].id === idBacon) {
      productoBacon[i].cantidad = cBacon;
      found = true;
      break;
    }
  }

  if (!found) {
    const proBacon = {
      id: idBacon,
      cantidad: cBacon
    };
    productoBacon.push(proBacon);
  }

  console.log(productoBacon);
}

const inputBacon = document.getElementById("BBacon");
inputBacon.addEventListener("input", InputBacon());

const cantidadBacon = document.getElementById("CBacon");
cantidadBacon.addEventListener("blur", function() {
  const idBacon = document.getElementById("IdBacon").textContent;
  const cBacon = parseInt(cantidadBacon.value.trim());
  const indexBacon = productoBacon.findIndex(bacon => bacon.id === idBacon);
  if (indexBacon >= 0 && cBacon !== productoBacon[indexBacon].cantidad) {
    const updatedBacon = {
      id: idBacon,
      cantidad: cBacon
    };
    productoBacon.splice(indexBacon, 1, updatedBacon);
  }
  console.log(productoBacon);
});

//Input Marihuana

const ArrayMarihuana = [];

function InputMarihuana() {
  const cantidadMarihuana = document.getElementById("CMarihuana");
  const canMarihuana = cantidadMarihuana.value.trim();
  const cMarihuana = canMarihuana !== "" ? parseInt(canMarihuana) : 0;
  const idMarihuana = document.getElementById("IdMarihuana").textContent;
  let found = false;

  for (let i = 0; i < ArrayMarihuana.length; i++) {
    if (ArrayMarihuana[i].id === idMarihuana) {
      ArrayMarihuana[i].cantidad = cMarihuana;
      found = true;
      break;
    }
  }

  if (!found) {
    const proMarihuana = {
      id: idMarihuana,
      cantidad: cMarihuana
    };
    ArrayMarihuana.push(proMarihuana);
  }

  console.log(ArrayMarihuana);
}

const inputMarihuana = document.getElementById("BMarihuana");
inputMarihuana.addEventListener("input", InputMarihuana());

const cantidadMarihuana = document.getElementById("CMarihuana");
cantidadMarihuana.addEventListener("blur", function() {
  const idMarihuana = document.getElementById("IdMarihuana").textContent;
  const cMarihuana = parseInt(cantidadMarihuana.value.trim());
  const indexMarihuana = ArrayMarihuana.findIndex(marihuana => marihuana.id === idMarihuana);
  if (indexMarihuana >= 0 && cMarihuana !== ArrayMarihuana[indexMarihuana].cantidad) {
    const updatedMarihuana = {
      id: idMarihuana,
      cantidad: cMarihuana
    };
    ArrayMarihuana.splice(indexMarihuana, 1, updatedMarihuana);
  }
  console.log(ArrayMarihuana);
});

//Input Maracuya

const ArrayMaracuya = [];

function InputMaracuya() {
  const cantidadMaracuya = document.getElementById("CMaracuya");
  const canMaracuya = cantidadMaracuya.value.trim();
  const cMaracuya = canMaracuya !== "" ? parseInt(canMaracuya) : 0;
  const idMaracuya = document.getElementById("IdMaracuya").textContent;
  let found = false;

  for (let i = 0; i < ArrayMaracuya.length; i++) {
    if (ArrayMaracuya[i].id === idMaracuya) {
      ArrayMaracuya[i].cantidad = cMaracuya;
      found = true;
      break;
    }
  }

  if (!found) {
    const proMaracuya = {
      id: idMaracuya,
      cantidad: cMaracuya
    };
    ArrayMaracuya.push(proMaracuya);
  }

  console.log(ArrayMaracuya);
}

const inputMaracuya = document.getElementById("BMaracuya");
inputMaracuya.addEventListener("input", InputMaracuya());

const cantidadMaracuya = document.getElementById("CMaracuya");
cantidadMaracuya.addEventListener("blur", function() {
  const idMaracuya = document.getElementById("IdMaracuya").textContent;
  const cMaracuya = parseInt(cantidadMaracuya.value.trim());
  const indexMaracuya = ArrayMaracuya.findIndex(maracuya => maracuya.id === idMaracuya);
  if (indexMaracuya >= 0 && cMaracuya !== ArrayMaracuya[indexMaracuya].cantidad) {
    const updatedMaracuya = {
      id: idMaracuya,
      cantidad: cMaracuya
    };
    ArrayMaracuya.splice(indexMaracuya, 1, updatedMaracuya);
  }
  console.log(ArrayMaracuya);
});

//Input Mandarina

const productoMandarina = [];

function InputMandarina() {
  const cantidadMandarina = document.getElementById("CMandarina");
  const canMandarina = cantidadMandarina.value.trim();
  const cMandarina = canMandarina !== "" ? parseInt(canMandarina) : 0;
  const idMandarina = document.getElementById("IdMandarina").textContent;
  let found = false;

  for (let i = 0; i < productoMandarina.length; i++) {
    if (productoMandarina[i].id === idMandarina) {
      productoMandarina[i].cantidad = cMandarina;
      found = true;
      break;
    }
  }

  if (!found) {
    const proMandarina = {
      id: idMandarina,
      cantidad: cMandarina
    };
    productoMandarina.push(proMandarina);
  }

  console.log(productoMandarina);
}

const inputMandarina = document.getElementById("BMandarina");
inputMandarina.addEventListener("input", InputMandarina());

const cantidadMandarina = document.getElementById("CMandarina");
cantidadMandarina.addEventListener("blur", function() {
  const idMandarina = document.getElementById("IdMandarina").textContent;
  const cMandarina = parseInt(cantidadMandarina.value.trim());
  const indexMandarina = productoMandarina.findIndex(mandarina => mandarina.id === idMandarina);
  if (indexMandarina >= 0 && cMandarina !== productoMandarina[indexMandarina].cantidad) {
    const updatedMandarina = {
      id: idMandarina,
      cantidad: cMandarina
    };
    productoMandarina.splice(indexMandarina, 1, updatedMandarina);
  }
  console.log(productoMandarina);
});

//Input Manzana

const productoManzana = [];

function InputManzana() {
  const cantidadManzana = document.getElementById("CManzana");
  const canManzana = cantidadManzana.value.trim();
  const cManzana = canManzana !== "" ? parseInt(canManzana) : 0;
  const idManzana = document.getElementById("IdManzana").textContent;
  let found = false;

  for (let i = 0; i < productoManzana.length; i++) {
    if (productoManzana[i].id === idManzana) {
      productoManzana[i].cantidad = cManzana;
      found = true;
      break;
    }
  }

  if (!found) {
    const proManzana = {
      id: idManzana,
      cantidad: cManzana
    };
    productoManzana.push(proManzana);
  }

  console.log(productoManzana);
}

const inputManzana = document.getElementById("BManzana");
inputManzana.addEventListener("input", InputManzana());

const cantidadManzana = document.getElementById("CManzana");
cantidadManzana.addEventListener("blur", function() {
  const idManzana = document.getElementById("IdManzana").textContent;
  const cManzana = parseInt(cantidadManzana.value.trim());
  const indexManzana = productoManzana.findIndex(manzana => manzana.id === idManzana);
  if (indexManzana >= 0 && cManzana !== productoManzana[indexManzana].cantidad) {
    const updatedManzana = {
      id: idManzana,
      cantidad: cManzana
    };
    productoManzana.splice(indexManzana, 1, updatedManzana);
  }
  console.log(productoManzana);
});

//Input Coco

const productoCoco = [];

function InputCoco() {
  const cantidadCoco = document.getElementById("CCoco");
  const canCoco = cantidadCoco.value.trim();
  const cCoco = canCoco !== "" ? parseInt(canCoco) : 0;
  const idCoco = document.getElementById("IdCoco").textContent;
  let found = false;

  for (let i = 0; i < productoCoco.length; i++) {
    if (productoCoco[i].id === idCoco) {
      productoCoco[i].cantidad = cCoco;
      found = true;
      break;
    }
  }

  if (!found) {
    const proCoco = {
      id: idCoco,
      cantidad: cCoco
    };
    productoCoco.push(proCoco);
  }

  console.log(productoCoco);
}

const inputCoco = document.getElementById("BCoco");
inputCoco.addEventListener("input", InputCoco());

const cantidadCoco = document.getElementById("CCoco");
cantidadCoco.addEventListener("blur", function() {
  const idCoco = document.getElementById("IdCoco").textContent;
  const cCoco = parseInt(cantidadCoco.value.trim());
  const indexCoco = productoCoco.findIndex(coco => coco.id === idCoco);
  if (indexCoco >= 0 && cCoco !== productoCoco[indexCoco].cantidad) {
    const updatedCoco = {
      id: idCoco,
      cantidad: cCoco
    };
    productoCoco.splice(indexCoco, 1, updatedCoco);
  }
  console.log(productoCoco);
});

//Input Pepinillo

const productosPepinillo = [];

function InputPepinillo() {
  const cantidadPepinillo = document.getElementById("CPepinillo");
  const canPepinillo = cantidadPepinillo.value.trim();
  const cPepinillo = canPepinillo !== "" ? parseInt(canPepinillo) : 0;
  const idPepinillo = document.getElementById("IdPepinillo").textContent;
  let found = false;

  for (let i = 0; i < productosPepinillo.length; i++) {
    if (productosPepinillo[i].id === idPepinillo) {
      productosPepinillo[i].cantidad = cPepinillo;
      found = true;
      break;
    }
  }

  if (!found) {
    const proPepinillo = {
      id: idPepinillo,
      cantidad: cPepinillo
    };
    productosPepinillo.push(proPepinillo);
  }

  console.log(productosPepinillo);
}

const inputPepinillo = document.getElementById("BPepinillo");
inputPepinillo.addEventListener("input", InputPepinillo());

const cantidadPepinillo = document.getElementById("CPepinillo");
cantidadPepinillo.addEventListener("blur", function() {
  const idPepinillo = document.getElementById("IdPepinillo").textContent;
  const cPepinillo = parseInt(cantidadPepinillo.value.trim());
  const indexPepinillo = productosPepinillo.findIndex(pepinillo => pepinillo.id === idPepinillo);
  if (indexPepinillo >= 0 && cPepinillo !== productosPepinillo[indexPepinillo].cantidad) {
    const updatedPepinillo = {
      id: idPepinillo,
      cantidad: cPepinillo
    };
    productosPepinillo.splice(indexPepinillo, 1, updatedPepinillo);
  }
  console.log(productosPepinillo);
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


