const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const processRoute = require('./routes/process');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/process', processRoute);
app.use(express.static('outputs')); // Serve gif files

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
