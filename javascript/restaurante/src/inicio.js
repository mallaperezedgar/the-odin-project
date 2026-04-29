export default function cargarInicio(){
const content=document.getElementById("content");

const container= document.createElement("div");

const titulo = document.createElement("h1");
  titulo.textContent = "Restaurante de Edgar";

  const subtitulo = document.createElement("h2");
  subtitulo.textContent = "Comida artesanal con sabor a código";

  const texto = document.createElement("p");
  texto.textContent =
    "Bienvenido a nuestro restaurante ficticio, donde combinamos recetas tradicionales con tecnología moderna. Todo está hecho con JavaScript y Webpack.";

container.appendChild(titulo);
container.appendChild(subtitulo);
container.appendChild(texto);

content.appendChild(container);


}