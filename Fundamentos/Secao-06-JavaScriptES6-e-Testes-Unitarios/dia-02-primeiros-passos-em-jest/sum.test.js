//Exemplo de introdução//
// const soma = require('./script');

// test('soma dois valores numéricos', () => {
//   expect(soma(2,3)).toBe(5);
// })

//Exercício 1//
// const myRemove = require('./script');

// describe('A função myRemove recebe um array e retorna uma cópia desse array sem o elemento item, caso ele exista no array:', () => {
//   test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//   })
//   test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//   })
//   test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
//   })
// })

//Exercício 2//
// const myFizzBuzz = require('./script');

// describe('A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false', () => {
//   test('Execute a função myFizzBuzz, sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//   })
//   test('Execute a função myFizzBuzz, sendo num um número divisível por 3, e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(3)).toBe('fizz');
//   })
//   test('Execute a função myFizzBuzz, sendo num um número divisível por 5, e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(5)).toBe('buzz');
//   })
//   test('Execute a função myFizzBuzz, sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(2)).toBe(2);
//   })
//   test('Execute a função myFizzBuzz, sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz('hi')).toBe(false);
//   })
// })

//Exercício 3//
// const {encode, decode,} = require('./script');

// describe('Para as funções encode e decode, crie os seguintes testes em Jest:', () => {
//   test('Teste se encode é definida', () => {
//     expect(encode).toBeDefined();
//   })
//   test('Teste se decode é definida', () => {
//     expect(decode).toBeDefined();
//   })
//   test('Teste se encode é uma função', () => {
//     expect(typeof encode).toBe('function');
//   })
//   test('Teste se decode é uma função', () => {
//     expect(typeof decode).toBe('function');
//   })
//   test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
//     expect(encode("oi meu nome e David")).toEqual('43 m25 n4m2 2 D1v3d');
//   })
//   test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
//     expect(decode('43 t5d4 b2m?')).toBe('oi tudo bem?')
//   })
//   test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
//     expect(encode('hello world').length).toEqual(11);
//   })
//   test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
//     expect(decode('hello world').length).toEqual(11);
//   })
// })



