const Memory = require("../models/memory");

// Add Memory
const addMemory = async (req, res) => {
  try {
    const { title, description, category, image, date } = req.body;

    const memory = await Memory.create({
      title,
      description,
      category,
      image,
      date,
      user: req.user.id,
    });

    res.status(201).json(memory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Memories
const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.status(200).json(memories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Memory
const getMemoryById = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ message: "Memory not found" });
    }

    res.status(200).json(memory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Memory
const updateMemory = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ message: "Memory not found" });
    }

    const updatedMemory = await Memory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedMemory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Memory
const deleteMemory = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ message: "Memory not found" });
    }

    await Memory.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Memory deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addMemory,
  getMemories,
  getMemoryById,
  updateMemory,
  deleteMemory,
};