const router = require("express").Router();
const userController = require("../Controllers/userController");

router.post("/login", userController.login);

module.exports = router;
