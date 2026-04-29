function movimientoCaballo(inicio, fin) {
  const movimientos = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2],
  ];

  const dentroDelTablero = ([fila, columna]) =>
    fila >= 0 && fila <= 7 && columna >= 0 && columna <= 7;

  const clave = ([fila, columna]) => `${fila},${columna}`;

  // BFS — búsqueda en anchura
  const cola = [[inicio, [inicio]]];
  const visitados = new Set([clave(inicio)]);

  while (cola.length) {
    const [posicionActual, camino] = cola.shift();

    if (clave(posicionActual) === clave(fin)) {
      const pasos = camino.length - 1;
      console.log(`\n¡Llegaste en ${pasos} movimiento${pasos === 1 ? '' : 's'}! Este es tu camino:`);
      camino.forEach(casilla => console.log(`  [${casilla}]`));
      return camino;
    }

    for (const [filaDelta, columnaDelta] of movimientos) {
      const siguienteCasilla = [
        posicionActual[0] + filaDelta,
        posicionActual[1] + columnaDelta,
      ];

      if (dentroDelTablero(siguienteCasilla) && !visitados.has(clave(siguienteCasilla))) {
        visitados.add(clave(siguienteCasilla));
        cola.push([siguienteCasilla, [...camino, siguienteCasilla]]);
      }
    }
  }
}

// ─── Pruebas ──────────────────────────────────────────────────────────────────
movimientoCaballo([0, 0], [1, 2]);
movimientoCaballo([0, 0], [3, 3]);
movimientoCaballo([3, 3], [0, 0]);
movimientoCaballo([0, 0], [7, 7]);
movimientoCaballo([3, 3], [4, 3]);