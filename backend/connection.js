const mongoose = require("mongoose");

const DB_URI = `mongodb+srv://saifakhtar023:eTXFpIqqxjpBnuvN@cluster0.zhnsi5e.mongodb.net/mern-user?retryWrites=true&w=majority`;
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("database connected");
  } catch (err) {
    console.log("connection failed" + err.message);
  }
};

module.exports = connectDB;
