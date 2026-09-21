const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addMemory,
  getMemories,
  getMemoryById,
  updateMemory,
  deleteMemory,
} = require("../controllers/memoryController");

// Add Memory
router.post("/", protect, addMemory);

// Get All Memories
router.get("/", protect, getMemories);

// Get Single Memory
router.get("/:id", protect, getMemoryById);

// Update Memory
router.put("/:id", protect, updateMemory);

// Delete Memory
router.delete("/:id", protect, deleteMemory);

module.exports = router;