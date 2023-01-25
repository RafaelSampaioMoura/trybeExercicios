const { Book } = require("../models");

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
  });

  // console.log(author);
  // console.log(books);

  const booksAlphabeticalOrder = books.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return booksAlphabeticalOrder;
};

const getAll = async (author) => {
  if (!author) {
    const books = await Book.findAll();
    const booksAlphabeticalOrder = books.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    return booksAlphabeticalOrder;
  } else {
    const books = await getByAuthor(author);
    return books;
  }
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const createBook = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
};

const updateBook = async (id, title, author, pageQuantity, publisher) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } }
  );

  console.log(updatedBook);
  return updatedBook;
};

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id } });

  console.log(book);
  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
  getByAuthor,
};
