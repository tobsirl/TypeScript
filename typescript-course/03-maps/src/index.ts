import User from './User';

const person = new User();

console.log(`Hi There ${person.name}`);

const test = document.querySelector('.test');

test.innerHTML = `<h1>Hi There! ${person.name} lat: ${person.location.lat} long: ${person.location.lng}</h1>`;
