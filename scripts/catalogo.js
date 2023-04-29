const catalogoContainer = document.querySelector(".container");

CrearCatalogo();

function CrearCatalogo() {

    //Contenedor
    const contenedorTablas = document.createElement("div");
    contenedorTablas.classList.add("contenedorTabla");

    //Titulo para el catalogo de sabores de cachimbas
    const nombreSabores = document.createElement("p");
    nombreSabores.classList.add("cachimbo");
    nombreSabores.textContent = 'Sabores de cachimba';

    //Tabla de cachimbas
    const tablaSabores = document.createElement("table");
    tablaSabores.classList.add("tabla");

    //Primera fila (Indice sabores)
    const indiceSabores = document.createElement("tr")
    indiceSabores.classList.add("indices");

    const saboresFotos = document.createElement("th");
    saboresFotos.classList.add("productos");
    saboresFotos.textContent = "Productos";

    const saboresDescripción = document.createElement("th");
    saboresDescripción.classList.add("productos");
    saboresDescripción.textContent = "Descripción";

    const saboresPvP = document.createElement("th");
    saboresPvP.classList.add("productos");
    saboresPvP.textContent = "Precio por unidad";

    const saboresCantidad = document.createElement("th");
    saboresCantidad.classList.add("productos");
    saboresCantidad.textContent = "Cantidad";

    const saboresBoton = document.createElement("th");
    saboresBoton.classList.add("productos");
    saboresBoton.textContent = "Comprar"

    const saboresPuntuación = document.createElement("th");
    saboresPuntuación.classList.add("productos");
    saboresPuntuación.textContent = "Puntuaciones";

    //Segunda fila (Mango)

    const saborMango = document.createElement("tr");
    saborMango.classList.add("estiloProductos");

    const saborMangoFoto = document.createElement("td");

    const fotoMango = document.createElement("img");
    fotoMango.classList.add("fotoProductos");
    fotoMango.src = "images/71HXHqmeCmL.__AC_SX300_SY300_QL70_ML2_.jpg";

    const saborMangoDescripción = document.createElement("td");
    saborMangoDescripción.classList.add("descripciones");

    const descripciónMango = document.createElement("p");
    descripciónMango.classList.add("descripcion");
    descripciónMango.textContent = "Sabor de Cachimba de Mango Brasileño (250 g)";

    const idMango = document.createElement("p");
    idMango.classList.add("id");
    idMango.textContent = "ID : F38";

    const saborMangoPvP = document.createElement("td");
    saborMangoPvP.classList.add("PvP");

    const PvPMango = document.createElement("p");
    PvPMango.classList.add("precio");
    PvPMango.textContent = "150€ ";

    const saborMangoCantidad = document.createElement("td");
    saborMangoCantidad.classList.add("cantidad");

    const cantidadMangoContador = document.createElement("input");
    cantidadMangoContador.classList.add("contador");
    cantidadMangoContador.setAttribute("type", "number");

    const saborMangoBoton = document.createElement("td");
    saborMangoBoton.classList.add("botones")

    const botonMango = document.createElement("button");
    botonMango.classList.add("comprame");
    botonMango.textContent = "Añadir al carrito de la compra";

    const saborMangoPuntuación = document.createElement("td");
    saborMangoPuntuación.classList.add("puntuaciones");

    const puntuaciónMango = document.createElement("p");
    puntuaciónMango.classList.add("puntos");
    puntuaciónMango.textContent = "10 / 10"

    //Tercera fila (Pistacho) 

    const saborPistacho = document.createElement("tr");
    saborPistacho.classList.add("estiloProductos");

    const saborPistachoFoto = document.createElement("td");

    const fotoPistacho = document.createElement("img");
    fotoPistacho.classList.add("fotoProductos");
    fotoPistacho.src = "images/250g-pistachio-kiss_1.jpg";

    const saborPistachoDescripción = document.createElement("td");
    saborPistachoDescripción.classList.add("descripciones");

    const descripciónPistacho = document.createElement("p");
    descripciónPistacho.classList.add("descripcion");
    descripciónPistacho.textContent = "Sabor de Cachimba de Pistacho Picante (250 g)";

    const idPistacho = document.createElement("p");
    idPistacho.classList.add("id");
    idPistacho.textContent = "ID : A81";

    const saborPistachoPvP = document.createElement("td");
    saborPistachoPvP.classList.add("PvP");

    const PvPPistacho = document.createElement("p");
    PvPPistacho.classList.add("precio");
    PvPPistacho.textContent = "23€ ";

    const saborPistachoCantidad = document.createElement("td");
    saborPistachoCantidad.classList.add("cantidad");

    const cantidadPistachoContador = document.createElement("input");
    cantidadPistachoContador.classList.add("contador");
    cantidadPistachoContador.setAttribute("type", "number");

    const saborPistachoBoton = document.createElement("td");
    saborPistachoBoton.classList.add("botones")

    const botonPistacho = document.createElement("button");
    botonPistacho.classList.add("comprame");
    botonPistacho.textContent = "Añadir al carrito de la compra";

    const saborPistachoPuntuación = document.createElement("td");
    saborPistachoPuntuación.classList.add("puntuaciones");

    const puntuaciónPistacho = document.createElement("p");
    puntuaciónPistacho.classList.add("puntos");
    puntuaciónPistacho.textContent = "8 / 10"

    //Cuarta Fila (Clorofila) 

    const saborClorofila = document.createElement("tr");
    saborClorofila.classList.add("estiloProductos");

    const saborClorofilaFoto = document.createElement("td");
    const fotoClorofila = document.createElement("img");
    fotoClorofila.classList.add("fotoProductos");
    fotoClorofila.src = "images/smokain-intensify-menta-clorofila.jpg";

    const saborClorofilaDescripción = document.createElement("td");
    saborClorofilaDescripción.classList.add("descripciones");

    const descripciónClorofila = document.createElement("p");
    descripciónClorofila.classList.add("descripcion");
    descripciónClorofila.textContent = "Sabor de Cachimba de Clorofila (250 g)";

    const idClorofila = document.createElement("p");
    idPistacho.classList.add("id");
    idClorofila.textContent = "ID : E41";

    const saborClorofilaPvP = document.createElement("td");
    saborClorofilaPvP.classList.add("PvP");

    const PvPClorofila = document.createElement("p");
    PvPClorofila.classList.add("precio");
    PvPClorofila.textContent = "23€ ";

    const saborClorofilaCantidad = document.createElement("td");
    saborClorofilaCantidad.classList.add("cantidad");

    const cantidadClorofilaContador = document.createElement("input");
    cantidadClorofilaContador.classList.add("contador");
    cantidadClorofilaContador.setAttribute("type", "number");

    const saborClorofilaBoton = document.createElement("td");
    saborClorofilaBoton.classList.add("botones")

    const botonClorofila = document.createElement("button");
    botonClorofila.classList.add("comprame");
    botonClorofila.textContent = "Añadir al carrito de la compra";

    const saborClorofilaPuntuación = document.createElement("td");
    saborClorofilaPuntuación.classList.add("puntuaciones");

    const puntuaciónClorofila = document.createElement("p");
    puntuaciónClorofila.classList.add("puntos");
    puntuaciónClorofila.textContent = "9.5 / 10"

    //Quinta Fila (Bacon)

    const saborBacon = document.createElement("tr");
    saborBacon.classList.add("estiloProductos");

    const saborBaconFoto = document.createElement("td");

    const fotoBacon = document.createElement("img");
    fotoBacon.classList.add("fotoProductos");
    fotoBacon.src = "images/BBQ-600-rhj7fn.jpg";

    const saborBaconDescripción = document.createElement("td");
    saborBaconDescripción.classList.add("descripciones");

    const descripciónBacon = document.createElement("p");
    descripciónBacon.classList.add("descripcion");
    descripciónBacon.textContent = "Sabor de Cachimba de Bacon (250 g)";

    const idBacon = document.createElement("p");
    idBacon.classList.add("id");
    idBacon.textContent = "ID : A81";

    const saborBaconPvP = document.createElement("td");
    saborBaconPvP.classList.add("PvP");

    const PvPBacon = document.createElement("p");
    PvPBacon.classList.add("precio");
    PvPBacon.textContent = "12€ ";

    const saborBaconCantidad = document.createElement("td");
    saborBaconCantidad.classList.add("cantidad");

    const cantidadBaconContador = document.createElement("input");
    cantidadBaconContador.classList.add("contador");
    cantidadBaconContador.setAttribute("type", "number");

    const saborBaconBoton = document.createElement("td");
    saborBaconBoton.classList.add("botones")

    const botonBacon = document.createElement("button");
    botonBacon.classList.add("comprame");
    botonBacon.textContent = "Añadir al carrito de la compra";

    const saborBaconPuntuación = document.createElement("td");
    saborBaconPuntuación.classList.add("puntuaciones");

    const puntuaciónBacon = document.createElement("p");
    puntuaciónBacon.classList.add("puntos");
    puntuaciónBacon.textContent = "8.25 / 10"

    //Sexta Fila (Marihuana)

    const saborMarihuana = document.createElement("tr");
    saborMarihuana.classList.add("estiloProductos");

    const saborMarihuanaFoto = document.createElement("td");

    const fotoMarihuana = document.createElement("img");
    fotoMarihuana.classList.add("fotoProductos");
    fotoMarihuana.src = "images/DSC_6087_grande.jpg";

    const saborMarihuanaDescripción = document.createElement("td");
    saborMarihuanaDescripción.classList.add("descripciones");

    const descripciónMarihuana = document.createElement("p");
    descripciónMarihuana.classList.add("descripcion");
    descripciónMarihuana.textContent = "Sabor de Cachimba de Marihuana (250 g)";

    const idMarihuana = document.createElement("p");
    idMarihuana.classList.add("id");
    idMarihuana.textContent = "ID : N98";

    const saborMarihuanaPvP = document.createElement("td");
    saborMarihuanaPvP.classList.add("PvP");

    const PvPMarihuana = document.createElement("p");
    PvPMarihuana.classList.add("precio");
    PvPMarihuana.textContent = "5€ ";

    const saborMarihuanaCantidad = document.createElement("td");
    saborMarihuanaCantidad.classList.add("cantidad");

    const cantidadMarihuanaContador = document.createElement("input");
    cantidadMarihuanaContador.classList.add("contador");
    cantidadMarihuanaContador.setAttribute("type", "number");

    const saborMarihuanaBoton = document.createElement("td");
    saborMarihuanaBoton.classList.add("botones")

    const botonMarihuana = document.createElement("button");
    botonMarihuana.classList.add("comprame");
    botonMarihuana.textContent = "Añadir al carrito de la compra";

    const saborMarihuanaPuntuación = document.createElement("td");
    saborMarihuanaPuntuación.classList.add("puntuaciones");

    const puntuaciónMarihuana = document.createElement("p");
    puntuaciónMarihuana.classList.add("puntos");
    puntuaciónMarihuana.textContent = "10 / 10"

    //Implementar el indice sabores

    indiceSabores.appendChild(saboresFotos);
    indiceSabores.appendChild(saboresDescripción);
    indiceSabores.appendChild(saboresPvP);
    indiceSabores.appendChild(saboresCantidad);
    indiceSabores.appendChild(saboresBoton);
    indiceSabores.appendChild(saboresPuntuación);

    //Implementar Mango

    saborMangoFoto.appendChild(fotoMango);
    saborMangoDescripción.appendChild(descripciónMango);
    saborMangoDescripción.appendChild(idMango)
    saborMangoPvP.appendChild(PvPMango);
    saborMangoCantidad.appendChild(cantidadMangoContador);
    saborMangoBoton.appendChild(botonMango);
    saborMangoPuntuación.appendChild(puntuaciónMango);

    saborMango.appendChild(saborMangoFoto);
    saborMango.appendChild(saborMangoDescripción);
    saborMango.appendChild(saborMangoPvP);
    saborMango.appendChild(saborMangoCantidad);
    saborMango.appendChild(saborMangoBoton);
    saborMango.appendChild(saborMangoPuntuación);

    //Implementar Pistacho

    saborPistachoFoto.appendChild(fotoPistacho);
    saborPistachoDescripción.appendChild(descripciónPistacho);
    saborPistachoDescripción.appendChild(idPistacho)
    saborPistachoPvP.appendChild(PvPPistacho);
    saborPistachoCantidad.appendChild(cantidadPistachoContador);
    saborPistachoBoton.appendChild(botonPistacho);
    saborPistachoPuntuación.appendChild(puntuaciónPistacho)

    saborPistacho.appendChild(saborPistachoFoto);
    saborPistacho.appendChild(saborPistachoDescripción);
    saborPistacho.appendChild(saborPistachoPvP);
    saborPistacho.appendChild(saborPistachoCantidad);
    saborPistacho.appendChild(saborPistachoBoton);
    saborPistacho.appendChild(saborPistachoPuntuación)

    //Implementar Clorofila

    saborClorofilaFoto.appendChild(fotoClorofila);
    saborClorofilaDescripción.appendChild(descripciónClorofila);
    saborClorofilaDescripción.appendChild(idClorofila)
    saborClorofilaPvP.appendChild(PvPClorofila);
    saborClorofilaCantidad.appendChild(cantidadClorofilaContador);
    saborClorofilaBoton.appendChild(botonClorofila);
    saborClorofilaPuntuación.appendChild(puntuaciónClorofila);

    saborClorofila.appendChild(saborClorofilaFoto);
    saborClorofila.appendChild(saborClorofilaDescripción);
    saborClorofila.appendChild(saborClorofilaPvP);
    saborClorofila.appendChild(saborClorofilaCantidad);
    saborClorofila.appendChild(saborClorofilaBoton);
    saborClorofila.appendChild(saborClorofilaPuntuación);

    //Implementar Bacon

    saborBaconFoto.appendChild(fotoBacon);
    saborBaconDescripción.appendChild(descripciónBacon);
    saborBaconDescripción.appendChild(idBacon)
    saborBaconPvP.appendChild(PvPBacon);
    saborBaconCantidad.appendChild(cantidadBaconContador);
    saborBaconBoton.appendChild(botonBacon);
    saborBaconPuntuación.appendChild(puntuaciónBacon)

    saborBacon.appendChild(saborBaconFoto);
    saborBacon.appendChild(saborBaconDescripción);
    saborBacon.appendChild(saborBaconPvP);
    saborBacon.appendChild(saborBaconCantidad);
    saborBacon.appendChild(saborBaconBoton);
    saborBacon.appendChild(saborBaconPuntuación);

    //Impletar Marihuana

    saborMarihuanaFoto.appendChild(fotoMarihuana);
    saborMarihuanaDescripción.appendChild(descripciónMarihuana);
    saborMarihuanaDescripción.appendChild(idMarihuana)
    saborMarihuanaPvP.appendChild(PvPMarihuana);
    saborMarihuanaCantidad.appendChild(cantidadMarihuanaContador);
    saborMarihuanaBoton.appendChild(botonMarihuana);
    saborMarihuanaPuntuación.appendChild(puntuaciónMarihuana);

    saborMarihuana.appendChild(saborMarihuanaFoto);
    saborMarihuana.appendChild(saborMarihuanaDescripción);
    saborMarihuana.appendChild(saborMarihuanaPvP);
    saborMarihuana.appendChild(saborMarihuanaCantidad);
    saborMarihuana.appendChild(saborMarihuanaBoton);
    saborMarihuana.appendChild(saborMarihuanaPuntuación);

    //Implementar filasSabores

    tablaSabores.appendChild(indiceSabores);
    tablaSabores.appendChild(saborMango);
    tablaSabores.appendChild(saborPistacho);
    tablaSabores.appendChild(saborClorofila);
    tablaSabores.appendChild(saborBacon)
    tablaSabores.appendChild(saborMarihuana)


    //Titulo para el catalogo de sabores de licores
    const nombreLicores = document.createElement("p");
    nombreLicores.classList.add("cachimbo");
    nombreLicores.textContent = 'Sabores de Licores';

    //Tabla de licores
    const tablaLicores = document.createElement("table");
    tablaLicores.classList.add("tabla");

    //Primer fila (indice Licores)

    const indiceLicores = document.createElement("tr")
    indiceLicores.classList.add("indices");

    const licoresFotos = document.createElement("th");
    licoresFotos.classList.add("productos");
    licoresFotos.textContent = "Productos";

    const licoresDescripción = document.createElement("th");
    licoresDescripción.classList.add("productos");
    licoresDescripción.textContent = "Descripción";

    const licoresPvP = document.createElement("th");
    licoresPvP.classList.add("productos");
    licoresPvP.textContent = "Precio por unidad";

    const licoresCantidad = document.createElement("th");
    licoresCantidad.classList.add("productos");
    licoresCantidad.textContent = "Cantidad";

    const licoresBoton = document.createElement("th");
    licoresBoton.classList.add("productos");
    licoresBoton.textContent = "Comprar";

    const licoresPuntuación = document.createElement("th");
    licoresPuntuación.classList.add("productos");
    licoresPuntuación.textContent = "Puntuaciones";

    //Licor Maracuya
    const maracuya = document.createElement("tr");
    maracuya.classList.add("estiloProductos");

    const maracuyaFoto = document.createElement("td");

    const fotoMaracuya = document.createElement("img");
    fotoMaracuya.classList.add("fotoProductos");
    fotoMaracuya.src = "images/maracuya.png";

    const saborMaracuyaDescripción = document.createElement("td");
    saborMaracuyaDescripción.classList.add("descripciones");

    const descripciónMaracuya = document.createElement("p");
    descripciónMaracuya.classList.add("descripcion");
    descripciónMaracuya.textContent = "Licor de mango brasileño (50 cl)";

    const idMaracuya = document.createElement("p");
    idMaracuya.classList.add("id");
    idMaracuya.textContent = "ID : L01";

    const licorMaracuyaPvP = document.createElement("td");
    licorMaracuyaPvP.classList.add("PvP");

    const PvPMaracuya = document.createElement("p");
    PvPMaracuya.classList.add("precio");
    PvPMaracuya.textContent = "25€";

    const licorMaracuyaCantidad = document.createElement("td");
    licorMaracuyaCantidad.classList.add("cantidad");

    const cantidadMaracuyaContador = document.createElement("input");
    cantidadMaracuyaContador.classList.add("contador");
    cantidadMaracuyaContador.setAttribute("type", "number");

    const licorMaracuyaBoton = document.createElement("td");
    licorMaracuyaBoton.classList.add("botones")

    const botonMaracuya = document.createElement("button");
    botonMaracuya.classList.add("comprame");
    botonMaracuya.textContent = "Añadir al carrito de la compra";

    const licorMaracuyaPuntuación = document.createElement("td");
    licorMaracuyaPuntuación.classList.add("puntuaciones");

    const puntuaciónMaracuya = document.createElement("p");
    puntuaciónMaracuya.classList.add("puntos");
    puntuaciónMaracuya.textContent = "9.25 / 10"

    //Licor Mandarina
    const mandarina = document.createElement("tr");
    mandarina.classList.add("estiloProductos");

    const mandarinaFoto = document.createElement("td");

    const fotoMandarina = document.createElement("img");
    fotoMandarina.classList.add("fotoProductos");
    fotoMandarina.src = "images/mandarina.png";

    const licorMandarinaDescripción = document.createElement("td");
    licorMandarinaDescripción.classList.add("descripciones");

    const descripciónMandarina = document.createElement("p");
    descripciónMandarina.classList.add("descripcion");
    descripciónMandarina.textContent = "Licor de mandarina(50 cl)";

    const idMandarina = document.createElement("p");
    idMandarina.classList.add("id");
    idMandarina.textContent = "ID : L02";

    const licorMandarinaPvP = document.createElement("td");
    licorMandarinaPvP.classList.add("PvP");

    const PvPMandarina = document.createElement("p");
    PvPMandarina.classList.add("precio");
    PvPMandarina.textContent = "20€";

    const licorMandarinaCantidad = document.createElement("td");
    licorMandarinaCantidad.classList.add("cantidad");

    const cantidadMandarinaContador = document.createElement("input");
    cantidadMandarinaContador.classList.add("contador");
    cantidadMandarinaContador.setAttribute("type", "number");

    const licorMandarinaBoton = document.createElement("td");
    licorMandarinaBoton.classList.add("botones")

    const botonMandarina = document.createElement("button");
    botonMandarina.classList.add("comprame");
    botonMandarina.textContent = "Añadir al carrito de la compra";

    const licorMandarinaPuntuación = document.createElement("td");
    licorMandarinaPuntuación.classList.add("puntuaciones");

    const puntuaciónMandarina = document.createElement("p");
    puntuaciónMandarina.classList.add("puntos");
    puntuaciónMandarina.textContent = "9 / 10"

    //Licor manzana
    const manzana = document.createElement("tr");
    manzana.classList.add("estiloProductos");

    const manzanaFoto = document.createElement("td");

    const fotoManzana = document.createElement("img");
    fotoManzana.classList.add("fotoProductos");
    fotoManzana.src = "images/manzana.png";

    const licorManzanaDescripción = document.createElement("td");
    licorManzanaDescripción.classList.add("descripciones");

    const descripciónManzana = document.createElement("p");
    descripciónManzana.classList.add("descripcion");
    descripciónManzana.textContent = "Licor de manzana(50 cl)";

    const idManzana = document.createElement("p");
    idManzana.classList.add("id");
    idManzana.textContent = "ID : L03";

    const licorManzanaPvP = document.createElement("td");
    licorManzanaPvP.classList.add("PvP");

    const PvPManzana = document.createElement("p");
    PvPManzana.classList.add("precio");
    PvPManzana.textContent = "20€";

    const licorManzanaCantidad = document.createElement("td");
    licorManzanaCantidad.classList.add("cantidad");

    const cantidadManzanaContador = document.createElement("input");
    cantidadManzanaContador.classList.add("contador");
    cantidadManzanaContador.setAttribute("type", "number");

    const licorManzanaBoton = document.createElement("td");
    licorManzanaBoton.classList.add("botones")

    const botonManzana = document.createElement("button");
    botonManzana.classList.add("comprame");
    botonManzana.textContent = "Añadir al carrito de la compra";

    const licorManzanaPuntuación = document.createElement("td");
    licorManzanaPuntuación.classList.add("puntuaciones");

    const puntuaciónManzana = document.createElement("p");
    puntuaciónManzana.classList.add("puntos");
    puntuaciónManzana.textContent = "8.5 / 10"

    //Licor de coco Sao Paulo
    const coco = document.createElement("tr");
    coco.classList.add("estiloProductos");

    const cocoFoto = document.createElement("td");

    const fotoCoco = document.createElement("img");
    fotoCoco.classList.add("fotoProductos");
    fotoCoco.src = "images/coco.png";

    const licorCocoDescripción = document.createElement("td");
    licorCocoDescripción.classList.add("descripciones");

    const descripciónCoco = document.createElement("p");
    descripciónCoco.classList.add("descripcion");
    descripciónCoco.textContent = "Licor de coco de São Paulo(50 cl)";

    const idCoco = document.createElement("p");
    idCoco.classList.add("id");
    idCoco.textContent = "ID : L04";

    const licorCocoPvP = document.createElement("td");
    licorCocoPvP.classList.add("PvP");

    const PvPCoco = document.createElement("p");
    PvPCoco.classList.add("precio");
    PvPCoco.textContent = "40€";

    const licorCocoCantidad = document.createElement("td");
    licorCocoCantidad.classList.add("cantidad");

    const cantidadCocoContador = document.createElement("input");
    cantidadCocoContador.classList.add("contador");
    cantidadCocoContador.setAttribute("type", "number");

    const licorCocoBoton = document.createElement("td");
    licorCocoBoton.classList.add("botones");

    const botonCoco = document.createElement("button");
    botonCoco.classList.add("comprame");
    botonCoco.textContent = "Añadir al carrito de la compra";

    const licorCocoPuntuación = document.createElement("td");
    licorCocoPuntuación.classList.add("puntuaciones");

    const puntuaciónCoco = document.createElement("p");
    puntuaciónCoco.classList.add("puntos");
    puntuaciónCoco.textContent = "9.75 / 10";

    //Licor de pepinillo
    const pepi = document.createElement("tr");
    coco.classList.add("estiloProductos");

    const pepiFoto = document.createElement("td");

    const fotoPepi = document.createElement("img");
    fotoPepi.classList.add("fotoProductos");
    fotoPepi.src = "images/pepinillo.png";

    const licorPepiDescripción = document.createElement("td");
    licorPepiDescripción.classList.add("descripciones");

    const descripciónPepi = document.createElement("p");
    descripciónPepi.classList.add("descripcion");
    descripciónPepi.textContent = "Licor de pepinillo(50 cl)";

    const idPepi = document.createElement("p");
    idPepi.classList.add("id");
    idPepi.textContent = "ID : L05";

    const licorPepiPvP = document.createElement("td");
    licorPepiPvP.classList.add("PvP");

    const PvPPepi = document.createElement("p");
    PvPPepi.classList.add("precio");
    PvPPepi.textContent = "38€";

    const licorPepiCantidad = document.createElement("td");
    licorPepiCantidad.classList.add("cantidad");

    const cantidadPepiContador = document.createElement("input");
    cantidadPepiContador.classList.add("contador");
    cantidadPepiContador.setAttribute("type", "number");

    const licorPepiBoton = document.createElement("td");
    licorPepiBoton.classList.add("botones");

    const botonPepi = document.createElement("button");
    botonPepi.classList.add("comprame");
    botonPepi.textContent = "Añadir al carrito de la compra";

    const licorPepiPuntuación = document.createElement("td");
    licorPepiPuntuación.classList.add("puntuaciones");

    const puntuaciónPepi = document.createElement("p");
    puntuaciónPepi.classList.add("puntos");
    puntuaciónPepi.textContent = "9 / 10";

    //Implementar indice licores

    indiceLicores.appendChild(licoresFotos);
    indiceLicores.appendChild(licoresDescripción);
    indiceLicores.appendChild(licoresPvP);
    indiceLicores.appendChild(licoresCantidad);
    indiceLicores.appendChild(licoresBoton);
    indiceLicores.appendChild(licoresPuntuación);

    //Implementar licor maracuya
    maracuyaFoto.appendChild(fotoMaracuya);
    saborMaracuyaDescripción.appendChild(descripciónMaracuya);
    saborMaracuyaDescripción.appendChild(idMaracuya);
    licorMaracuyaPvP.appendChild(PvPMaracuya);
    licorMaracuyaCantidad.appendChild(cantidadMaracuyaContador);
    licorMaracuyaBoton.appendChild(botonMaracuya);
    licorMaracuyaPuntuación.appendChild(puntuaciónMaracuya);

    maracuya.appendChild(maracuyaFoto);
    maracuya.appendChild(saborMaracuyaDescripción);
    maracuya.appendChild(licorMaracuyaPvP);
    maracuya.appendChild(licorMaracuyaCantidad);
    maracuya.appendChild(licorMaracuyaBoton);
    maracuya.appendChild(licorMaracuyaPuntuación);

    //Implementar licor mandarina
    mandarinaFoto.appendChild(fotoMandarina);
    licorMandarinaDescripción.appendChild(descripciónMandarina);
    licorMandarinaDescripción.appendChild(idMandarina);
    licorMandarinaPvP.appendChild(PvPMandarina);
    licorMandarinaCantidad.appendChild(cantidadMandarinaContador);
    licorMandarinaBoton.appendChild(botonMandarina);
    licorMandarinaPuntuación.appendChild(puntuaciónMandarina);

    mandarina.appendChild(mandarinaFoto);
    mandarina.appendChild(licorMandarinaDescripción);
    mandarina.appendChild(licorMandarinaPvP);
    mandarina.appendChild(cantidadMandarinaContador);
    mandarina.appendChild(licorMandarinaBoton);
    mandarina.appendChild(licorMandarinaPuntuación);

    //Implementar licor manzana
    manzanaFoto.appendChild(fotoManzana);
    licorManzanaDescripción.appendChild(descripciónManzana);
    licorManzanaDescripción.appendChild(idManzana);
    licorManzanaPvP.appendChild(PvPManzana);
    licorManzanaCantidad.appendChild(cantidadManzanaContador);
    licorManzanaBoton.appendChild(botonManzana);
    licorManzanaPuntuación.appendChild(puntuaciónManzana);

    manzana.appendChild(manzanaFoto);
    manzana.appendChild(licorManzanaDescripción);
    manzana.appendChild(licorManzanaPvP);
    manzana.appendChild(cantidadManzanaContador);
    manzana.appendChild(licorManzanaBoton);
    manzana.appendChild(licorManzanaPuntuación);

    //Implementar licor coco
    cocoFoto.appendChild(fotoCoco);
    licorCocoDescripción.appendChild(descripciónCoco);
    licorCocoDescripción.appendChild(idCoco);
    licorCocoPvP.appendChild(PvPCoco);
    licorCocoCantidad.appendChild(cantidadCocoContador);
    licorCocoBoton.appendChild(botonCoco);
    licorCocoPuntuación.appendChild(puntuaciónCoco);

    coco.appendChild(cocoFoto);
    coco.appendChild(licorCocoDescripción);
    coco.appendChild(licorCocoPvP);
    coco.appendChild(cantidadCocoContador);
    coco.appendChild(licorCocoBoton);
    coco.appendChild(licorCocoPuntuación);

    //Implementar licor pepinillo bien rico
    pepiFoto.appendChild(fotoPepi);
    licorPepiDescripción.appendChild(descripciónPepi);
    licorPepiDescripción.appendChild(idPepi);
    licorPepiPvP.appendChild(PvPPepi);
    licorPepiCantidad.appendChild(cantidadPepiContador);
    licorPepiBoton.appendChild(botonPepi);
    licorPepiPuntuación.appendChild(puntuaciónPepi);

    pepi.appendChild(pepiFoto);
    pepi.appendChild(licorPepiDescripción);
    pepi.appendChild(licorPepiPvP);
    pepi.appendChild(licorPepiCantidad);
    pepi.appendChild(licorPepiBoton);
    pepi.appendChild(licorPepiPuntuación);

    //Implementar filas Licores

    tablaLicores.appendChild(indiceLicores)
    tablaLicores.appendChild(maracuya);
    tablaLicores.appendChild(mandarina);
    tablaLicores.appendChild(manzana);
    tablaLicores.appendChild(coco);
    tablaLicores.appendChild(pepi);

    //Implementar tablas

    contenedorTablas.appendChild(nombreSabores);
    contenedorTablas.appendChild(tablaSabores)
    contenedorTablas.appendChild(nombreLicores)
    contenedorTablas.appendChild(tablaLicores);
    catalogoContainer.appendChild(contenedorTablas);
}


const input = document.getElementById('buscador');
function buscar() {

}