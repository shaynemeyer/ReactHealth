// app starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors'); // https://www.npmjs.com/package/cors

// DB Setup
mongoose.connect('mongodb://localhost:auth/ReactHealth');

// app setup
app.use(morgan('combined')); // logging requests
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.PORT || 3030;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on ' + port);