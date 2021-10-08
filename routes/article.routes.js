const express = require("express");

const { articleController } = require("../controllers");

const router = express.Router();

router.post("/create", articleController.create);
router.get("/findAll", articleController.findAll);
router.get("/findOne/:userId", articleController.findOne);
router.get("/findSingle/:userId", articleController.findSingle);
router.put("/update/:articleId", articleController.update);
router.delete("/delete/:articleId", articleController.purge);

module.exports = router;
