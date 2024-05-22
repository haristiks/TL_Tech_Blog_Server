const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");
const TryCatch = require("../middlewares/tryCatchMiddleware");

router.post("/login", TryCatch(controller.Login));
router.get("/logout", TryCatch(controller.Logout));

module.exports = router;