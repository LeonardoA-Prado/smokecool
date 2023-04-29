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

    //Primera fila (Indice sabores)
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

    //Cuarta Fila (Clorofila) 

    const saborClorofila = document.createElement("tr");
    saborClorofila.classList.add("estiloProductos");

    const saborClorofilaFoto = document.createElement("td");
    const fotoClorofila = document.createElement("img");
    fotoClorofila.classList.add("fotoProductos");
    fotoClorofila.src = "images/smokain-intensify-menta-clorofila.jpg";

    const saborClorofilaDescripción= document.createElement("td");
    saborClorofilaDescripción.classList.add("descripciones");

    const descripciónClorofila = document.createElement("p");
    descripciónClorofila.textContent = "Sabor de Cachimba de Clorofila (250 g)";

    const idClorofila= document.createElement("p");
    idClorofila.textContent = "ID : E41";

    const saborClorofilaPvP = document.createElement("td");
    saborClorofilaPvP.classList.add("PvP");

    const PvPClorofila = document.createElement("p");
    PvPClorofila.textContent = "23€ ";

    const saborClorofilaCantidad = document.createElement("td");
    saborClorofilaCantidad.classList.add("cantidad");

    const cantidadClorofilaContador = document.createElement("input");
    cantidadClorofilaContador.setAttribute("type","number");

    const saborClorofilaBoton = document.createElement("td");
    saborClorofilaBoton.classList.add("botones")

    const botonClorofila = document.createElement("button");
    botonClorofila.textContent = "Añadir al carrito de la compra";

    //Quinta Fila (Bacon)

    const saborBacon = document.createElement("tr");
    saborBacon.classList.add("estiloProductos");

    const saborBaconFoto = document.createElement("td");

    const fotoBacon = document.createElement("img");
    fotoBacon.classList.add("fotoProductos");
    fotoBacon.src = "images/BBQ-600-rhj7fn.jpg";

    const saborBaconDescripción= document.createElement("td");
    saborBaconDescripción.classList.add("descripciones");

    const descripciónBacon = document.createElement("p");
    descripciónBacon.textContent = "Sabor de Cachimba de Bacon (250 g)";

    const idBacon= document.createElement("p");
    idBacon.textContent = "ID : A81";

    const saborBaconPvP = document.createElement("td");
    saborBaconPvP.classList.add("PvP");

    const PvPBacon = document.createElement("p");
    PvPBacon.textContent = "12€ ";

    const saborBaconCantidad = document.createElement("td");
    saborBaconCantidad.classList.add("cantidad");

    const cantidadBaconContador = document.createElement("input");
    cantidadBaconContador.setAttribute("type","number");

    const saborBaconBoton = document.createElement("td");
    saborBaconBoton.classList.add("botones")

    const botonBacon = document.createElement("button");
    botonBacon.textContent = "Añadir al carrito de la compra";

    //Sexta Fila (Marihuana)

    const saborMarihuana = document.createElement("tr");
    saborMarihuana.classList.add("estiloProductos");

    const saborMarihuanaFoto = document.createElement("td");

    const fotoMarihuana = document.createElement("img");
    fotoMarihuana.classList.add("fotoProductos");
    fotoMarihuana.src = "images/DSC_6087_grande.jpg";

    const saborMarihuanaDescripción= document.createElement("td");
    saborMarihuanaDescripción.classList.add("descripciones");

    const descripciónMarihuana = document.createElement("p");
    descripciónMarihuana.textContent = "Sabor de Cachimba de Marihuana (250 g)";

    const idMarihuana= document.createElement("p");
    idMarihuana.textContent = "ID : N98";

    const saborMarihuanaPvP = document.createElement("td");
    saborMarihuanaPvP.classList.add("PvP");

    const PvPMarihuana = document.createElement("p");
    PvPMarihuana.textContent = "5€ ";

    const saborMarihuanaCantidad = document.createElement("td");
    saborMarihuanaCantidad.classList.add("cantidad");

    const cantidadMarihuanaContador = document.createElement("input");
    cantidadMarihuanaContador.setAttribute("type","number");

    const saborMarihuanaBoton = document.createElement("td");
    saborMarihuanaBoton.classList.add("botones")

    const botonMarihuana = document.createElement("button");
    botonMarihuana.textContent = "Añadir al carrito de la compra";

    //Implementar el indice sabores

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

    //Implementar Clorofila

    saborClorofilaFoto.appendChild(fotoClorofila);
    saborClorofilaDescripción.appendChild(descripciónClorofila);
    saborClorofilaDescripción.appendChild(idClorofila)
    saborClorofilaPvP.appendChild(PvPClorofila);
    saborClorofilaCantidad.appendChild(cantidadClorofilaContador);
    saborClorofilaBoton.appendChild(botonClorofila);

    saborClorofila.appendChild(saborClorofilaFoto);
    saborClorofila.appendChild(saborClorofilaDescripción);
    saborClorofila.appendChild(saborClorofilaPvP);
    saborClorofila.appendChild(saborClorofilaCantidad);
    saborClorofila.appendChild(saborClorofilaBoton);

    //Implementar Bacon

    saborBaconFoto.appendChild(fotoBacon);
    saborBaconDescripción.appendChild(descripciónBacon);
    saborBaconDescripción.appendChild(idBacon)
    saborBaconPvP.appendChild(PvPBacon);
    saborBaconCantidad.appendChild(cantidadBaconContador);
    saborBaconBoton.appendChild(botonBacon);

    saborBacon.appendChild(saborBaconFoto);
    saborBacon.appendChild(saborBaconDescripción);
    saborBacon.appendChild(saborBaconPvP);
    saborBacon.appendChild(saborBaconCantidad);
    saborBacon.appendChild(saborBaconBoton);

    //Impletar Marihuana

    saborMarihuanaFoto.appendChild(fotoMarihuana);
    saborMarihuanaDescripción.appendChild(descripciónMarihuana);
    saborMarihuanaDescripción.appendChild(idMarihuana)
    saborMarihuanaPvP.appendChild(PvPMarihuana);
    saborMarihuanaCantidad.appendChild(cantidadMarihuanaContador);
    saborMarihuanaBoton.appendChild(botonMarihuana);

    saborMarihuana.appendChild(saborMarihuanaFoto);
    saborMarihuana.appendChild(saborMarihuanaDescripción);
    saborMarihuana.appendChild(saborMarihuanaPvP);
    saborMarihuana.appendChild(saborMarihuanaCantidad);
    saborMarihuana.appendChild(saborMarihuanaBoton);

    //Implementar filasSabores

    tablaSabores.appendChild(indiceSabores);
    tablaSabores.appendChild(saborMango);
    tablaSabores.appendChild(saborPistacho);
    tablaSabores.appendChild(saborClorofila);
    tablaSabores.appendChild(saborBacon)
    tablaSabores.appendChild(saborMarihuana)

    //Titulo para el catalogo de sabores de licores
    const nombreLicores = document.createElement("p");
    nombreLicores.textContent = 'Sabores de Licores';

    //Tabla de cachimbas
    const tablaLicores = document.createElement("table");
    tablaLicores.classList.add("tabla");

    //Primer fila (indice Licores)

    const indiceLicores = document.createElement("tr")
    indiceLicores.classList.add("indices");

    const licoresFotos = document.createElement("th");
    licoresFotos.textContent = "Productos";

    const licoresDescripción= document.createElement("th");
    licoresDescripción.textContent = "Descripción";

    const licoresPvP = document.createElement("th");
    licoresPvP.textContent = "Precio por unidad";

    const licoresCantidad = document.createElement("th");
    licoresCantidad.textContent = "Cantidad";

    const licoresBoton = document.createElement("th");
    licoresBoton.textContent = "Comprar"

    //Implementar indice licores

    indiceLicores.appendChild(licoresFotos);
    indiceLicores.appendChild(licoresDescripción);
    indiceLicores.appendChild(licoresPvP);
    indiceLicores.appendChild(licoresCantidad);
    indiceLicores.appendChild(licoresBoton)

    //Implementar filas Licores

    tablaLicores.appendChild(indiceLicores)

    //Implementar tablas

    contenedorTablas.appendChild(nombreSabores);
    contenedorTablas.appendChild(tablaSabores)
    contenedorTablas.appendChild(nombreLicores)
    contenedorTablas.appendChild(tablaLicores);
    catalogoContainer.appendChild(contenedorTablas);
}

