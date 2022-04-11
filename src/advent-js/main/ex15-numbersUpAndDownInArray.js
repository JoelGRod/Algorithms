/**
 * ¡Estamos haciendo los últimos ajustes para el trineo de
 * Santa Claus!
 *
 * Como ya sabes, el trineo es volador y estamos ajustando el motor
 * para que haga parabolas lo más óptimas posibles. Para esto el salto
 * debe ser siempre hacia arriba y, a partir del punto más alto,
 * debe bajar siempre hacia abajo...
 *
 * Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial,
 * nos ha explicado que los saltos se pueden ver como arrays...
 * y que sólo tenemos que asegurarnos que los números suben y bajan de
 * forma correcta. También nos avisa que sólo pasaremos arrays de,
 * como mínimo, tres posiciones.
 *
 * Nos ha pasado algunos ejemplos de cómo debería ser nuestra
 * función y algunos resultados:
 *
 * checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
 * checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
 * checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
 * checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta
 *
 * checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
 * checkSledJump([1, 2, 3]) // false: sólo sube
 * checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
 *
 * Lo importante: recorrer el array de izquierda a derecha para ver
 * que la subida es siempre estricta, detectar el punto más alto y
 * entonces ver que la bajada es estricta hacia abajo...
 */

export default function checkSledJump(heights) {
  const max = Math.max(...heights);
  if (heights[0] === max || heights.at(-1) === max) return false;

  const up = heights.slice(0, heights.indexOf(max) + 1);
  const down = heights.slice(heights.indexOf(max));

  let result = true;
  up.reduce((prev, current) => (current > prev ? current : (result = false)));
  down.reduce((prev, current) => (current < prev ? current : (result = false)));

  return result;
}

export function checkSledJumpExtra(heights) {
  let result = false;
  for(let i = 1; i < heights.length; i++) {
    if(heights[i] < heights[i - 1]) result = true;
    else if(heights[i - 1] === heights[i] || result) return false;
  }
  return result;
}
