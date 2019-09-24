const server = require('../api/server.js');
const request = require('supertest');

describe('campaign router', () => {

	xdescribe('get to /', () => {
		it('should return all campaigns', () => {
			return request(server)
			.get('/api/cams')
			.then(res => {
				expect(res.status).toBe(200)
			})
		})

		it('should return json', ()=> {
			return request(server)
			.get('/api/cams')
			.then(res => {
				expect(res.type).toBe('application/json')
			})
		})
	})

	xdescribe('get to /:id', () => {
		it('should return status 200 with JSON object', ()=> {
			return request(server)
			.get('/api/cams/1')
			.then(res => {
				expect(res.status).toBe(200);
				expect(res.type).toBe('application/json')
			})
		})
	})
})