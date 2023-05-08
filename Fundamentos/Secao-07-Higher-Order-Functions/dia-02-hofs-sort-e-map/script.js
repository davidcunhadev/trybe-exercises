//Fixing content .sort//

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

//.sort ALWAYS expect a NUMBER, positive OR negative in its respective parameters//
people.sort((a,b) => a.age < b.age ? 1 : -1);


//Fixing content .map
//.map ALWAYS returns the same amount of previous array//
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

persons.map((person) => `${person.firstName} ${person.lastName}`);

//turning positive numbers to negative numbers//
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => number > 0 ? number * (-1) : number);