import "./style.css";
import { fetchWeatherData } from "./api";
import { mostrarTiempo } from "./dom";
console.log('edgar');



document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("tiempo-formulario");
  const localizacionboton = document.getElementById("localizacion");




  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    const localizacion = localizacionboton.value.trim();
    console.log(localizacion);
     if (!localizacion) return;

    const datos = await fetchWeatherData(localizacion); // 👈 llamas la función
    console.log(datos); // comprueba que llegan los datos
    mostrarTiempo(datos);




  });


});


