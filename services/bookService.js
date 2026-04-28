import Book from "../models/Book.js";
import Loan from "../models/Loan.js";

const createBook = async (data) => {
    const { title, author, category, year, totalQuantity, availableQuantity, active } = data;
  
    if (!title || !author || !category || !year || !totalQuantity || !availableQuantity || !active) {
      const error = new Error("Titulo, autor, ano, quantidade total, quantidade disponível e status obrigatórios");
      error.statusCode = 400;
      throw error;
    }
  
    return Book.create({ title, author, category, year, totalQuantity, availableQuantity, active});
  };

  const getAllBook = async () => {
    return Book.find();
  };

export default {
    createBook,
    getAllBook,

};


