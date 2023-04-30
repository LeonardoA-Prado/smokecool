const form = document.querySelector('.formulario');
form.addEventListener('submit', saveData);

function saveData(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
   
    const data = {email, subject, message};

    localStorage.setItem('formData', JSON.stringify(data));
    
}

var abrirVentana = document.getElementById('admin'), 
    ventana = document.getElementById('ventana'),
    popup = document.getElementById('popup'),
    cerrarVentana = document.getElementById('cerrar-ventana');

abrirVentana.addEventListener('click',openWindow);
cerrarVentana.addEventListener('click', closeWindow);

function openWindow(accion){
    ventana.classList.add('active');
    popup.classList.add('active');
}

function closeWindow(accion){
    ventana.classList.remove('active');
    popup.classList.remove('active');
}

