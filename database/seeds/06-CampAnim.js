
exports.seed = function(knex) {
	return knex('campaign_animals').insert([
		{cam_id: 1, ani_id: 7},
		{cam_id: 2, ani_id: 8}
	]);
};
