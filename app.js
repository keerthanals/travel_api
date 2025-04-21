const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const planRoutes = require('./routes/planRoutes');


dotenv.config();
const app = express();
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/', planRoutes);

const PORT =2000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
