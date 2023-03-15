db = connect("mongodb://localhost:27017");

db.movies.updateOne({ title: "Batman" }, { $push: { category: "superhero" } });
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: { $each: ["villain", "comic-based"] } } }
);
db.movies.updateOne({ title: "Batman" }, { $pull: { category: ["action"] } });
db.movies.updateOne({ title: "Batman" }, { $pop: { category: -1 } });
db.movies.updateOne({title: "Batman"}, {$pop: {category: 1}})