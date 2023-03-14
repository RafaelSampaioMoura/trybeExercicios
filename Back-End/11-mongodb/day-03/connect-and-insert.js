db = connect("mongodb://localhost/cinema");

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

db.movies.find({category: {$size: 2}});