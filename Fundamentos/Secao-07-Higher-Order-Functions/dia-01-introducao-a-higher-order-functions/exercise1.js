//Exercicio 1//
const newEmployees = () => {
  const employees = {
    id1: generateEmployee('Pedro Guerra'), 
    id2: generateEmployee('Luiza Drumond'),
    id3: generateEmployee('Carla Paiva'),  
  }
  return employees;
};

const generateEmployee = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return {nomeCompleto, email: `${email}@trybe.com`};
}