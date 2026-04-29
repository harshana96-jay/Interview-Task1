const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// GET ALL PROPERTIES
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

// ADD PROPERTY
router.post("/", async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.json({ message: "Property added!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
