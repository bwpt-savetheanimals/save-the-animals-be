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

router.post('/', restricted, async (req, res) => {
	const camp = req.body
	if(camp) {
		try{
			const newCam = await CamDB.postNew(camp);
			res.status(200).json(newCam);
		} catch(err) {
			res.status(500).json({ message: "server error adding info"})
		}
	} else {
		res.status(500).json({ message: "missing info needed."})
	}
})

router.get('/:id', async (req, res) => {
	const id = req.params.id
	try {
		const camp = await CamDB.getById(id)
		const dons = await CamDB.getDonById(id)
		res.status(200).json({campaign: camp, donations: dons})
	} catch(err) {
		console.log(err);
		
		res.status(500).json({ error: "something isnt working here...", err})
	}
})

router.post('/:id', restricted, async (req, res) => {
	const newDonation = req.body
	try {
		const updatedCam = await CamDB.postDonation(newDonation);
		res.status(200).json({ donations: updatedCam })
	} catch(err) {
		
		res.status(500).json({ error: "I could be wrong, but something isnt working right."})
	}
})

//create edit and delete

module.exports = router;