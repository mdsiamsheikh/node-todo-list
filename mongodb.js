const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://siam:667788@cluster0.wj8tlti.mongodb.net/?retryWrites=true&w=majority";
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const client = new MongoClient(url, mongoOptions);

module.exports = client;
