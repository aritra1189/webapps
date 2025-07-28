//
const HomepageContent = require("../models/homepageContent"); // No .js extension needed for CommonJS

// Export individual functions by assigning them as properties of module.exports
exports.getHomepageContent = async (req, res) => {
  try {
    const content = await HomepageContent.findOne(); // Only one entry
    res.json(content);
  } catch (error) {
    console.error("Error fetching homepage content:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.updateHomepageContent = async (req, res) => {
  const { mainImage, mainDescription } = req.body;

  try {
    let content = await HomepageContent.findOne();
    if (content) {
      content.mainImage = mainImage;
      content.mainDescription = mainDescription;
      await content.save();
    } else {
      content = await HomepageContent.create({ mainImage, mainDescription });
    }
    res.json(content);
  } catch (error) {
    console.error("Error updating homepage content:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};