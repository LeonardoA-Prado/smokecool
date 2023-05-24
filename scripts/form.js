const form = document.querySelector('.formulario');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

let formArray = JSON.parse(localStorage.getItem('formData')) || [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };
  formArray.push(formData);
  localStorage.setItem('formData', JSON.stringify(formArray));
});

const miBoton = document.querySelector('#boton');
const miNotificacion = document.querySelector('#noti');
const miTitulo = document.querySelector('#notigrax');
const miTexto = document.querySelector('#notires');

miBoton.addEventListener('click', () => {
  miTitulo.textContent = '¡Gracias por contactarnos!';
  miTexto.textContent = 'Le enviaremos una respuesta al correo electrónico';
  miNotificacion.classList.add('mostrar');

  if (emailInput.value === "" || subjectInput.value === "" || messageInput.value === "") {
    miTitulo.textContent = "El formato de entrada está mal";
    miTexto.textContent = "Por favor, introduce el formato correcto";
  }
  
  setTimeout(() => {
    miNotificacion.classList.remove('mostrar');
  }, 3000);
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