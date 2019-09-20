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

module.exports = server;