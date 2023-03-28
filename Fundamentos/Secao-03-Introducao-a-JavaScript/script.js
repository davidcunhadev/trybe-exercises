//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados//

let a = 5;
let b = 7;
let c = 10;
let message = "";

if (a > b && a > c) {
    console.log(a + " e maior que " + b + " e " + c);
} else if (b > a && b > c) {
    console.log(b + " e maior que " + a);
} else {
    console.log(c + " e maior que " + a + " e " + b);
}

message;

//🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.//

let angleA = 65;
let angleB = 100;
let angleC = 15;

let sumAngles = angleA + angleB + angleC;

let allAnglesPositive = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesPositive) {
    if (sumAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
}
    else {
        console.log("Erro");
    }

//Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.//

let num1 = 2;
let num2 = 3;
let num3 = 5;

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 ===0) {
    console.log(true);
} else {
    console.log(false);
}

//Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.//

let n1 = 3;
let n2 = 4;
let n3 = 6;

if(n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0) {
    console.log(true)
} else {
    console.log(false);
}