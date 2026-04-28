import User from "../models/User.js";
import Loan from "../models/Loan.js";

const createUser = async (data) => {
  const { name, email, telephone, active } = data;

  if (!name || !email || !telephone || !active) {
    const error = new Error("Nome, email, telefone, senha e idade são obrigatórios");
    error.statusCode = 400;
    throw error;
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    const error = new Error("Já existe um usuário com esse email");
    error.statusCode = 400;
    throw error;
  }

  return User.create({ name, email, telephone, active});
};

const getAllUsers = async () => {
    return User.find();
};

const getUserById = async (id) => {
    const user = await User.findById(id);

    if(!user) {
        const error = new Error("Usuário não encontrado");
        error.statusCode = 404;
        throw error;
    }

    return user;
};

const updateUser = async (id, data) => {
  const user = await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    const error = new Error("Usuário não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return user;
};

const deactivateUserById = async (id, active) => {
  if (active === undefined)  {
    const error = new Error("O campo active é obrigatório");
    error.statusCode = 400;
    throw error;
  }

  return user;
};


export default {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deactivateUserById,
};