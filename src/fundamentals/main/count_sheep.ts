export function countSheep(num: number): string {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
}

export function countSheepTwo(num: number): string {
  return Array.from({ length: num }, (x, i) => `${i + 1} sheep...`).join("");
}
