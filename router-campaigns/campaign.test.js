const server = require('../api/server.js');
const request = require('supertest');
const cam = require('./campaign-model.js');
const db = require('../database/dbConfig.js');

describe('campaign router', () => {
	beforeEach( async () => {
		await db('campaigns').truncate();
	});

	describe('get to /', () => {
		it('should return all campaigns', () => {
			return request(server)
			.get('/')
			.then(res => {
				expect(res.status).toBe(200)
			})
		})
	})
})