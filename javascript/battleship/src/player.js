import { Gameboard } from './gameboard.js';

export const Player = (tipo) => {
    const tablero = Gameboard();

    const atacar = (tableroEnemigo, coordenadas) => {
        tableroEnemigo.recibirAtaque(coordenadas);
    };

    const atacarRandom = (tableroEnemigo) => {
        let coordenadas;
        do {
            coordenadas = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ];
        } while (
            tableroEnemigo.ataquesRecibidos.some(
                ([x, y]) => x === coordenadas[0] && y === coordenadas[1]
            )
        );
        tableroEnemigo.recibirAtaque(coordenadas);
    };

    return { tipo, tablero, atacar, atacarRandom };
};