const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const AuthDB = require('./auth-model.js');
const restricted = require('./restricted.js');

router.post('/register', async (req, res) => {
	const userInfo  = req.body

	try {
		userInfo.password = bcrypt.hashSync(userInfo.password, 15);

		const newUser = await AuthDB.add(userInfo)
		const token = generateToken(newUser)

		res.status(201).json({
			new_user: newUser,
			token
		})
	} catch(err) {		
		res.status(500).json({ error: "something isnt working right", err })
	}
})

router.post('/login', async (req, res) => {
	const { username, password } = req.body

	try {
		const user = await AuthDB.getBy({ username })

		if(user && bcrypt.compareSync(password, user.password)) {
			const token = generateToken(user)
			res.status(200).json({ message: `welcome ${user.username}`, token })
		} else {
			res.status(401).json({ error: "invalid credentials" })
		}
	} catch(err) {		
		res.status(500).json({ error: "something is loose", err})
	}
})

router.get('/', restricted, async (req, res) => {
	try {
		const listAllUsers = await AuthDB.findAll();
		
		res.status(200).json({listAllUsers})
	} catch(err) {
		
		res.status(500).json({ error: "beep boop bop", err })
	}
})

function generateToken(user) {
	const payload = {
		sub: user.id,
		username: user.username
	}

	const options = {
		expiresIn: "8h"
	}

	return jwt.sign(payload, process.env.JWT_SECRET, options)
}

module.exports = router
