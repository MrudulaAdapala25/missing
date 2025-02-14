const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

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
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Server error" });
    }
};
