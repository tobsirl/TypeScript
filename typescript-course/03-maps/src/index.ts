import { User } from './User';
import { Company } from './Company';

const person = new User();
const company = new Company();

console.log(`Hi There ${person.name}`);

const test = document.querySelector('.test');

test.innerHTML = `<h1>Hi There! ${person.name} lat: ${person.location.lat} long: ${person.location.lng}</h1>
                <br /><p>${company.name} ${company.catchPhrase} lat: ${company.location.lat} long: ${company.location.lng}</p>`;
