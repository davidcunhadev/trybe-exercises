//spread operator in array's//

// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'bolsa'];

// console.log(items);
// console.log(newItems);

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);

//spread operator in objects//
// const product = {
//   id: 1,
//   name: 'Camiseta',
// };

// const newProduct = {...product, price: 2.99};

//example 2//
// const product = {
//   id: 1,
//   name: 'Camiseta',
// };

// const productPrice = {
// price: 23
// }

// const newProduct = {...product, ...productPrice};

// console.log(newProduct);

//example 3//
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'manga', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maçã', 'abacaxi', 'laranja'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,...additional];
};

// console.log(fruitSalad(specialFruit, additionalItens));

// //rest parameter//
// const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 30);

// console.log(sum(10,20,30,40,70));

// //Object Destructuring//
// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const {price, seller} = product;

// // console.log(price);
// // console.log(seller);

// //example 2//
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// const {name, age, homeWorld: {name: planetName}, description: {jedi} } = character;

// //console.log(`O nome do personagem é ${name}, tem ${age} anos, mora em ${planetName}, e ${jedi ? 'é um jedi' : 'nao é jedi'}.`);

// //example 3 destructing object interacting with spread operator//
// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend} = daysOfWeek;

// const spreadingDaysOfWeek = [...workDays, ...weekend];

// console.log(spreadingDaysOfWeek);

//example 4//

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfo = {...user, ...jobInfos};

const {name, age, nationality, profession, squad, squadInitials} = userInfo;

const apresentationText = `Hi, my name is ${name}, I'm ${age} year old, and I'm ${nationality}. I work as a ${profession}, and my squad is ${squadInitials + '-' + squad}.`;

console.log(apresentationText);