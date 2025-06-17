const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
// hathom tab3in l'auth
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware); // teba3 auth

router.post("/", bookController.addBook); // ken  librarian ya3malha
router.get("/", bookController.getAllBooks);
router.get("/search", bookController.searchByTheme);
router.get("/:reference_code", bookController.searchByReference);
router.delete("/:reference_code", bookController.deleteBook); //ken  librarian ya3malha

module.exports = router;
