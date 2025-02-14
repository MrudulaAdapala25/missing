const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Mrudula:Mrudula001@cluster0.ebbtlyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
    mongoose.connection.close(); // Close connection after test
  })
  .catch(err => {
    console.error("MongoDB connection error: ", err);
  });
