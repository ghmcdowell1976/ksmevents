const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//* how data from the contact list with be submitted into the database
const contactSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {type: String, required: true},
  subject: {type: String},
  message: {type: String}
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
