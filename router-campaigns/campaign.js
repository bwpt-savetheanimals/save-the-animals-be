const express = require('express');
const router = express.Router();
const CamDB = require('./campaign-model.js');
const jwt = require('jsonwebtoken');
const restricted = require('../auth/restricted.js')

// GET to '/api/cams/'
router.get('/', async (req, res) => {
	try {
		const campaigns = await CamDB.getAll()
		res.status(200).json({campaigns})
	} catch(err) {
		res.status(500).json({ error: "something is not right here", err})
	}
})

router.get('/:id', async (req, res) => {
	const id = req.params.id
	try {
		const camp = await CamDB.getById(id)
		const dons = await CamDB.getDonById(id)
		res.status(200).json({campaign: camp, donations: dons})
	} catch(err) {
		res.status(500).json({ error: "something isnt working here...", err})
	}
})

module.exports = router;