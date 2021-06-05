// pluck
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: 'Ben', age: 12 },
  { name: 'Spot', age: 2 },
];

pluck(dogs, 'name');
pluck(dogs, 'age');
