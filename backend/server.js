console.log("RUNNING BACKEND FROM:", __dirname);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/properties?directConnection=true")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));

// Load routes
const propertyRoutes = require("./routes/propertyRoutes");
app.use("/api/properties", propertyRoutes);

// Start server
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
