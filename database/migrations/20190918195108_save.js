
exports.up = function(knex) {
  return knex.schema
  .createTable('locations', tbl => {
	  tbl.increments();
	  tbl.string('loc-name', 255).notNullable().unique();
  })
  .createTable('users', tbl => {
		tbl.increments();
		tbl.string('username', 128).notNullable().unique();
		tbl.string('password', 30).notNullable();
  })
	.createTable('campaigns', tbl => {
		tbl.increments();
		tbl.integer('admin-user-id')
			.notNullable().unsigned()
			.references('id').inTable('users')
			.onDelete('CASCADE').onUpdate('CASCASE');
		tbl.string('cam-name', 128).notNullable().unique();
		tbl.string('cam-description', 255);
		tbl.integer('cam-location-id')
			.notNullable().unsigned()
			.references('id').inTable('locations')
			.onDelete('CASCADE').onUpdate('CASCASE');
		tbl.string('cam-urgency', 128).notNullable();
		tbl.integer('cam-goal').unsigned().notNullable();
		tbl.date('cam-deadline').notNullable()
		tbl.timestamps([useTimestamps], [defaultToNow])
  })
  .createTable('donations', tbl => {
		tbl.increments();
		tbl.integer('user-id')
			.unsigned().notNullable()
			.references('id').inTable('users')
			.onDelete('CASCADE').onUpdate('CASCASE')
		tbl.integer('cam-id')
			.unsigned().notNullable()
			.references('id').inTable('campaigns')
			.onDelete('CASCADE').onUpdate('CASCADE')
		tbl.integer('don-amount').unsigned().notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
	.dropTableIfExists('donations')
	.dropTableIfExists('campaigns')
	.dropTableIfExists('users')
	.dropTableIfExists('locations')
};
