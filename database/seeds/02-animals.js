
exports.seed = function(knex) {
	return knex('animals').insert([
		{ 'ani_name': "Star-nosed Mole" }, 
		{ 'ani_name': "Platypus" }, 
		{ 'ani_name': "Chameleon" }, 
		{ 'ani_name': "Snail" },
		{ 'ani_name': "Blue-footed Booby" }, 
		{ 'ani_name': "Anteater" }, 
		{ 'ani_name': "Sunda pangolin" }, 
		{ 'ani_name': "Raccoon" },
		{ 'ani_name': 'Flamingo' },
		{ 'ani_name': 'Kookaburra' }
  ]);
};
