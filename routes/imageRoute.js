const express = require("express");
const router = express.Router();

// Controllers
const imageController = require("../controllers/imageController");

router.route("/").get(imageController.getAllImages);

router.route("/:id").get(imageController.getImage);

module.exports = router;
