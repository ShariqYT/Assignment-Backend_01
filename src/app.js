const express = require('express');
const connectDB = require('./config/db.config');
const userRoutes = require('./routes/userRoutes');
const addressRoutes = require('./routes/addressRoutes');

const app = express();
app.use(express.json());
connectDB();

app.use('/api', userRoutes);
app.use('/api', addressRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});