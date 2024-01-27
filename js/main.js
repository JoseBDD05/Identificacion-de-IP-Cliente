// Variables para los elementos del DOM
let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria= document.getElementById("zona_horaria");

// Función para enviar el formulario con Axios y agregar a la tabla
function enviarFormulario() {
  var ip = document.getElementById('ip').innerHTML;
  var pais = document.getElementById('pais').innerHTML;
  var continente = document.getElementById('continente').innerHTML;
  var zona_horaria = document.getElementById('zona_horaria').innerHTML;
  var nombre = document.getElementById('nombre').value;
  var moneda = document.getElementById('moneda').value;
  var datos = {
    ip: ip,
    pais: pais,
    continente: continente,
    zona_horaria: zona_horaria,
    nombre: nombre,
    moneda: moneda
  };

  // Agregar a la tabla
  var fila = `<tr><td>${nombre}</td><td>${moneda}</td></tr>`;
  tablaDatos.innerHTML += fila;

  // Enviar al servidor centralizado
  axios.post('Central.php', datos)
    .then(function (response) {
      console.log(response.data);
      // Puedes realizar acciones adicionales después de enviar el formulario al servidor centralizado
    })
    .catch(function (error) {
      console.error(error);
      // Manejar errores en caso necesario
    });
}

// Función para hacer la solicitud a la API
const SolicitudAPI = () => {
  axios.get("https://itp-bdd.000webhostapp.com/php-geoip-api/index.php")
    .then(function (response) {
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      if (pais) pais.innerHTML = response.data.pais;
      if (continente) continente.innerHTML = response.data.continente;
      if (zona_horaria) zona_horaria.innerHTML = response.data.zona_horaria;
      // No necesitas asignar valores a nombre y comida aquí, ya que estos se obtienen del formulario
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // siempre será ejecutado
    });
};

// Llama al evento LOAD cada vez que se refresca o se actualiza la página
// Y llama a la función SolicitudAPI que tiene la rutina de llamada a la API desde Axios
window.addEventListener('load', function () {
  SolicitudAPI();
  // Puedes agregar más acciones después de cargar la página si es necesario
});



