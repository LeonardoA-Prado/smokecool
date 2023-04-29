const catalogoContainer = document.querySelector(".container");
const input = document.getElementById('buscador');

CrearCatalogo();

function CrearCatalogo(){

    //Contenedor
    const contenedorTablas = document.createElement("div");
    contenedorTablas.classList.add("contenedorTabla");

    //Titulo para el catalogo de sabores de cachimbas
    const nombreSabores = document.createElement("p");
    nombreSabores.textContent = 'Sabores de cachimba';

    //Tabla de cachimbas
    const tablaSabores = document.createElement("table");
    tablaSabores.classList.add("tabla");

    //Primera fila (Indice)
    const indiceSabores = document.createElement("tr")
    indiceSabores.classList.add("indices");

    const saboresFotos = document.createElement("th");
    saboresFotos.textContent = "Productos";

    const saboresDescripción= document.createElement("th");
    saboresDescripción.textContent = "Descripción";

    const saboresPvP = document.createElement("th");
    saboresPvP.textContent = "Precio por unidad";

    const saboresCantidad = document.createElement("th");
    saboresCantidad.textContent = "Cantidad";

    const saboresBoton = document.createElement("th");
    saboresBoton.textContent = "Comprar"

    //Segunda fila (Mango)
    
    const saborMango = document.createElement("tr");
    saborMango.classList.add("estiloProductos");

    const saborMangoFoto = document.createElement("td");

    const fotoMango = document.createElement("img");
    fotoMango.classList.add("fotoProductos");
    fotoMango.src = "images/71HXHqmeCmL.__AC_SX300_SY300_QL70_ML2_.jpg";

    const saborMangoDescripción= document.createElement("td");
    saborMangoDescripción.classList.add("descripciones");
    
    const descripciónMango = document.createElement("p");
    descripciónMango.textContent = "Sabor de Cachimba de Mango Brasileño (250 g)";

    const idMango = document.createElement("p");
    idMango.textContent = "ID : F38";

    const saborMangoPvP = document.createElement("td");
    saborMangoPvP.classList.add("PvP");

    const PvPMango = document.createElement("p");
    PvPMango.textContent = "150€ ";

    const saborMangoCantidad = document.createElement("td");
    saborMangoCantidad.classList.add("cantidad");

    const cantidadMangoContador = document.createElement("input");
    cantidadMangoContador.setAttribute("type","number");

    const saborMangoBoton = document.createElement("td");
    saborMangoBoton.classList.add("botones")

    const botonMango = document.createElement("button");
    botonMango.textContent = "Añadir al carrito de la compra";

    //Tercera fila (Pistacho) 

    const saborPistacho = document.createElement("tr");
    saborPistacho.classList.add("estiloProductos");

    const saborPistachoFoto = document.createElement("td");

    const fotoPistacho = document.createElement("img");
    fotoPistacho.classList.add("fotoProductos");
    fotoPistacho.src = "images/250g-pistachio-kiss_1.jpg";

    const saborPistachoDescripción= document.createElement("td");
    saborPistachoDescripción.classList.add("descripciones");
    
    const descripciónPistacho = document.createElement("p");
    descripciónPistacho.textContent = "Sabor de Cachimba de Pistacho Picante (250 g)";

    const idPistacho= document.createElement("p");
    idPistacho.textContent = "ID : A81";

    const saborPistachoPvP = document.createElement("td");
    saborPistachoPvP.classList.add("PvP");

    const PvPPistacho = document.createElement("p");
    PvPPistacho.textContent = "23€ ";

    const saborPistachoCantidad = document.createElement("td");
    saborPistachoCantidad.classList.add("cantidad");

    const cantidadPistachoContador = document.createElement("input");
    cantidadPistachoContador.setAttribute("type","number");

    const saborPistachoBoton = document.createElement("td");
    saborPistachoBoton.classList.add("botones")

    const botonPistacho = document.createElement("button");
    botonPistacho.textContent = "Añadir al carrito de la compra";

    //Cuarta Fila (Clorofila) Estoy en ello

    //Implementar el indice

    indiceSabores.appendChild(saboresFotos);
    indiceSabores.appendChild(saboresDescripción);
    indiceSabores.appendChild(saboresPvP);
    indiceSabores.appendChild(saboresCantidad);
    indiceSabores.appendChild(saboresBoton)

    //Implementar Mango

    saborMangoFoto.appendChild(fotoMango);
    saborMangoDescripción.appendChild(descripciónMango);
    saborMangoDescripción.appendChild(idMango)
    saborMangoPvP.appendChild(PvPMango);
    saborMangoCantidad.appendChild(cantidadMangoContador);
    saborMangoBoton.appendChild(botonMango);

    saborMango.appendChild(saborMangoFoto);
    saborMango.appendChild(saborMangoDescripción);
    saborMango.appendChild(saborMangoPvP);
    saborMango.appendChild(saborMangoCantidad);
    saborMango.appendChild(saborMangoBoton);

    //Implementar Pistacho

    saborPistachoFoto.appendChild(fotoPistacho);
    saborPistachoDescripción.appendChild(descripciónPistacho);
    saborPistachoDescripción.appendChild(idPistacho)
    saborPistachoPvP.appendChild(PvPPistacho);
    saborPistachoCantidad.appendChild(cantidadPistachoContador);
    saborPistachoBoton.appendChild(botonPistacho);
 
    saborPistacho.appendChild(saborPistachoFoto);
    saborPistacho.appendChild(saborPistachoDescripción);
    saborPistacho.appendChild(saborPistachoPvP);
    saborPistacho.appendChild(saborPistachoCantidad);
    saborPistacho.appendChild(saborPistachoBoton);

    //Implementar filasSabores

    tablaSabores.appendChild(indiceSabores);
    tablaSabores.appendChild(saborMango);
    tablaSabores.appendChild(saborPistacho);

    //Implementar tablas

    contenedorTablas.appendChild(nombreSabores);
    contenedorTablas.appendChild(tablaSabores)
    catalogoContainer.appendChild(contenedorTablas);
}

