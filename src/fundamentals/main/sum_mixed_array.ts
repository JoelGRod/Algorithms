export function sumMix(x: any[]): number {
  return x.reduce((prev, current) => prev + parseInt(current), 0);
}
export function sumMixTwo(xs: (string | number)[]): number {
  return xs.reduce<number>((a, x) => a + +x, 0);
}