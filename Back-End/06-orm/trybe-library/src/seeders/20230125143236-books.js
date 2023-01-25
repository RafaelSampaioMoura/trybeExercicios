"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Sorcerer's Apprentice",
          author: "Tahir Shah",
          pageQuantity: 323,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          publisher: "LOLBooks",
        },
        {
          title: "The Poetic Edda: Stories of the Norse Gods and Heroes",
          author: "Jackson Crawford",
          pageQuantity: 390,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          publisher: "LOLBooks",
        },
        {
          title: "The Lies of Locke Lamora",
          author: "Scott Lynch",
          pageQuantity: 752,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          publisher: "LOLBooks",
        },
        {
          title: "The Shadow of the Gods",
          author: "John Gwynne",
          pageQuantity: 480,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          publisher: "LOLBooks",
        },
      ],
      {}
    ),

  down: async (queryInterface, _Sequelize) =>
    queryInterface.bulkDelete("Books", null, {}),
};
