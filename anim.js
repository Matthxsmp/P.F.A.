// Ya no se muestran letras (la pista actual es instrumental).
// Si más adelante usas una canción con letra, puedes volver a activar
// esta función rellenando lyricsData con { text, time } y descomentando
// la línea del setInterval al final del archivo.

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 312000);