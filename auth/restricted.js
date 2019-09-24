module.exports = (req, res, next) => {
	const token = req.header.authorization;

	if(token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
			if(err) {
				res.status(401).json({ message: "They climbing in your window. Snatching your people up. Hide your kids, hide your wide, hide your password."})
			} else {
				res.decodedToken = decodedToken;
				next()
			}
		})
	} else {
		res.status(401).json({ question: "what is the flight speed of an unladen swallow?"})
	}
}