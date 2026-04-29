import { Gameboard } from '../src/gameboard.js';

test('se puede colocar un barco en coordenadas', () => {
    const board = Gameboard();
    board.placeShip(3, [0, 0]);
    expect(board.ships[0].ship.length).toBe(3);
});