export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export function arrayMutate(
  numbers: number[],
  mutate: (v: number) => number
): number[] {
  return numbers.map(mutate);
}

arrayMutate([1, 2, 3], (v) => v * 2); //?
