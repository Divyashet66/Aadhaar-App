const express = require("express");
const router = express.Router();
const { create } = require("../controllers/create");

router.post("/create", create);

module.exports = router;
