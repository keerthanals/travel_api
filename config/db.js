const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected successfully to travelApi in cloud");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};

module.exports = { connectDB };
