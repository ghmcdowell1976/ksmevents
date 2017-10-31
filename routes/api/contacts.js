const router = require("express").Router();
const contactController = require("../../controllers/contactController");

// Matches with "/api/contacts"
router.route("/Contact")
  .get(contactController.findAll)
  .post(contactController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
