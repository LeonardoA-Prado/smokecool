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



