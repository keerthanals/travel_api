const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Ensure that process.env.MONGODB_URI is set
    console.log("MONGODB_URI from env:", process.env.MONGODB_URI);  // Debug line

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is undefined. Check environment variable.");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected successfully to travelApi in cloud");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

module.exports = { connectDB };
