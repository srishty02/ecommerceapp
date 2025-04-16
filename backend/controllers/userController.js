// controllers/userController.js

import User from '../models/userModel.js';

// Register a new user
export const registerUser = async (req, res) => {
   try {
     const { name, email, password } = req.body;
 
     if (!name || !email || !password) {
       return res.status(400).json({ message: 'All fields are required' });
     }
 
     const existingUser = await User.findOne({ email });
     if (existingUser) {
       return res.status(400).json({ message: 'Email is already in use' });
     }
 
     const newUser = new User({ name, email, password });
     await newUser.save();
 
     res.status(201).json({ message: 'User registered successfully' });
   } catch (error) {
     console.error('Error in registerUser:', error); // Log the error for debugging
     res.status(500).json({ message: 'Server error occurred', error: error.message });
   }
};

// Login route (you can implement real auth later)
export const loginUser = (req, res) => {
  res.json({ message: "Login successful (stub)" });
};

// Admin login route
export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@example.com" && password === "admin123") {
    res.json({ success: true, token: "fake-admin-token" });
  } else {
    res.status(401).json({ success: false, message: "Invalid admin credentials" });
  }
};
