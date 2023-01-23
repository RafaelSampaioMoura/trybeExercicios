const { bookService } = require("../services");

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Ocorreu um erro." });
  }
};

module.exports = {
  getAll,
};
