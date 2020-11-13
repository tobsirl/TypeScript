import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([12345, 10, 3, -5, 0, 2]);
const sorter = new Sorter(numbers);

sorter.sort();

console.log(numbers.data);
