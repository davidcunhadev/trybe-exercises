// Percorra o array imprimindo todos os valores contidos nele com a função console.log().//

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

//Some todos os valores contidos no array e imprima o resultado.//

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// console.log(soma);

//Calcule e imprima a média aritmética dos valores contidos no array.//

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// media = soma / numbers.length;

// console.log(media);

//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.//

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media;

//  for (let index = 0; index < numbers.length; index += 1) {
//      soma += numbers[index];
//  }

//  media = soma / numbers.length;

//  if(media > 20) {
//     console.log("Valor maior que 20")
//  } else {
//     console.log("Valor menor ou igual a 20");
//  }

//Utilizando for, descubra o maior valor contido no array e imprima-o.//

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNumero = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorNumero) {
//         maiorNumero = numbers[index];
//     }
// }

// console.log(maiorNumero);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.//

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numerosImpares = 0;


// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         numerosImpares += 1;
//     }
// }

//     if(numerosImpares === 0) {
//         console.log("Nenhum valor ímpar encontrado.");
//     } else {
//         console.log(numerosImpares);
//     }


//Utilizando for, descubra o menor valor contido no array e imprima-o.//

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorNumero = numbers[0];

// for(let index = 0; index < numbers.length; index += 1) {
//     if(menorNumero > numbers[index]) {
//         menorNumero = numbers[index];
//     }
// }

// console.log(menorNumero);

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.//

let novoArray = [];

for(let index = 1; index <= 25; index += 1) {
    novoArray.push(index);
}



