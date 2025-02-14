const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/user-api', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ message: 'Server Error' });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
