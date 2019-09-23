
exports.seed = function(knex) {
	return knex('donations').insert([
		{user_id: 1,
			cam_id: 1,
			don_amount: 10000},
  ]);
};
