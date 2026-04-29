console.log("RUNNING BACKEND FROM:", __dirname);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));

// Load routes
const propertyRoutes = require("./routes/propertyRoutes");
app.use("/api/properties", propertyRoutes);

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend running on http://localhost:${process.env.PORT || 5000}`);
});
