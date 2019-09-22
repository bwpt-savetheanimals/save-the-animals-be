
exports.up = function(knex) {
  return knex.schema
  .createTable('locations', tbl => {
	  tbl.increments();
	  tbl.string('loc_name', 255).notNullable().unique();
  })
  .createTable('animals', tbl => {
	tbl.increments();
	tbl.string('ani_name', 128).notNullable().unique();
})
  .createTable('users', tbl => {
		tbl.increments();
		tbl.string('username', 128).notNullable().unique();
		tbl.string('password', 30).notNullable();
  })
	.createTable('campaigns', tbl => {
		tbl.increments();
		tbl.integer('admin_user_id')
			.notNullable().unsigned()
			.references('id').inTable('users')
			.onDelete('CASCADE').onUpdate('CASCADE');
		tbl.string('cam_name', 128).notNullable().unique();
		tbl.string('cam_description', 255);
		tbl.integer('cam_location_id')
			.notNullable().unsigned()
			.references('id').inTable('locations')
			.onDelete('CASCADE').onUpdate('CASCADE');
		tbl.string('cam_urgency', 128).notNullable();
		tbl.integer('cam_goal').unsigned().notNullable();
		tbl.date('cam_deadline').notNullable(); //YYYY-MM-DD
		tbl.boolean('cam_goal_met').defaultTo(0);
		tbl.timestamps(true, true)
  })
  .createTable('donations', tbl => {
		tbl.increments();
		tbl.integer('user_id')
			.unsigned().notNullable()
			.references('id').inTable('users')
			.onDelete('CASCADE').onUpdate('CASCADE')
		tbl.integer('cam_id')
			.unsigned().notNullable()
			.references('id').inTable('campaigns')
			.onDelete('CASCADE').onUpdate('CASCADE')
		tbl.integer('don_amount').unsigned().notNullable()
  })
  .createTable('campaign_animals', tbl => {
		tbl.integer('cam_id')
			.notNullable().unsigned()
			.references('id').inTable('campaigns')
			.onDelete('CASCADE').onUpdate('CASCADE');
		tbl.integer('ani_id')
			.notNullable().unsigned()
			.references('id').inTable('animals')
			.onDelete('CASCADE').onUpdate('CASCADE');
		tbl.primary(['cam_id', 'ani_id'])
	})
};

exports.down = function(knex) {
  return knex.schema
	.dropTableIfExists('campaign_animals')
	.dropTableIfExists('donations')
	.dropTableIfExists('campaigns')
	.dropTableIfExists('users')
	.dropTableIfExists('animals')
	.dropTableIfExists('locations')
};
