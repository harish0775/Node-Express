const mongoose = require("mongoose");

// task Schema

const formSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },

  lname: {
    type: String,
    required: true,
  }
});

const  form_Schema = mongoose.model("form", formSchema);

module.exports = form_Schema;



