
exports.seed = function(knex, Promise) {
  return knex('family').del()
    .then(function () {
      return knex('family').insert([
        {
          firstname: 'Bill',
          lastname: 'Boughton',
          age: 60
        },
        {
          firstname: 'Mary',
          lastname: 'Boughton',
          age: 57
        },
        {
          firstname: 'Kyle',
          lastname: 'Boughton',
          age: 28
        },
        {
          firstname: 'Kari',
          lastname: 'Boughton',
          age: 25
        },
        {
          firstname: 'Kevin',
          lastname: 'Murphy',
          age: 60
        },
        {
          firstname: 'Peggy',
          lastname: 'Murphy',
          age: 60
        },
        {
          firstname: 'Molly',
          lastname: 'Murphy',
          age: 34
        },
        {
          firstname: 'John',
          lastname: 'Murphy',
          age: 28
        }
      ])
    })
}
