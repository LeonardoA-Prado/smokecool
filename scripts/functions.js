

var abrirVentana = document.getElementById('admin'), 
    ventana = document.getElementById('ventana'),
    popup = document.getElementById('popup'),
    cerrarVentana = document.getElementById('cerrar-ventana');

abrirVentana.addEventListener('click', openWindow);
cerrarVentana.addEventListener('click', closeWindow);

function openWindow(){
    ventana.classList.add('active');
    popup.classList.add('active');
}

function closeWindow(){
    ventana.classList.remove('active');
    popup.classList.remove('active');
}


const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('acceder');

submitButton.addEventListener('click', function(event) {
event.preventDefault();
if (passwordInput.value === '1234') {
    window.location.href = 'usuarios.html';
}
});
