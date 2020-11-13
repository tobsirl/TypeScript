import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbers = new NumbersCollection([12345, 10, 3, -5, 0, 2]);
// const sorter = new Sorter(numbers);

const characters = new CharactersCollection('aFeerGsergehtr');

const sorter = new Sorter(characters);

sorter.sort();

console.log(characters.data);
