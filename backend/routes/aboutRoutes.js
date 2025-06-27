const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutController");

router.get("/", aboutController.getAll);
router.post("/", aboutController.create);
router.put("/:id", aboutController.update);
router.delete("/:id", aboutController.delete);

module.exports = router;
