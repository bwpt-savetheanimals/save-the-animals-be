
exports.seed = function(knex) {
	return knex('campaign_animals').insert([
		{cam_id: 1, ani_id: 7}
	]);
};
