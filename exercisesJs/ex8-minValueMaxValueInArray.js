/**
 * Invertir en criptomonedas es casi un deporte de riesgo. El otro día
 * hackearon Bitmart y ha hecho que el valor de Bitcoin, y
 * otras monedas, bajase un 25%.
 *
 * Vamos a escribir una función que reciba la lista de precios de una
 * criptomoneda en un día y debemos devolver la ganancia máxima
 * que podríamos sacar si compramos y vendemos la inversión el mismo día.
 *
 * La lista de precios es un array de números y representa el tiempo de
 * izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a
 * un precio que esté a la derecha de la venta y no puedes vender a
 * un precio que esté a la izquierda de la compra.
 *
 * Por ejemplo:
 * const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
 * maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)
 * const pricesEth = [10, 20, 30, 40, 50, 60, 70]
 * maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
 *
 * Si ese día no se puede sacar ningún beneficio, tenemos
 * que devolver -1 para evitar que hagamos una locura:
 *
 * const pricesDoge = [18, 15, 12, 11, 9, 7]
 * maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)
 * const pricesAda = [3, 3, 3, 3, 3]
 * maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
 */

export default function maxProfit(prices) {
  let buy = prices[0];
  let sell = prices[1];
  for (let i = 1; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < buy) buy = prices[i];
      if (prices[j] > sell && prices[j] > buy) sell = prices[j];
    }
  }
  return prices.indexOf(buy) < prices.indexOf(sell) ? sell - buy : -1;
}

function maxProfitTwo(prices) {
  while (prices.length > 0) {
    const minPrize = Math.min(...prices);
    const maxPrize = Math.max(...prices);

    const minPrizeIndex = prices.indexOf(minPrize);
    const maxPrizeIndex = prices.indexOf(maxPrize);
    if (minPrizeIndex < maxPrizeIndex) {
      return maxPrize - minPrize;
    }
    if (minPrize === prices.at(-1)) prices.pop();
    if (maxPrize === prices.at(0)) prices.shift();
  }
  return -1;
}

function maxProfitThree(prices) {
    const min = Math.min(...prices.slice(0, prices.length - 1));
    const indexMin = prices.findIndex(price => price === min);
    const max = Math.max(...prices.slice(indexMin + 1));
    const result = max - min;

    return result > 0 ? result : -1;
}
