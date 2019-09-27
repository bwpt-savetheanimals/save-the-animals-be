const db = require('../database/dbConfig.js');

module.exports = {
	getAll,
	getById,
	getDonById,
	postNew,
	postDonation,
	PutById,
	DeleteById
}

async function getAll() {
	return db('campaigns as c')
	.join('locations as l', 'l.id', 'c.cam_location_id')
	.join('campaign_animals as ca', 'ca.cam_id', 'c.id')
	.join('animals as a', 'a.id', 'ca.ani_id')
	.select('c.id', 'cam_name', 'a.ani_name', 'l.loc_name', 'cam_urgency', 'cam_deadline', 'cam_goal_met')
}

async function getById(id) {
	return db('campaigns as c').where('c.id', id)
	.join('locations as l', 'l.id', 'c.cam_location_id')
	.join('campaign_animals as ca', 'ca.cam_id', 'c.id')
	.join('animals as a', 'a.id', 'ca.ani_id')
	.select('c.id', 'a.ani_name', 'c.cam_name', 'c.cam_description', 'l.loc_name', 'c.cam_urgency', 'c.cam_goal', 'c.cam_deadline', 'c.cam_goal_met').first()
}

async function getDonById(id) {
	return db('donations as d').where('cam_id', id)
	.join('users as u', 'd.user_id', 'u.id')
	.select('u.username', 'd.don_amount')
}

async function postNew(campaign) { 
	return db('campaigns').insert(campaign)
	.then(ids => {
		return getById(ids[0])
	})
}

async function postDonation(donation) {
	return db('donations').insert(donation).then(res => {
		return getDonById(donation.cam_id)
	})
}

async function PutById(updates) {
	return db('campaigns')
	.where('id', req.params.id)
	.insert(updates)
}

async function DeleteById(id) {
	return db('campaigns')
	.where('id', req.params.id)
	.del()
	.then(res => {
		return getAll()
	})
}