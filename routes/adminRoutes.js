const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware); // auth

router.get("/users", adminController.getAllUsers); // afichage eli fil base il kol
router.post("/users", adminController.createUser); // neveau user
router.put("/users/:id", adminController.updateUser); // modification
router.delete("/users/:id", adminController.deleteUser); // supp

module.exports = router;
