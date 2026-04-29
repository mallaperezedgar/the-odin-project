let libreria = [];

function Libro(titulo, autor, paginas, leido) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.leido = leido;
  this.id = crypto.randomUUID();

  this.info = function() {
    return ` ID: ${this.id}${this.titulo} por ${this.autor}, ${this.paginas} páginas, ${this.leido ? "leído" : "no leído aún"}`;
  };
}

function añadirLibroLibreria(titulo, autor, paginas, leido) {
  const nuevoLibro = new Libro(titulo, autor, paginas, leido);
  libreria.push(nuevoLibro);
}

function menuLibreria() {
  const libreriaDiv = document.getElementById("libreria");
  libreriaDiv.innerHTML = "";

  libreria.forEach(libro => {
    const tarjetaLibro = document.createElement("div");
    tarjetaLibro.classList.add("tarjeta-libro");
    tarjetaLibro.dataset.id = libro.id;

    tarjetaLibro.innerHTML = `
      <h3>${libro.titulo}</h3>
      <p>Autor: ${libro.autor}</p>
      <p>Páginas: ${libro.paginas}</p>
      <p>Leído: ${libro.leido ? "Sí" : "No"}</p>
     <button class="eliminarLibro" data-id="${libro.id}">Eliminar</button>
    `;

 

    libreriaDiv.appendChild(tarjetaLibro);
  });
}

function insertarFormulario(evento) {
  evento.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const paginas = document.getElementById("paginas").value;
  const leido = document.getElementById("leido").checked;

  añadirLibroLibreria(titulo, autor, paginas, leido);
  menuLibreria();

  evento.target.reset(); // limpia formulario
}

function eliminarLibro(id) {
  // Filtramos el array para eliminar el libro con ese id
libreria = libreria.filter(libro => libro.id !== id);
  menuLibreria(); // Vuelve a renderizar
}
// Se ejecuta cuando la página está lista
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formularioLibreria");
  formulario.addEventListener("submit", insertarFormulario);


// Listener para eliminar libros
  const libreriaDiv = document.getElementById("libreria");
  libreriaDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminarLibro")) {
      const id = e.target.dataset.id;
      eliminarLibro(id);
    }
  });

  // Libro inicial para prueba
  añadirLibroLibreria("El Hobbit", "Tolkien", 500, true);
  menuLibreria();

});



const miLibro = new Libro("El Quijote", "Cervantes", 500, true);
console.log(miLibro.id);