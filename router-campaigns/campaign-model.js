const db = require('../database/dbConfig.js');

module.exports = {
	getAll,
	getById,
	PostNew,
	PutById,
	DeleteById
}

async function getAll() {
	return db('campaigns')
	.join('locations', 'locations.id', 'loc-id')
	.select('id', 'cam-name', 'locations.loc-name', 'cam-urgency', 'cam-deadline', 'cam-goal-met')
}

async function getById(id) {
	return db('campaigns').where('id', req.params.id)
	.join('locations', 'locations.id', 'loc-id')
	.join('donations', 'donations.cam-id', 'id')
	.join('users', 'donations.user-id', 'users.id')
	.select('id', 'cam-name', 'cam-description', 'locations.loc-name', 'cam-urgency', 'cam-goal', 'cam-deadline', 'cam-goal-met', 'users.username', 'donations.don-amount')
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