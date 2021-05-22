export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutateFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutateFunction
): number[] {
  return numbers.map(mutate);
}

arrayMutate([1, 2, 3], (v) => v * 2); //?

const myNewMutateFunction: MutateFunction = (v: number) => v * 100;

export function createAdder(num: number): (val: number) => number {
  return (val: number) => num + val;
}

const addOne = createAdder(1);

addOne(55);
