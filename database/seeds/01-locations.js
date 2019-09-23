
exports.seed = function(knex) {
	// Deletes ALL existing entries
  return knex('locations')
    .insert([
		{ 'loc_name': 'Amazon'},
		{ 'loc_name': 'Yellowstone National Park'},
		{ 'loc_name': 'Southeast Asia'},
		{ 'loc_name': 'World'}
  ]);
};
