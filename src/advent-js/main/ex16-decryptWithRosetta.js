/**
 * Lara Eloft ha encontrado unos restos élficos en una cueva,
 * cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.
 *
 * Ahora se encuentra descifrando unas misteriosas cartas que contiene
 * información sobre unos números que le puede hacer llegar al
 * próximo objetivo.
 *
 * Lara tiene un documento que contiene una serie de números que
 * pueden ser usados para descifrarlos:
 *
 * Símbolo       Valor
 *   .             1
 *   ,             5
 *   :             10
 *   ;             50
 *   !             100
 *
 * Lara, además, ha notado una cosa. Los símbolos se restan si están
 * inmediatamente a la izquierda de otro mayor. 😱
 *
 * Tenemos que crear una función que nos pasa una cadena de texto con
 * símbolos y tenemos que transformarlo al número correcto. ¡Ojo!
 * Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:
 *
 * decodeNumbers('...') // 3
 * decodeNumbers('.,') // 4 (5 - 1)
 * decodeNumbers(',.') // 6 (5 + 1)
 * decodeNumbers(',...') // 8 (5 + 3)
 * decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
 * decodeNumbers('.;') // 49 (50 - 1)
 * decodeNumbers('..,') // 5 (-1 + 1 + 5)
 * decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
 * decodeNumbers('.;!') // 49 (-1 -50 + 100)
 * decodeNumbers('!!!') // 300
 * decodeNumbers(';!') // 50
 * decodeNumbers(';.W') // NaN
 */

export default function decodeNumber(symbols) {
  // ¡No olvides compartir tu solución en redes!
  const rosetta = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  const numbers = symbols
    .split("")
    .map((symbol) => (symbol in rosetta ? rosetta[symbol] : NaN))
    .map((value, idx, arr) => (value < arr[idx + 1] ? -value : value))
    .reduce((prev, current) => prev + current);
  return numbers;
}
