const server = require('./server.js');
const request = require('supertest');

describe('the server', () => {
	it('should be in the test enviroment', () => {
		expect(process.env.DB_ENV).toBe('testing');
	})

	it('should have have a base get route', () => {
		return request(server).get('/').then(res => {
			expect(res.type).toBe('text/html')
		})
	})
})