import axios from "axios";

export default {
  // Gets all contacts
  getContacts: function() {
    return axios.get("/api/contacts");
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveContacts: function(contactData) {
    console.log("Api called", contactData);
    return axios.post("/api/contacts", contactData);

  }
};
