const infoDiv = document.querySelector('.informacion');
const savedData = JSON.parse(localStorage.getItem('formData'));
const mensajesGuardados = savedData || [];

renderizarMensajes();

function renderizarMensajes() {
  mensajesGuardados.forEach((mensaje, index) => {
    const mensajeDiv = document.createElement('div');
    mensajeDiv.className = 'mensajeDiv'

    const emailP = document.createElement('p');
    emailP.className = 'emailP'
    emailP.textContent = `Email: ${mensaje.email}`;
    mensajeDiv.appendChild(emailP);

    const subjectP = document.createElement('p');
    subjectP.className = 'subjectP'
    subjectP.textContent = `Asunto: ${mensaje.subject}`;
    mensajeDiv.appendChild(subjectP);

    const messageP = document.createElement('p');
    messageP.className = 'messageP'
    messageP.textContent = `Mensaje: ${mensaje.message}`;
    mensajeDiv.appendChild(messageP);

    const divBoton = document.createElement('div')
    divBoton.className = 'divBoton'
    const borrarBtn = document.createElement('button');
    borrarBtn.textContent = 'Borrar';
    borrarBtn.className = 'borrarBtn'
    borrarBtn.addEventListener('click', () => {
      borrarMensaje(index);
    });
    divBoton.appendChild(borrarBtn)
    mensajeDiv.appendChild(divBoton);

    infoDiv.appendChild(mensajeDiv);
  });
}

function borrarMensaje(index) {
  const confirmacion = confirm('¿Estás seguro de que deseas borrar los datos?');
  if (confirmacion){
    mensajesGuardados.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(mensajesGuardados));
    infoDiv.innerHTML = '';
    renderizarMensajes();
    alert('Los datos se han borrado exitosamente.');
  }
  else {
    alert('Los datos no se han borrado.');
  }
}

const borrarMensajes = document.getElementById('borrar');
borrarMensajes.addEventListener('click', borrarDatosForm);

function borrarDatosForm() {
  const confirmacion = confirm('¿Estás seguro de que deseas borrar los datos?');
  if (confirmacion) {
    localStorage.removeItem('formData');
    mensajesGuardados.length = 0;
    infoDiv.innerHTML = '';
    alert('Los datos se han borrado exitosamente.');
  } else {
    alert('Los datos no se han borrado.');
  }
}

const usuarioGuardado = localStorage.getItem("nombre");

const pedidos = document.querySelector('.pedidos');


let carritoJSON = localStorage.getItem("carrito");

let carrito = [];

if (carritoJSON) {
  carrito = JSON.parse(carritoJSON);
  
}

carrito.forEach((producto) => {
  const usuario = document.createElement('p');
  usuario.textContent = usuarioGuardado;
  pedidos.appendChild(usuario);

  const imagen = document.createElement('img');
  imagen.classList.add('fotoProductos')
  imagen.src = producto.imagen;
  pedidos.appendChild(imagen);

  const id = document.createElement('p');
  id.textContent = `ID: ${producto.id}`;
  pedidos.appendChild(id);

  const nombreProducto = document.createElement('p');
  nombreProducto.textContent = `Nombre del producto: ${producto.nombre}`;
  pedidos.appendChild(nombreProducto);

  const precio = document.createElement('p');
  precio.textContent = `Precio: ${producto.precio}`;
  pedidos.appendChild(precio);

  const cantidad = document.createElement('p');
  cantidad.textContent = `Cantidad: ${producto.cantidad}`;
  pedidos.appendChild(cantidad);
});




  



