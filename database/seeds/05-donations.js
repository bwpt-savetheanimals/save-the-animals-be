
exports.seed = function(knex) {
	return knex('donations').insert([
		{user_id: 1,
			cam_id: 1,
			don_amount: 10000},
		{user_id: 2,
			cam_id: 1,
			don_amount: 5000}
  ]);
};
