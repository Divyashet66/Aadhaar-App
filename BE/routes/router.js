const express = require("express");
const router = express.Router();
const { create } = require("../controllers/create");
const { login } = require("../controllers/login");

router.post("/create", create);
router.post("/login", login);

module.exports = router;
