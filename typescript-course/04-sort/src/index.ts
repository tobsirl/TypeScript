import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbers = new NumbersCollection([12345, 10, 3, -5, 0, 2]);
// const sorterNumbers = new Sorter(numbers);

// const characters = new CharactersCollection('aFeerGsergehtr');

// const sorter = new Sorter(characters);

// sorter.sort();

// console.log(characters.data);

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
