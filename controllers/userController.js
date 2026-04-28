import userService from "../services/userService.js";

const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const deactivateUserById = async (req, res, next) => {
  try {
    const user = await userService.deactivateUserById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};


export default {
   createUser,
   getAllUsers,
   getUserById,
   updateUser,
   deactivateUserById,
};

