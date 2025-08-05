const User = require('../models/User');

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: "✅ User saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "❌ Failed to save user", error: error.message });
  }
};

module.exports = { registerUser };
