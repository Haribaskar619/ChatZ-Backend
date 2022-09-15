const express = require("express");
const userController = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(userController.registerUser).get(protect,userController.allUsers);
router.post("/login",userController.authUser);

module.exports = router;