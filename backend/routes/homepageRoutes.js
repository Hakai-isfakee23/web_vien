const express = require("express");
const router = express.Router();
const homepageController = require("../controllers/homepageController");

// Banner
router.get("/banner", homepageController.getBanner);
router.put("/banner", homepageController.updateBanner);

// Units
router.get("/units", homepageController.getUnits);
router.post("/units", homepageController.createUnit);
router.put("/units/:id", homepageController.updateUnit);
router.delete("/units/:id", homepageController.deleteUnit);

module.exports = router;
