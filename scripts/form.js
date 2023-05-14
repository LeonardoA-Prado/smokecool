const form = document.querySelector('.formulario');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = {
    email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
  
  window.location.href = 'contacto.html';
});



const miBoton = document.querySelector('#boton');
const miNotificacion = document.querySelector('#noti');
const miTitulo = document.querySelector('#notigrax');
const miTexto = document.querySelector('#notires');

miBoton.addEventListener('click', () => {
  miTitulo.textContent = '¡Gracias por contactarnos!';
  miTexto.textContent = 'Le enviaremos una respuesta al correo electronico';
  miNotificacion.classList.add('mostrar');

  setTimeout(() => {
    miNotificacion.classList.remove('mostrar');
  }, 2000);
});

const miInput = document.querySelector('#email');

miInput.addEventListener('focus', () => {
  miInput.classList.add('escribiendo');
});

miInput.addEventListener('blur', () => {
  miInput.classList.remove('escribiendo');
});

const miInput2 = document.querySelector('#subject');

miInput2.addEventListener('focus', () => {
  miInput2.classList.add('escribiendo');
});

miInput2.addEventListener('blur', () => {
  miInput2.classList.remove('escribiendo');
});

const miInput3 = document.querySelector('#message');

miInput3.addEventListener('focus', () => {
  miInput3.classList.add('escribiendo');
});

miInput3.addEventListener('blur', () => {
  miInput3.classList.remove('escribiendo');
});