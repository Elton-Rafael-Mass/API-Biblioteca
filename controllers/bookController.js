import bookService from "../services/bookService.js";

const createBook = async (req, res, next) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const getAllBook = async (req, res, next) => {
  try {
    const book = await bookService.getAllBook();
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export default {
  createBook,
  getAllBook,
};