export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type MutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

arrayMutate([1, 2, 3], (v) => v * 2);
