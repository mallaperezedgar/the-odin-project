const botones = document.querySelectorAll(".boton");
const pantalla = document.querySelector(".pantalla");

let numeroActual = ""; // variable para guardar lo que escribes
let primerNumero = null;
let operacion = null;

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (!isNaN(valor)) {
      numeroActual += valor;
      pantalla.textContent = numeroActual;

    } else if (valor === "+") {
      suma();

    } else if (valor === "-") {
      resta();

    } else if (valor === "x") {
      multiplicar();

    } else if (valor === "/") {
      dividir();

    } else if (valor === "=") {
      igual();
    }
  });
});


  




// funciones calculadora
function suma() {
  primerNumero = Number(numeroActual);
  operacion = "+";
  numeroActual = "";
}

function resta() {
  primerNumero = Number(numeroActual);
  operacion = "-";
  numeroActual = "";
}

function multiplicar() {
  primerNumero = Number(numeroActual);
  operacion = "*";
  numeroActual = "";
}

function dividir() {
  primerNumero = Number(numeroActual);
  operacion = "/";
  numeroActual = "";
}



function igual() {
  const segundoNumero = Number(numeroActual);
  let resultado;

  if (operacion === "+") resultado = primerNumero + segundoNumero;
  if (operacion === "-") resultado = primerNumero - segundoNumero;
  if (operacion === "*") resultado = primerNumero * segundoNumero;
  if (operacion === "/") resultado = primerNumero / segundoNumero;

  pantalla.textContent = resultado;
  numeroActual = resultado.toString();
}

function borrar(){
    
    numeroActual = "";          // limpiar la variable
    primerNumero = null;        // opcional: también limpiar el primer número
    operacion = null;           // opcional: limpiar operación
    pantalla.textContent = "0"; // mostrar 0 en la pantalla
}

