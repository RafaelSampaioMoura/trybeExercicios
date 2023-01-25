const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");

const BookModel = require("../../../models/book.model");

describe("O model de Book", () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', () => {
    checkModelName(User)("Book");
  });

  describe('possui as propriedades "fullName" e "email"', () => {
    ["title", "author", "pageQuantity", "publisher"].forEach(checkPropertyExists(user));
  });
});
