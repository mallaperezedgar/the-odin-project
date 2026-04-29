// import de inicio 
import './style.css';
import cargarFormulario from "./contacto";
import cargarInicio from "./inicio";
import cargarMenu from "./menu";


// resto de tu código...


// se llama directamente para que cargue siempre
cargarInicio();
// se añade al boton inicio para volver a cargar si se quiere 
document.getElementById("home-btn").addEventListener("click", () => {
  clearContent();
  cargarInicio();
});
//limpia el contenido
function clearContent() {
  document.getElementById("content").innerHTML = "";
}

// carga el menu al pulsar 


document.getElementById("menu-btn").addEventListener("click", () => {
clearContent();
  cargarMenu();
});



document.getElementById("contact-btn").addEventListener("click", () => {
  clearContent();
  cargarFormulario();
});






