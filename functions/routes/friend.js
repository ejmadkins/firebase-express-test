const friendController = require("../controllers/friend");
const express = require("express");
const router = express.Router();

router.post("/", friendController.create);
router.get("/", friendController.read);

module.exports = router;
