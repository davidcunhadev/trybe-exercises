const UserService = require('../services/user.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

/* Esta função usa o método findOne do Sequelize combinado 
com a chave where para buscar por id e email. 
Equivale a fazer a query: SELECT * FROM Users WHERE id=? AND email=? */
const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });

  return user;
};

/* Esta função usa o método create do Sequelize para inserir um objeto na tabela Users
Equivale a fazer a query: INSERT INTO Users (full_name, email) VALUES (?, ?) */
const createUser = async (fullName, email) => {
  const newUser = await User.create({ fullName, email });

  return newUser;
};

/* Esta função usa o método update do Sequelize para atualizar um objeto na tabela Users
Equivale a fazer a query: UPDATE Users SET full_name=?, email=? WHERE id=?*/
const updateUser = async (id, fullName, email) => {
  const [updatedUser] = await User.update(
    { fullName, email },
    { where: { id } },
  );

  return updatedUser;
};

/* Esta função usa o método destroy do Sequelize para remover um objeto na tabela Users
Equivale a fazer a query: DELETE FROM Users WHERE id=?*/
const deleteUser = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );

  return user;
};

module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  createUser,
  updateUser,
  deleteUser,
};