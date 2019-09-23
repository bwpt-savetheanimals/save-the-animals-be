const db = require('../database/dbConfig.js');

module.exports = {
	getAll,
	getById,
	PostNew,
	PutById,
	DeleteById
}

async function getAll() {
	return db('campaigns as c')
	.join('locations as l', 'l.id', 'c.cam_location_id')
	.select('c.id', 'cam_name', 'l.loc_name', 'cam_urgency', 'cam_deadline', 'cam_goal_met')
}

async function getById(id) {
	return db('campaigns').where('id', req.params.id)
	.join('locations', 'locations.id', 'loc_id')
	.join('donations', 'donations.cam_id', 'id')
	.join('users', 'donations.user_id', 'users.id')
	.select('id', 'cam_name', 'cam_description', 'locations.loc_name', 'cam_urgency', 'cam_goal', 'cam_deadline', 'cam_goal_met', 'users.username', 'donations.don_amount')
}

async function PostNew(campaign) { 
	return db('campaigns').insert(campaign)
	.then(ids => {
		return getById(ids[0])
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