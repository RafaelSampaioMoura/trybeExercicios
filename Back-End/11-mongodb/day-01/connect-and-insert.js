db = connect("mongodb://localhost:27017");

db.bios.find({ _id: 8 });
db.bios.find({ _id: 8 }, { _id: 1, name: 1 });
db.bios.find({ _id: 8 }, { name: 1, birth: 1 });
db.bios.find({ "name.first": "John" }).pretty();
db.bios.find().limit(3).pretty();
db.bios.find().skip(5).limit(2);
db.books.find().count();
db.books.find({ status: "PUBLISH" }).count();
db.books.find({}, { _id: 0, title: 1, isbn: 1, pageCount: 1 }).sort().limit(3);
db.books
  .find({ status: "MEAP" }, { title: 1, authors: 1, status: 1 })
  .skip(5)
  .limit(10);
