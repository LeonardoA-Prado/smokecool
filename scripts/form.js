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