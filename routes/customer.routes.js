const express = require("express");

const { customerController } = require("../controllers");

const router = express.Router();

router.post("/create", customerController.create);
router.get("/findAll", customerController.findAll);
router.get("/findOne/:customerId", customerController.findOne);
router.put("/update/:customerId", customerController.update);
router.delete("/delete/:customerId", customerController.purge);

module.exports = router;
