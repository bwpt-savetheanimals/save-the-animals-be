
exports.seed = function(knex) {
	return knex('campaigns').insert([
		{admin_user_id: 1,
		cam_name: "Save the Sunda Pangolin",
		cam_description: 'Highly valued for their scales and meat.',
		cam_location_id: 3,
		cam_urgency: 'critical',
		cam_goal: 100000,
		cam_deadline: '2022-02-20',
		cam_goal_met: false
		},
		{admin_user_id: 1,
		cam_name: "Test 2",
		cam_description: 'Things',
		cam_location_id: 2,
		cam_urgency: 'not',
		cam_goal: 10,
		cam_deadline: '2022-02-20',
		cam_goal_met: false
		}
	]);
};
	