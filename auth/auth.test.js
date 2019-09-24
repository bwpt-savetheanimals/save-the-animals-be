const server = require('../api/server.js');
const request = require('supertest');
const db = require('../database/dbConfig.js')

describe('auth router', () => {
	beforeEach( async() => {
		await db('users').truncate();
	})  

	describe('register a new user', () => {
		it('should return a new user with hash password', async () => {
			const user = {
				username: "test",
				password: "testpass"
			}

			request(server)
			.post('/api/users/register')
			.send(user)
			.then(res => {
				expect(res.status).toBe(201)
			})
		})

		it('should allow users to login and return a token', () => {
			const user = {
				username: "test",
				password: "testpass"
			}

			request(server)
			.post('/api/users/login')
			.send(user)
			.then(res => {
				expect(res.status).toBe(200)
			})
		})
	}) 
})
