//alert("Hola Mundo");
let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let zona_horaria=document.getElementById("zona_horaria");

const SolicitudAPI = () => {
  // Hacer una petición para un usuario con ID especifico
  axios.get("https://itp-bdd.000webhostapp.com/php-geoip-api/index.php")
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data);
      ip.innerHTML = response.data.ip;
      if (pais) pais.innerHTML = response.data.pais;
      if (continente) continente.innerHTML = response.data.continente;
      if (zona_horaria) zona_horaria.innerHTML = response.data.zona_horaria;
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
};

// Llama al evento LOAD cada vez que se refresca o se actualiza la pagina 
// Y llama a la función solicitud API que tiene la rutina de llama a la API
// desde el Axios 
window.addEventListener('load', SolicitudAPI);
