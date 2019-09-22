const express  = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// routes

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//call routes

server.get('/', (req, res) => {
	res.send('<h2>Is it working?</h2>')
})

module.exports = server;