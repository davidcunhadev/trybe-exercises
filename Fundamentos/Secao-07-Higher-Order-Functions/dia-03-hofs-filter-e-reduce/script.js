//fixing .filter//
const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const filtraNomes = dados.filter((item) => typeof item == 'string'); //filter only typeof string//

//example 2//
const listaNumeros = [10, 20, 30, 40];

const filtraMaiorQue20 = listaNumeros.filter((num) => num > 20);

// .filter ALWAYS returns an array//
// /////////////////////////////////

// fixing .reduce//
const valorItens = [1, 32, 44, 2, 3];

const reduceValues = valorItens.reduce((acc, curr) => {
  console.log(`acc:`, acc);
  console.log(`curr:`, curr);
  console.log('a soma atual é', acc + curr);

  return acc + curr;
}, 0);

//example 2//
const numbers = [1, 32, 44, 2, 3];

const sumArr = numbers.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o curr é ${curr}`);
  return acc + curr;
}, 30)

//its the same thing doing like//
//acc its the accumulator and in this case starts with 30//
const sumArr = numbers.reduce((acc, curr) => acc + curr, 30);

//example 3//

const numbers2 = [50, 85, -30, 3, 15];

const showHigherNumber = numbers2.reduce((bigger, current) => bigger > current ? bigger : current);