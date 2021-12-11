/**
 * Para mejorar la productividad de la tienda en la
 * que trabajamos, vamos a crear una pequeña máquina
 * que calcula el mínimo número de monedas que debemos
 * usar para dar el cambio de una compra en metálico.
 *
 * Las monedas para cambio que puedes usar son estas:
 * coins[0] = 1 céntimo
 * coins[1] = 2 céntimos
 * coins[2] = 5 céntimos
 * coins[3] = 10 céntimos
 * coins[4] = 20 céntimos
 * coins[5] = 50 céntimos
 *
 * Tenemos que crear una función que recibe el número
 * de céntimos que hay que devolver al cliente y la función
 * nos da un array con la combinación de monedas mínimas
 * que debemos usar para conseguirlo.
 *
 * getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
 * getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
 * getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
 * getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
 * getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
 *
 * La dificultad del reto está en saber utilizar correctamente
 * una estructura que te permita conocer las monedas que tienes
 * disponible para crear el array con la devolución, ya que debes
 * usar siempre el menor número de monedas posible. ¡Suerte 👩‍💻👨‍💻!.
 */

export default function getCoins(change) {
  const coins = {
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
  };

  if (Math.floor(change / 50) !== 0) {
    coins[50] = Math.floor(change / 50);
    change -= coins[50] * 50;
  }
  if (Math.floor(change / 20) !== 0) {
    coins[20] = Math.floor(change / 20);
    change -= coins[20] * 20;
  }
  if (Math.floor(change / 10) !== 0) {
    coins[10] = Math.floor(change / 10);
    change -= coins[10] * 10;
  }
  if (Math.floor(change / 5) !== 0) {
    coins[5] = Math.floor(change / 5);
    change -= coins[5] * 5;
  }
  if (Math.floor(change / 2) !== 0) {
    coins[2] = Math.floor(change / 2);
    change -= coins[2] * 2;
  }
  if (Math.floor(change / 1) !== 0) {
    coins[1] = Math.floor(change / 1);
    change -= coins[1];
  }

  return Object.values(coins);
}

export function getCoinsTwo(change) {
  const coins = {
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
  };
  const values = Object.keys(coins).reverse();
  for (let key of values) {
    if (Math.floor(change / key) !== 0) {
      coins[key] = Math.floor(change / key);
      change -= coins[key] * key;
    }
  }
  return Object.values(coins);
}

export function getCoinsThree(change) {
  const coins = {
    1: 0,
    2: 0,
    5: 0,
    10: 0,
    20: 0,
    50: 0,
  };

  Object.keys(coins).reduceRight((_, coin) => {
    if (Math.floor(change / coin) !== 0) {
      coins[coin] = Math.floor(change / coin);
      change -= coins[coin] * coin;
    }
  }, null);
  return Object.values(coins);
}
