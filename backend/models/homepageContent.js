// backend/models/HomepageContent.js (CommonJS Module)
const mongoose = require("mongoose"); // Use require for imports

const homepageContentSchema = new mongoose.Schema({
  mainImage: { type: String, required: true }, // URL or file path
  mainDescription: { type: String, required: true },
});

// Use module.exports to expose the model
module.exports = mongoose.model("HomepageContent", homepageContentSchema);

