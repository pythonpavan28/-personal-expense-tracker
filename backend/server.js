const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require("./routes/userRoutes")
const transactionRoutes = require('./routes/transactionRoutes');
const categoryRoutes = require('./routes/categoryRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Connecting to MongoDB
connectDB();


app.use(express.json());

// Routes
app.use('/api/user',userRoutes)
app.use('/api', transactionRoutes);
app.use('/api', categoryRoutes);



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
