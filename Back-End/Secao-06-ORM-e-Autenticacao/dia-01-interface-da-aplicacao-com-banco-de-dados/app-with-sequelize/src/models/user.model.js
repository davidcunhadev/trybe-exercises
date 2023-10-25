// DEFININDO UM MODEL
// O que fazemos primeiro é criar um model que vai representar uma pessoa em nossa aplicação:
const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
})();

  return User;
};

// CRIANDO UM INSTANCIAS DE UM MODEL
// Uma forma mais simples de criar uma instância de um model e salvá-la no banco de dados é usando o método create:
const sara = await User.create({
  fullName: 'Sara Silva Santos',
  email: 'sara.ss@trybe.com',
});

console.log(sara instanceof User); // true
console.log(sara.name); // "Sara Silva Santos"


// MODIFICANDO INSTANCIAS DE UM MODEL
//Se você precisa atualizar ou excluir dados de um model, pode usar os métodos update:
// Modificando informações no banco de dados
const jane = await User.create({
  fullName: "Jane Doe",
  email: "jane.doe@trybe.com",
  });
  
  jane.email = "ada.doe@trybe.com";
  await jane.update({ fullName: "Ada Joe" });
  
  // O banco de dados agora tem "Ada Joe" para o nome, mas o email ainda é "jane.doe@trybe.com".
  
  await jane.save();
  // O banco de dados agora tem "ada.doe@trybe.com" para o email.


// EXCLUINDO INFORMAÇÕES DO BANCO DE DADOS
// Quando precisamos excluir um model do banco de dados, podemos usar o método destroy:
const mario = await User.create({ fullName: "Mario Bors" });

console.log(mario.fullName); // "Mario Bors"

await mario.destroy();

// Agora essa entrada não existe mais no banco de dados!

module.exports = UserModel;