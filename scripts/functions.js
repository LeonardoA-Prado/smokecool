var abrirVentana = document.getElementById('admin'),
  ventana = document.getElementById('ventana'),
  popup = document.getElementById('popup'),
  cerrarVentana = document.getElementById('cerrar-ventana');

abrirVentana.addEventListener('click', openWindow);
cerrarVentana.addEventListener('click', closeWindow);

function openWindow() {
  ventana.classList.add('active');
  popup.classList.add('active');
}

function closeWindow() {
  ventana.classList.remove('active');
  popup.classList.remove('active');
}

const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('acceder');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  if (passwordInput.value === '1234') {
    window.location.href = 'usuarios.html';
  }
});

const texts = {
  Guillermo: "Guillermo de Molina Madrid(CEO del régimen judeo-masónico) Nacido en Campos do Jordão, Sao Paulo,Brasil, tengo 18 años y estoy estudiando actualmente un ciclo superior de Desarrollo de Aplicaciones Web. Puedo aportar creatividad a ideas de nuevos productos para la empresa ya que soy una persona a la que le gusta mucho el licor y siempre prueba nuevos sabores, al igual que con las cachimbas.",
  Kevin: "Kevin Andrés Soto Briceño(CEO de Peru) Nacido en Lima, Perú, tengo 19 años y ahora mismo me encuentro estudiando 1º de Daw. Mi aportación a esta empresa es la contabilidad y los números que se manejan. Pero si hace falta vendo los datos de nuestros clientes para que la empresa no caiga en bancarrota.",
  Leo: "Leonardo Almeida Prado(CEO de los Pingüinos) Nacido en Cuiabá, Mato Grosso,Brasil, tengo 19 años, actualmente estoy estudiando el grado superior de Desarrollo de Aplicaciones Web. Puedo aportar a la empresa la capacidad de planificar y organizar el trabajo para la gestión de productos o servicios, ventajas y riesgos(fumar mata).",
  Antonio: "Antonio García Victoria(CEO del racismo) Nacido en Três Lagoas,Mato Grosso del Sur,Brasil, pero actualmente vivo en Marbella tengo 18 años y estoy estudiando 1º de Daw, lo que estoy dispuesto a darle a esta empresa es un análisis de mercado y los antecedentes que tenemos (pero no los penales, eso ya para otro día)"
};

const buttons = document.querySelectorAll('.info-button');
const content = document.querySelector('.info-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const text = texts[button.getAttribute('data-text')];
    content.textContent = text;
  });

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(otherButton => {
        otherButton.classList.remove('selected');
      });
      button.classList.add('selected');
    });
  });
});

const barras = document.querySelectorAll(".barra");
const numBarras = barras.length;

barras.forEach((barra) => {
  const valor = barra.getAttribute("data-valor");
  const ancho = 100 / numBarras;
  barra.style.width = `${ancho}%`;
  barra.style.height = `${valor}%`;
});

function carritoCounter(){
  cantidadCarrito.style.display = 'flex'
  carrito.forEach((producto) => {
    cantidadCarrito.innerText = producto.cantidad
  })
  if (carrito.length === 0) {
    cantidadCarrito.style.display = 'none'
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    carritoCounter();
  }
});

var originalTitle = document.title;

function updateTitle() {
  document.title = "Vuelve Aquí !";
}

function restoreTitle() {
  document.title = originalTitle;
}

window.addEventListener("blur", updateTitle);

window.addEventListener("focus", restoreTitle);
