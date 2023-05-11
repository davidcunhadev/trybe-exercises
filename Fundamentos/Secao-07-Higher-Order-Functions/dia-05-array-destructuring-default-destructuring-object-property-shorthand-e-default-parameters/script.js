//array destructuring//
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry);
// console.log(secondCountry); 
// console.log(thirdCountry); 
// console.log(fourthCountry); 

//example 2//
const primeNumbers = [17, 23, 37]
const [firstNum, secundoNum, thirdNum] = primeNumbers;

const soma = (num1, num2) => num1 + num2;

// console.log(soma(firstNum, thirdNum));

//example 3//
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida); // arroz gato água

//example 4//
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares; //cada virgula reduz 1 item no array da esquerda para a direita//

// console.log(numerosPares); // [6, 8, 10, 12];

//////////////////////////////////////////////////

//default destructuring//
// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'brazilian' } = person;

// console.log(nationality);

//example 2//
const getNationality = ({ firstName, nationality = 'brazilian' }) => `${firstName} is ${nationality}`;
// Passando um valor default para a desestruturação de `nationality` sendo "Brazilian" então todo objeto que passarmos terá esse valor, caso não seja passado algum outro.
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};


const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person)); // João is brazilian

//////////////////////////////////////////////////////////////

//Object Property Shorthand
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

// console.log(newUser(54, 'isabella', 'isabella@email.com'));

//example 2//
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

// console.log(getPosition(-19.8157, -43.9542));

/////////////////////////////////////////////////

//Default Parameters//

const greeting = (user = 'pessoa usuária!') => `Seja bem vindo(a) ${user}`;

// console.log(greeting());