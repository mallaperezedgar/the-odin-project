import { Ship } from './ship.js';

export const Gameboard = () => {
    const barcos = [];
    const ataquesFallados = [];
    const ataquesRecibidos = [];

    const colocarBarco = (longitud, coordenadas) => {
        const barco = Ship(longitud);
        barcos.push({ barco, coordenadas });
    };

    const recibirAtaque = (coordenadas) => {
        const [x, y] = coordenadas;
        const impacto = barcos.find(({ coordenadas }) =>
            coordenadas.some(([bx, by]) => bx === x && by === y)
        );

        if (impacto) {
            impacto.barco.hit();
        } else {
            ataquesFallados.push(coordenadas);
        }
        ataquesRecibidos.push(coordenadas);
    };

    const todosHundidos = () => barcos.every(({ barco }) => barco.isSunk());

    return { barcos, ataquesFallados, ataquesRecibidos, colocarBarco, recibirAtaque, todosHundidos };
};