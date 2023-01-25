const { bookService } = require("../services");

const erro500mensagem = "Algo deu errado";
const erro404mensagem = "Book not found";

const getAll = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      const books = await bookService.getAll();
      return res.status(200).json(books);
    } else {
      const books = await bookService.getAll(q);
      return res.status(200).json(books);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Ocorreu um erro." });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getById(id);

    if (!book) return res.status(404).json({ message: erro404mensagem });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: erro500mensagem });
  }
};

const getByAuthor = async (req, res) => {
  try {
    const { q } = req.query;
    const books = await bookService.getByAuthor(q);

    if (!books) return res.status(404).json({ message: erro404mensagem });

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: erro500mensagem });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await bookService.createBook(title, author, pageQuantity);

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: erro500mensagem });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await bookService.updateBook(
      id,
      title,
      author,
      pageQuantity
    );

    if (!updatedBook) return res.status(404).json({ message: erro404mensagem });

    return res.status(200).json({ message: "Livro atualizado com sucesso!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: erro500mensagem });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await bookService.deleteBook(id);

    return res.status(200).json({ message: "Livro deletado com sucesso! " });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: erro500mensagem });
  }
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  createBook,
  updateBook,
  deleteBook,
};
