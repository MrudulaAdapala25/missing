const express = require('express');
const { registerUser, loginUser } = require('../contollers/authController');
const router = express.Router();

// Registration route
router.post('/user', registerUser);

// Login route
router.post('/login', loginUser);

module.exports = router;
