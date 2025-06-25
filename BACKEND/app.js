const express = require('express');
const cors = require('cors');
const connectDB= require('./models/feedback.js');
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());

connectDB();
app.use('/feedback', require('./routes/index.js'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));