const express = require("express");

const { notificationController } = require("../controllers");

const router = express.Router();

router.get("/findAll", notificationController.findAll);
router.get("/findOne", notificationController.findOne);


module.exports = router;
