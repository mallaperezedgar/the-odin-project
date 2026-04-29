import { Ship } from '../src/ship.js';

test('ship has correct length', () => {
  const ship = Ship(3);
  expect(ship.length).toBe(3);
});

test('hit() aumenta los golpes', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.hits).toBe(1);
});


test('isSunk() devuelve true cuando los golpes igualan la longitud', () => {
    const ship = Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test('isSunk() devuelve false si no ha recibido suficientes golpes', () => {
    const ship = Ship(3);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});