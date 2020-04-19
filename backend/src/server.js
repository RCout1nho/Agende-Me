const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./routes');

mongoose.connect('mongodb://ricardo:ricardo123@cluster0-shard-00-00-fkymt.gcp.mongodb.net:27017,cluster0-shard-00-01-fkymt.gcp.mongodb.net:27017,cluster0-shard-00-02-fkymt.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

const app = express();

const port = 3333;

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(port);