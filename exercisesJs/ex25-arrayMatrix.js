/**
 * Ayer, en noche buena, una família cenó por todo
 * lo alto... Con tanta copa 🍾 encima todavía no
 * han retirado los platos y la comida de ayer...
 *
 * Un ratoncillo llamado midurat 🐭, que vió ayer
 * el festín escondido, está relamiéndose los bigotes
 * al ver todos los manjares que hay en el comedor.
 *
 * Eso sí, hay que tener cuidado 😶 y sólo hacer los
 * movimientos correctos para comer algo. Por eso,
 * el ratón, que se ha visto los vídeos de midudev,
 * va a crear una función para saber si su próximo
 * movimiento es correcto o no ✅.
 *
 * El ratoncillo se puede mover en 4 direcciones:
 * up, down, left, right y el comedor es una matriz
 * (un array de arrays) donde cada posición puede ser:
 *
 * Un espacio vacío es que no hay nada
 * Una m es el ratón
 * Un * es la comida
 *
 * Vamos a ver unos ejemplos:
 *
 * const room = [
 *   [' ', ' ', ' '],
 *   [' ', ' ', 'm'],
 *   [' ', ' ', '*']
 * ]
 *
 * canMouseEat('up',    room)   // false
 * canMouseEat('down',  room)   // true
 * canMouseEat('right', room)   // false
 * canMouseEat('left',  room)   // false
 *
 * const room2 = [
 *   ['*', ' ', ' ', ' '],
 *   [' ', 'm', '*', ' '],
 *   [' ', ' ', ' ', ' '],
 *   [' ', ' ', ' ', '*']
 * ]
 *
 * canMouseEat('up',    room2)   // false
 * canMouseEat('down',  room2)   // false
 * canMouseEat('right', room2)   // true
 * canMouseEat('left',  room2)   // false
 *
 * ¡Ten en cuenta que el ratón quiere buscar
 * comida en diferentes habitaciones y que
 * cada una puede tener dimensiones diferentes!
 */

export default function canMouseEat(direction, game) {
  let pos = [];
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] === "m") pos = [i, j];
    }
  }
  if (direction === "up") pos[0] -= 1;
  if (direction === "down") pos[0] += 1;
  if (direction === "left") pos[1] -= 1;
  if (direction === "right") pos[1] += 1;

  if (pos[0] > game.length - 1 || pos[0] < 0) return false;
  if (pos[1] > game[0].length - 1 || pos[1] < 0) return false;

  return game[pos[0]][pos[1]] === "*" ? true : false;
}
