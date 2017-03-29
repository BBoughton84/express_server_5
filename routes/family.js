const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('family')
    .then(result => {
      res.send(result)
    })
})

router.post('/new', (req, res) => {
  var newF = req.body.firstname
  var newL = req.body.lastname
  var newA = req.body.age
  knex('family').insert({firstname:newF, lastname:newL, age:newA}).returning(['id', 'lastname', 'firstname', 'age'])
    .then(result => {
      res.send(result)
    })
})

router.patch('/:id', (req, res) => {
  var changeId = req.params.id
  var changeF = req.body.firstname
  var changeL = req.body.lastname
  var changeA = req.body.age
  knex('family').where('id', changeId).update({firstname:changeF, lastname:changeL, age:changeA}).returning(['id', 'firstname', 'lastname', 'age'])
    .then(result => {
      res.send(result)
    })
})

router.delete('/:id', (req, res) => {
  var newId = req.params.id
  knex('family').where('id', newId).del()
    .then(result => {
      res.send(200)
    })
})

module.exports = router
