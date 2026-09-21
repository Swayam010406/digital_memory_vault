require("dotenv").config();
console.log(process.env.MONGO_URI);
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const dot =require ("dotenv");
const authRoutes = require("./routes/authRoutes");

const memoryRoutes = require("./routes/memoryRoutes");
const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/memories", memoryRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Digital Memory Vault Backend is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});