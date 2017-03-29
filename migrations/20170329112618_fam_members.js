
exports.up = function(knex) {
      return knex.schema.createTable('family', f => {
        f.increments('id')
        f.string('firstname')
        f.string('lastname')
        f.integer('age')
      })
}

exports.down = function(knex) {
      return knex.schema.dropTableIfExists('family')
}
