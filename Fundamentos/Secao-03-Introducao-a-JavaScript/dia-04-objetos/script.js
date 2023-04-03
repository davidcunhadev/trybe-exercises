//METODO FOR IN EM OBJETOS//

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let key in car) {
//     console.log(key, car[key]);
//   }


// let food = ['hambúrguer', 'bife', 'acarajé'];

// for (let position in food) {
//     console.log(position);
//   };
//   //resultado: 0, 1, 2;

//   let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let pessoa in names) {
//     console.log("Ola, " + names[pessoa]);
//   }

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (let key in car) {
//     console.log(key, car[key]);
//   }


//ATRIBUINDO NOVAS CHAVES PARA DENTRO DE UM OBJETO MANUALMENTE //

//   let customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   console.log(customer1);
//   customer1.lastName = 'Faria';
//   console.log(customer1);
  
//   let customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
  
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

// OU TAMBEM ADICIONANDO NOVAS CHAVES PARA DENTRO DE UM OBJETO UTILIZANDO UMA FUNCAO//

// let customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   let lastName = 'Ferreira';
  
//   function addProperty(object, key, value) {
//     object[key] = value;
//   };
  
//   addProperty(customer, newKey, lastName);
//   console.log(customer);

//   newKey = "fullname";
//   let fullname = customer.firstName + " " + customer.lastName;

//   addProperty(customer, newKey, fullname);
//   console.log(customer);


// let student1 = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskills: 'Ótimo',
// };

// let student2 = {
//   html: 'Bom',
//   css: 'Ótimo',
//   javascript: 'Ruim',
//   softskills: 'Ótimo',
//   git: 'Bom', // chave adicionada
// };

// function listSkills(student) {
//   let arrayOfSkills = Object.keys(student);
//   for (let index in arrayOfSkills) {
//     console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);


// // IDK BOUT' THIS BUT OK //


// let person = {
//     name:'Roberto',
//   };
  
//   let lastName = {
//     lastName: 'Silva',
//   };
  
//   let newPerson = Object.assign({},person,lastName);
//   newPerson.name = 'Gilberto';
//   console.log(newPerson);
//   console.log(person);


//////////////////////////////////// ATIVIDADES DO DIA ////////////////////////////////////

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// //1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave.//

// // console.log("Bem vinda, " + info.personagem + "!");

 // 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor.//

//  info.recorrente = "Sim";

// console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto.//

// for (let key in info) {
//     console.log(key);
// }

//4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto.//

// for (let value in info) {
//     console.log(info[value]);
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. //

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// info.recorrente = "Sim";

// let secondInfo = {
//     personagem: "Tio Patinhas",
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MacPatinhas",
//     recorrente: "Sim",
// }

// for (let key in info) {
//     if(key === "recorrente" && info[key] === "Sim") {
//         console.log("Ambos recorrentes");
//     } else {
//         console.log(info[key] + " e " + secondInfo[key]);
//     }
// }

////////////////// LEITURA DE OBJETOS /////////////////////

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//1 - Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.//

// console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);//

//2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações://

// {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })

// console.log(leitor.livrosFavoritos);

//3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.//

let qtdeLivros = leitor.livrosFavoritos.length; 
console.log(leitor.nome + " tem " + qtdeLivros + " livros favoritos.");

