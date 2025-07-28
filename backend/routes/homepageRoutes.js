// backend/routes/homepageRoutes.js (CommonJS Module)

const express = require("express"); // Use require for express
// Use require for the controller, and destructure the exported functions
const { getHomepageContent, updateHomepageContent } = require("../controllers/homepageController");

const router = express.Router();

router.get("/", getHomepageContent);
router.post("/update", updateHomepageContent); // Assuming '/update' is the POST endpoint

module.exports = router; // Use module.exports for the default export