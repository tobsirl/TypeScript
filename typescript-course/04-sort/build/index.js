"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbers = new NumbersCollection([12345, 10, 3, -5, 0, 2]);
// numbers.sort()
// console.log(numbers.data)
// const characters = new CharactersCollection('zaFeerGsergehtr');
// characters.sort();
// console.log(characters.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(6);
linkedList.sort();
linkedList.print();
