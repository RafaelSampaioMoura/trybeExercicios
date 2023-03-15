db = connect("mongodb://localhost/cinema");

db.movies.insertMany([
  {
    title: "Batman",
    category: ["action", "adventure"],
    imdbRating: 7.6,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: ["action", "adventure", "sci-fi"],
    imdbRating: 6.6,
  },
  { title: "Home Alone", category: ["family", "comedy"], imdbRating: 7.4 },
]);

db.movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 7.7 } });
db.movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 } });
db.movies.updateOne(
  { title: "Home Alone" },
  { $set: { budget: 15, imdbRating: 5.5 } }
);
db.movies.updateOne({ title: "Batman" }, { $inc: { imdbRating: 2 } });
db.movies.updateOne({ title: "Home Alone" }, { $inc: { imdbRating: 4 } });
db.movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 4 } });
db.movies.updateOne(
  { title: "Batman" },
  { $rename: { budget: "estimatedBudget" } }
);
db.movies.updateOne({ title: "Home Alone" }, { $min: { budget: 5 } });
db.movie.updateOne(
  { title: "Godzilla" },
  { $max: { imdbRating: 8.6 }, $set: { "category.1": "thriller" } }
);
db.movies.updateOne(
  { title: "Home Alone" },
  { $currentDate: { lastUpdated: { $type: "timestamp" } } }
);
db.movies.updateMany({}, { $set: { sequel: 0 } });
db.movies.aggregate({ $unset: ["budget", "estimatedBudget"] });
db.movies.updateMany(
  { $or: [{ title: "Batman" }, { title: "Home Alone" }] },
  { $max: { imdbRating: 17 } }
);
