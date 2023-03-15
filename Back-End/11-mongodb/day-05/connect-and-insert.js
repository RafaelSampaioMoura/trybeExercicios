db = connect("mongodb://localhost:27017");

db.movies.updateOne({ title: "Batman" }, { $push: { category: "superhero" } });
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: { $each: ["villain", "comic-based"] } } }
);
db.movies.updateOne({ title: "Batman" }, { $pull: { category: ["action"] } });
db.movies.updateOne({ title: "Batman" }, { $pop: { category: -1 } });
db.movies.updateOne({ title: "Batman" }, { $pop: { category: 1 } });
db.movies.updateOne({ title: "Batman" }, { $addToSet: { category: "action" } });
db.movies.updateMany(
  { $or: [{ title: "Batman" }, { title: "Home Alone" }] },
  { $addToSet: { category: "90's" } }
);

db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      cast: {
        $each: [
          { actor: "Macaulay Culkin", character: "Kevin" },
          { actor: "Joe Pesci", character: "Harry" },
          { actor: "Daniel Stern" },
        ],
      },
    },
  }
);

db.movies.updateOne(
  { title: "Home Alone", "cast.actor": "Daniel Stern" },
  { $set: { "cast.$.character": "Marv" } }
);

db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      cast: {
        $each: [
          { character: "Batman" },
          { character: "Alfred" },
          { character: "Coringa" },
        ],
      },
    },
  }
);
db.movies.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $set: { "cast.$.actor": "Christian Bale" } }
);

db.movies.updateOne(
  { title: "Batman", "cast.character": "Alfred" },
  { $set: { "cast.$.actor": "Michael Caine" } }
);

db.movies.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  { $set: { "cast.$.actor": "Heath Ledger" } }
);

db.movies.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  {
    $set: {
      "cast.$actor": {
        $each: [
          {
            "cast.$.actor": ["Michael Keaton", "Val Kilmer", "George Clooney"],
          },
        ],
        $sort: 1,
      },
    },
  }
);
