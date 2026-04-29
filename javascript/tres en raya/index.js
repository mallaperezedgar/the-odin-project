

// jugadores 
const crearJugador = (nombre, marca) => {
  return {
    getNombre() {
      return nombre;
    },
    getMarca() {
      return marca;
    }
  };
};


function resetGame() {
  tableroJuego.reset();
  jugadorActual = jugador1;
  juegoTerminado = false;
}



// funcion iffe
const tableroJuego = (function () {
  let tablero = Array(9).fill("");

  function getTablero() {
    return tablero;
  }

  function ponerMarca(index, marca) {
    if (tablero[index] !== "") return false;

    tablero[index] = marca;
    return true;
  }

  function reset() {
    tablero = Array(9).fill("");
  }

  return {
    getTablero,
    ponerMarca,
    reset
  };
})();

// controlador de juego
const GameController = (function () {
  // jugadores
  const jugador1 = crearJugador("Jugador 1", "X");
  const jugador2 = crearJugador("Jugador 2", "O");

  // estado
  let jugadorActual = jugador1;
  let juegoTerminado = false;

  function jugadorActualNombre() {
  return jugadorActual.getNombre();
}


  // poner una marca
function jugarTurno(index) {
  if (juegoTerminado) return;

  const jugadaValida = tableroJuego.ponerMarca(
    index,
    jugadorActual.getMarca()
  );

  if (!jugadaValida) return;

  const tablero = tableroJuego.getTablero();

  if (comprobarGanador(tablero)) {
    console.log(`Ha ganado ${jugadorActual.getNombre()}`);
    juegoTerminado = true;
    return;
  }

  if (tablero.every(c => c !== "")) {
    console.log("Empate");
    juegoTerminado = true;
    return;
  }

  cambiarTurno();
}

  // cambiar turno
  function cambiarTurno() {
    jugadorActual = jugadorActual === jugador1 ? jugador2 : jugador1;
  }

    function resetGame() {
    tableroJuego.reset();
    jugadorActual = jugador1;
    juegoTerminado = false;
  }

  // comprobar ganador
  function comprobarGanador(tablero) {
    const combinaciones = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    return combinaciones.some(([a,b,c]) =>
      tablero[a] &&
      tablero[a] === tablero[b] &&
      tablero[a] === tablero[c]
    );
  }

return {
  jugarTurno,
  resetGame,
  jugadorActualNombre
};

})();

//pantalla de juego 

const DisplayController = (function () {
  const boardDiv = document.getElementById("tablero");  // antes era "board"
  const message = document.getElementById("mensaje");   // antes era "message"
  const resetButton = document.getElementById("reiniciar"); // antes era "reset"

  // render del tablero
  function render(tablero) {
    boardDiv.innerHTML = "";

    tablero.forEach((cell, index) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      cellDiv.textContent = cell;
      cellDiv.dataset.index = index;

      // click en la casilla
      cellDiv.addEventListener("click", () => handleClick(index));

      boardDiv.appendChild(cellDiv);
    });
  }

  // manejar click
  function handleClick(index) {
    GameController.jugarTurno(index);
    render(tableroJuego.getTablero());
    updateMessage();
  }

  // mostrar mensaje
  function updateMessage() {
    const tablero = tableroJuego.getTablero();
    const combinaciones = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    const hayGanador = combinaciones.some(([a,b,c]) =>
      tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]
    );

    if (hayGanador) {
      message.textContent = `Ha ganado ${GameController.jugadorActualNombre()}`;
    } else if (tablero.every(c => c !== "")) {
      message.textContent = "Empate";
    } else {
      message.textContent = "";
    }
  }

  // reset
  resetButton.addEventListener("click", () => {
    GameController.resetGame();
    render(tableroJuego.getTablero());
    message.textContent = "";
  });

  return { render };
})();


DisplayController.render(tableroJuego.getTablero());





GameController.jugarTurno(0);
GameController.jugarTurno(1);

console.log(tableroJuego.getTablero());

GameController.resetGame();

console.log(tableroJuego.getTablero());

console.log(saludar());