const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loanController");
// hathom tab3in l'auth
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router.post("/borrow", loanController.borrowBook); // tasna3 emprunt
router.put("/return/:reference_code", loanController.returnBook); // traga3 il kteb
router.get("/overdue", loanController.getOverdueLoans);
router.get("/user/:userId", loanController.getLoansByUser);

module.exports = router;
