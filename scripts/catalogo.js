const catalogoContainer = document.querySelector(".container");

CrearCatalogo();

function CrearCatalogo(){
    const contenedorTabla = document.createElement("div");
    contenedorTabla.classList.add("contenedorTabla");
    const tabla = document.createElement("table");
    tabla.classList.add("tabla");

    contenedorTabla.appendChild(tabla)
    catalogoContainer.appendChild(contenedorTabla);
}

