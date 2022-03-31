const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Ayaz_Ahmad:AYAZisLUCKY@cluster0.sxbry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};