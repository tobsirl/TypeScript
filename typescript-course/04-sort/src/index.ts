import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbers = new NumbersCollection([12345, 10, 3, -5, 0, 2]);
// numbers.sort()
// console.log(numbers.data)

const characters = new CharactersCollection('zaFeerGsergehtr');
characters.sort();
console.log(characters.data);

// const linkedList = new LinkedList();

// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

// linkedList.print();
