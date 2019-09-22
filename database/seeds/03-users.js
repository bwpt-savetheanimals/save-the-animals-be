
exports.seed = function(knex, Promise) {
	return knex('users').insert([
		{ 'username': "Sunda", 'password': 'pass1' },
		{ username: "Plat", 'password': 'pass2' }, 
		{ username: "Cham", 'password': 'pass3' }, 
  ]);
};
