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
    idMango.textContent = "ID : F38"

    const saborMangoPvP = document.createElement("td");
    saborMangoPvP.classList.add("PvP")

    const PvPMango = document.createElement("p");
    PvPMango.textContent = "150€ ";

    const saborMangoCantidad = document.createElement("td");
    saborMangoCantidad.classList.add("cantidad")

    const cantidadMangoContador = document.createElement("input")
    cantidadMangoContador.setAttribute("type","number")

    //Tercera fila (Pistacho) Estoy en ello todavia

    //Implementar el indice

    indiceSabores.appendChild(saboresFotos);
    indiceSabores.appendChild(saboresDescripción);
    indiceSabores.appendChild(saboresPvP);
    indiceSabores.appendChild(saboresCantidad);

    //Implementar Mango

    saborMangoFoto.appendChild(fotoMango);
    saborMangoDescripción.appendChild(descripciónMango);
    saborMangoDescripción.appendChild(idMango)
    saborMangoPvP.appendChild(PvPMango);
    saborMangoCantidad.appendChild(cantidadMangoContador);

    saborMango.appendChild(saborMangoFoto);
    saborMango.appendChild(saborMangoDescripción);
    saborMango.appendChild(saborMangoPvP);
    saborMango.appendChild(saborMangoCantidad);

    //Implementar filasSabores

    tablaSabores.appendChild(indiceSabores);
    tablaSabores.appendChild(saborMango)

    //Implementar tablas

    contenedorTablas.appendChild(nombreSabores);
    contenedorTablas.appendChild(tablaSabores)
    catalogoContainer.appendChild(contenedorTablas);
}

