const express = require('express');
const bodyParser = require('body-parser');
const homepageRoutes = require("./routes/homepageRoutes.js");
const connectdb = require('./config/db.js'); // Adjusted import path
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = 4000;
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('starting the serverr');
});
connectdb(); // Connect to MongoDB
app.use("/api/homepage", homepageRoutes);
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
