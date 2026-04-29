//seleccion de divs para poner los datos

const ciudad = document.querySelector(".ciudad");
const temperatura = document.querySelector(".temperatura");
const viento=document.querySelector(".info-secundaria div:first-child");
const humedadEl = document.querySelector(".info-secundaria div:nth-child(2)");
const iconoEl = document.querySelector(".info-principal img");


export function mostrarTiempo(datos){

    ciudad.textContent =datos.resolvedAddress;
    temperatura.textContent= `${Math.round(datos.currentConditions.temp)}°C`;

viento.textContent = `💨 Viento: ${datos.currentConditions.windspeed} km/h`;
  humedadEl.textContent = `💧 Humedad: ${Math.round(datos.currentConditions.humidity)}%`;

  iconoEl.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${datos.currentConditions.icon}.png`;
  iconoEl.alt = datos.currentConditions.conditions;


}