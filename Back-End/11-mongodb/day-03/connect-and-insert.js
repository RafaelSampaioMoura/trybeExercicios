db = connect("mongodb://localhost:27017");

db.movies.find({ category: { $all: ["action", "adventure"] } });
db.movies.find({
  $and: [
    { category: { $all: ["action", "sci-fi"] } },
    { imdbRating: { $gt: 7 } },
  ],
});
db.movies.find(
  { ratings: { $elemMatch: { $gt: 103 } } },
  { title: 1, ratings: 1 }
);
db.movies.find(
  { ratings: { $elemMatch: { $gte: 100, $lte: 105 } } },
  { title: 1, ratings: 1 }
);

db.movies.find(
  {
    $and: [
      { ratings: { $elemMatch: { $gte: 64, $lte: 105 } } },
      { ratings: { $mod: [9, 0] } },
    ],
  },
  { title: 1, ratings: 1 }
);

db.movies.find(
  {
    $and: [
      { category: "adventure" },
      { ratings: { $elemMatch: { $gt: 103 } } },
    ],
  },
  { title: 1, ratings: 1, category: 1 }
);

db.movies.find({ category: { $size: 2 } });
db.movies.find({ ratings: { $size: 4 } }, { title: 1 });
db.movies.find({
  $and: [{ budget: { $mod: [5, 0] } }, { category: { $size: 2 } }],
});

db.movies.find(
  {
    $or: [
      { category: { $in: ["sci-fi"] } },
      { rating: { $elemMatch: { $gt: 199 } } },
    ],
  },
  { _id: 0, title: 1, ratings: 1, category: 1 }
);

db.movies.find({
  $and: [
    { ratings: { $size: 4 } },
    { category: { $in: ["adventure", "family"] } },
    { imdbRating: { $not: { $lt: 7 } } },
  ],
});

db.movies.find({ description: { $regex: /^The/ } });
db.movies.find({ description: { $regex: /humanity.$/ } });
db.movies.find({ $expr: { $lt: ["budget", "grossWorldwide"] } });
