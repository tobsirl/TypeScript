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

// event map
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void {
  console.log([name, data]);
}

sendEvent('addToCart', {
  productID: '123',
  user: 'baz',
  quantity: 1,
  time: 10,
});

sendEvent('checkout', { user: 'Philip', time: 14 });
