import { Player } from './player.js';

const jugador = Player('humano');
const computadora = Player('computadora');

// Colocar barcos predefinidos
jugador.tablero.colocarBarco(3, [[0,0], [0,1], [0,2]]);
jugador.tablero.colocarBarco(2, [[2,0], [2,1]]);
computadora.tablero.colocarBarco(3, [[5,5], [5,6], [5,7]]);
computadora.tablero.colocarBarco(2, [[7,2], [7,3]]);

const renderizarTablero = (tablero, elementoHTML, esEnemigo) => {
    elementoHTML.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const celda = document.createElement('div');
            celda.classList.add('celda');

            const fueAtacada = tablero.ataquesRecibidos.some(([x, y]) => x === i && y === j);
            const hayBarco = tablero.barcos.some(({ coordenadas }) =>
                coordenadas.some(([x, y]) => x === i && y === j)
            );
            const fallo = tablero.ataquesFallados.some(([x, y]) => x === i && y === j);

            if (fueAtacada && hayBarco) celda.classList.add('golpe');
            else if (fallo) celda.classList.add('fallo');
            else if (hayBarco && !esEnemigo) celda.classList.add('barco');

            if (esEnemigo && !fueAtacada) {
                celda.addEventListener('click', () => atacar(i, j));
            }

            elementoHTML.appendChild(celda);
        }
    }
};

const atacar = (x, y) => {
    const mensaje = document.getElementById('mensaje');

    if (computadora.tablero.ataquesRecibidos.some(([ax, ay]) => ax === x && ay === y)) return;

    jugador.atacar(computadora.tablero, [x, y]);

    if (computadora.tablero.todosHundidos()) {
        renderizarTableros();
        mensaje.textContent = '¡Ganaste!';
        return;
    }

    computadora.atacarRandom(jugador.tablero);

    if (jugador.tablero.todosHundidos()) {
        renderizarTableros();
        mensaje.textContent = '¡Perdiste!';
        return;
    }

    renderizarTableros();
};

const renderizarTableros = () => {
    renderizarTablero(jugador.tablero, document.getElementById('tablero-jugador'), false);
    renderizarTablero(computadora.tablero, document.getElementById('tablero-enemigo'), true);
};

renderizarTableros();