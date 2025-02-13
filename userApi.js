const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const authMiddleware = require("../middleware/authMiddleware");
const userApp = express.Router();

// Route to create a new user
userApp.post("/user", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 7);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Route to update an existing user
userApp.put("/user/:id", authMiddleware, async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email, password } = req.body;

        if (!username && !email && !password) {
            return res.status(400).json({ message: "At least one field is required for update" });
        }

        const modifiedUser = {};
        if (username) modifiedUser.username = username;
        if (email) modifiedUser.email = email;
        if (password) modifiedUser.password = await bcrypt.hash(password, 7);

        const updatedUser = await User.updateOne({ _id: userId }, { $set: modifiedUser });
        if (!updatedUser.nModified) {
            return res.status(404).json({ message: "User not found or not modified" });
        }

        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Route to delete a user
userApp.delete("/user/:id", authMiddleware, async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.deleteOne({ _id: userId });

        if (!deletedUser.deletedCount) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = userApp;
