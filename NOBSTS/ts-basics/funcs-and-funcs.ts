export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type MutateFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutateFunction
): number[] {
  return numbers.map(mutate);
}

arrayMutate([1, 2, 3], (v) => v * 2); //?
