db = connect("mongodb://localhost:27017");

db.superheroes.find({ "aspects.height": { $lt: 180 } });
db.superheroes.find({ "aspects.height": { $lte: 180 } }).count();
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });
db.superheroes.find({ "aspects.height": { $gte: 200 } }).count();
db.superheroes.find({ "aspects.eyeColor": "green" });
db.superheroes.find({ "aspects.eyeColor": "blue" }).count();
db.superheroes.find({ "aspects.hairColor": { $in: ["black", "no hair"] } });
db.superheroes
  .find({ "aspects.hairColor": { $in: ["black", "no hair"] } })
  .count();
db.superheroes
  .find({ "aspects.hairColor": { $nin: ["black", "no hair"] } })
  .count();
db.superheroes.find({ "aspects.height": { $not: { $gt: 180 } } }).count();
db.superheroes.find({
  race: { $not: /Human/ },
  "aspects.height": { $not: { $gt: 180 } },
});
db.superheroes.find({
  "aspects.height": { $in: [180, 200] },
  publisher: "Marvel Comics",
});
db.superheroes.find({
  $and: [
    { "aspects.height": { $gte: 180 } },
    { "aspects.height": { $lte: 200 } },
    { publisher: { $not: /DC Comics/ } },
  ],
});
db.superheroes.find({ race: null });
db.superheroes.find({ "aspects.hairColor": { $exists: true } });
db.superheroes.deleteOne({ publisher: "Sony Pictures" });
db.superheroes.deleteMany({ publisher: "George Lucas" });
