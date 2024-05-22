const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log(process.env.DB_URL);
  mongoose.connect(process.env.DB_URL).then((data) => {
    console.log(`mongod connected with server : ${data.connection.host}`);
  }).catch((error) => {
    console.log("Here is error" + error);
  })
};

module.exports = connectDatabase;
