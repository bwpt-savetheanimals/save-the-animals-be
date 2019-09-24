const express  = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// routes
const authRouter = require('../auth/auth.js')
const camRouter = require('../router-campaigns/campaign.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/users', authRouter);
server.use('/api/cams', camRouter);

//call routes

server.get('/', (req, res) => {
	res.send('<h2>Is it working?</h2>')
})

module.exports = server;