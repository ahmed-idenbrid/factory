const express = require("express");

const { adminController } = require("../controllers");

const router = express.Router();

router.post("/login", adminController.singnIn);

module.exports = router;