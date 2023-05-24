const infoDiv = document.querySelector('.informacion');
const savedData = JSON.parse(localStorage.getItem('formData'));
const mensajesGuardados = savedData;

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
  if (confirmacion) {
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

const pedidos = document.getElementById('pedidos');
const usuarioCarrito = JSON.parse(localStorage.getItem('datosComprasGuardado'));

const mostrarInformacionCarrito = () => {
  usuarioCarrito.forEach((item) => {
    console.log('Nombre del producto:', item.usuario);
  });
};

mostrarInformacionCarrito();

function renderizarPedidos() {

  usuarioCarrito.forEach((pedido) => {


    const carrito = pedido.carrito;

    carrito.forEach((producto) => {

      const trUsuarios = document.createElement('tr')

      const usuarioElemento = document.createElement('p');
      usuarioElemento.className = 'usuarioElemento'
      usuarioElemento.style.background = 'none'
      usuarioElemento.style.color = 'black'
      usuarioElemento.style.fontWeight = 'bold'
      const tdUsuario = document.createElement('td')
      usuarioElemento.textContent = pedido.usuario;
      tdUsuario.appendChild(usuarioElemento)
      trUsuarios.appendChild(tdUsuario)
      pedidos.appendChild(trUsuarios);

      const id = document.createElement('p');
      id.className = 'id'
      id.style.background = 'none'
      id.style.color = 'black'
      id.style.fontWeight = 'bold'
      const tdId = document.createElement('td')
      id.textContent = producto.id;
      tdId.appendChild(id)
      trUsuarios.appendChild(tdId)
      pedidos.appendChild(trUsuarios);

      const imagen = document.createElement('img');
      imagen.className = 'imagenUsuario'
      const tdimagen = document.createElement('td')
      imagen.src = producto.imagen;
      imagen.className = 'pedidoImagen';
      tdimagen.appendChild(imagen)
      trUsuarios.appendChild(tdimagen)
      pedidos.appendChild(trUsuarios);

      const nombreProducto = document.createElement('p');
      nombreProducto.className = 'nombreProducto'
      nombreProducto.style.background = 'none'
      nombreProducto.style.color = 'black'
      nombreProducto.style.fontWeight = 'bold'
      const tdproducto = document.createElement('td')
      nombreProducto.textContent = producto.nombre;
      tdproducto.appendChild(nombreProducto)
      trUsuarios.appendChild(tdproducto);
      pedidos.appendChild(trUsuarios);

      const precio = document.createElement('p');
      precio.className = 'precioUsuario'
      precio.style.background = 'none'
      precio.style.color = 'black'
      precio.style.fontWeight = 'bold'
      const tdPrecio = document.createElement('td');
      precio.textContent = producto.precio + '€';
      tdPrecio.appendChild(precio);
      trUsuarios.appendChild(tdPrecio)
      pedidos.appendChild(trUsuarios);

      const cantidad = document.createElement('p');
      cantidad.className = 'cantidadUsuario'
      cantidad.style.background = 'none'
      cantidad.style.color = 'black'
      cantidad.style.fontWeight = 'bold'
      const tdCantidad = document.createElement('td')
      cantidad.textContent = producto.cantidad;
      tdCantidad.appendChild(cantidad)
      trUsuarios.appendChild(tdCantidad)
      pedidos.appendChild(trUsuarios);
    });
  });
}
renderizarPedidos();

let eliminarCompras = document.getElementById('eliminarCompras');

eliminarCompras.addEventListener('click', () => {
  const confirmacion = confirm('¿Está seguro que desea eliminar todos los pedidos?');
  if (confirmacion) {
    localStorage.removeItem('datosComprasGuardado');
    pedidos.innerHTML = '';
    alert('Todos los pedidos han sido eliminados.');
  } else {
    alert('La eliminación de pedidos ha sido cancelada.');
  }
});



/* 
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
}); */








