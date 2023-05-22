// promises //
const generateRandomNum = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
// const resolvedPromise = () => 
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNum = generateRandomNum();
//       resolve(randomNum);
//     }, 1000);
//   });

//////////////////////////////////////////////////////////////////

// promise rejeitada retornando um objeto de erro
// const rejectedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNum = generateRandomNum();
//       reject (new Error(`O número ${randomNum} é inválido.`));
//     }, 1000);
//   });

//////////////////////////////////////////////////////////////////
// promise podendo ser resolvida se numero === par, e rejeitada caso !== par.
// const randomPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNum = generateRandomNum();
//       if (randomNum % 2 === 0) {
//         resolve(randomNum);
//       } else {
//         reject(new Error(`O número ${randomNum} não é válido.`))
//       }
//     }, 1000)
//   })

// randomPromise()
//   .then((result) => {
//     console.log(`Promise revolvida, o número é ${result}`);
//   })
//   .catch((error) => {
//     console.log(`Promise rejeitada, ${error.message}`);
//   })

////////////////////////////////////////////////////////////////////
// fetch //
 fetch('https://api.goprogram.ai/inspiration').then((response) => response.json()).then((data) => console.log(`${data.quote} | ${data.author}`));