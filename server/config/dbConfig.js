const mongoose = require("mongoose");
require("dotenv").config({ path: "server/.env" });
console.log(process.env.MONGO_URL);
// mongoose.connect(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Success");
});

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = connection;
