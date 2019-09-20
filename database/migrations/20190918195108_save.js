
exports.up = function(knex) {
  return knex.schema
  .createTable('locations', tbl => {
	  tbl.increments();
	  tbl.string('loc-name', 255).notNullable().unique();
  })
  .createTable('roles', tbl => {
		tbl.increments();
		tbl.string('role-name', 128).notNullable();
})
  .createTable('users', tbl => {
	  tbl.increments();
	  tbl.string('username', 128).notNullable().unique();
	  tbl.string('password', 30).notNullable();
	  tbl.integer('role-id', 128)
	  .notNullable().unsigned()
	  .references('id').inTable('roles')
	  .onUpdate('CASCASE').onDelete('CASCASE');
  })
	.createTable('campaigns', tbl => {
		tbl.increments();
		tbl.string('cam-name', 128).notNullable().unique();
		tbl.string('cam-description', 255);
		tbl.integer('cam-location-id', 128)
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
  })
};

exports.down = function(knex) {
  
};
