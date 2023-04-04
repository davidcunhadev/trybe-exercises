//🚀 1.Modifique a variável para que respeite o escopo em que está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.//

// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
//   }
//   imprimeIdade()

//🚀 2.Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.//

  // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
//   const pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
// //   pessoa = {
// //     nome: 'Luna',
// //     idade: 19}///
    // Altere essa estrutura para corrigir o erro.

// pessoa.nome = "Luna";
// pessoa.idade = 19;

// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);

//3. Modifique a variável para que não ocorra Erro.

// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hambúrguer';
// console.log(favoriteFood);

//4.Modifique as concatenações para template literals.//

// const name = 'Adriana';
// const lastName = 'Soares';

// // console.log('Olá' + ',' + name + ' ' + lastName + '!');
// console.log(`Ola, ${name} ${lastName} !`);

// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// // console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

//5.🚀 Transforme a função numeroAleatorio em uma arrow function.//

// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

// const numeroAleatorio = () =>  Math.random();

// console.log(numeroAleatorio());


//6.🚀 Transforme a função hello em uma arrow function.//

// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

// const hello = nome => `Ola, ${nome}!`;

// let nome = "Ivan";
// console.log(hello(nome));

//7.🚀 Transforme a função nomeCompleto em uma arrow function.//

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

// const nomeCompleto = (nome, sobrenome) => `Ola, ${nome} ${sobrenome}`;

// let nome = "David";
// let sobrenome = "Cunha";
// console.log(nomeCompleto(nome, sobrenome));


//8.🚀 Altere a expressão if/else utilizando ternary operator.//

// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

// let speed = 90;
// const speedCar = (speed) => speed >= 120 ? `Voce ultrapassou o limite de velocidade` : `Voce esta na velocidade permitida`;

// console.log(speedCar(speed));