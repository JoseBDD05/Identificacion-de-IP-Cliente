// Variables para los elementos del DOM
let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria = document.getElementById("zona_horaria");
let tablaDatos = document.getElementById("tablaDatos");

// Función para enviar el formulario con Axios y agregar a la tabla
function enviarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var moneda = document.getElementById('moneda').value;
  var datos = {
    formulario: {
      nombre: nombre,
      moneda: moneda
    },
    api: {
      ip: ip.innerHTML,
      pais: pais.innerHTML,
      continente: continente.innerHTML,
      zona_horaria: zona_horaria.innerHTML
    }
  };

  // Agregar a la tabla
  var fila = `<tr><td>${nombre}</td><td>${moneda}</td></tr>`;
  tablaDatos.innerHTML += fila;

  // Imprimir datos en la consola
  console.log('Datos a enviar:', JSON.stringify(datos));

  // Enviar al servidor centralizado usando Fetch
  fetch('https://itp-bdd.000webhostapp.com/Central.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Puedes realizar acciones adicionales después de enviar el formulario al servidor centralizado
    })
    .catch(error => {
      console.error(error);
      // Manejar errores en caso necesario
    });
}

const SolicitudAPI = () => {
  fetch("https://itp-bdd.000webhostapp.com/php-geoip-api/index.php")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      ip.innerHTML = data.ip;
      pais.innerHTML = data.pais;
      continente.innerHTML = data.continente;
      zona_horaria.innerHTML = data.zona_horaria;
      // No necesitas asignar valores a nombre y comida aquí, ya que estos se obtienen del formulario
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      // siempre será ejecutado
    });
};

// Llama al evento LOAD cada vez que se refresca o se actualiza la página
// Y llama a la función SolicitudAPI que tiene la rutina de llamada a la API desde Axios
window.addEventListener('load', function () {
  SolicitudAPI();
  // Puedes agregar más acciones después de cargar la página si es necesario
});



