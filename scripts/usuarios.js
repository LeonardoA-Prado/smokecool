const infoDiv = document.querySelector('.informacion');

const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
  const emailP = document.createElement('p');
  emailP.classList.add('parrafos');
  emailP.textContent = `Email: ${savedData.email}`;
  infoDiv.appendChild(emailP);

  const subjectP = document.createElement('p');
  subjectP.classList.add('parrafos');
  subjectP.textContent = `Asunto: ${savedData.subject}`;
  infoDiv.appendChild(subjectP);

  const messageP = document.createElement('p');
  messageP.classList.add('parrafos');
  messageP.textContent = `Mensaje: ${savedData.message}`;
  infoDiv.appendChild(messageP);
}


const pedidos = document.querySelector('.pedidos');

const datosCarrito = JSON.parse(localStorage.getItem('carrito'));
datosCarrito.forEach((producto) => {

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
  



