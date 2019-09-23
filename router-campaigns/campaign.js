const express = require('express');
const router = express.Router();
const CamDB = require('./campaign-model.js');

// GET to '/api/cams/'
router.get('/', async (req, res) => {
	try {
		const campaigns = await CamDB.getAll()
		console.log(campaigns);
		res.status(200).json({campaigns})
	} catch(err) {
		console.log(err);
		res.status(500).json({ error: "something is not right here", err})
	}
})

module.exports = router;