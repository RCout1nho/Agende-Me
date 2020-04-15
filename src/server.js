const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./routes');

mongoose.connect('mongodb+srv://ricardo:ricardo123@cluster0-fkymt.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333, () => {
  console.log("🚀 Backend started!")
});