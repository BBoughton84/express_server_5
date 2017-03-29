const environment = process.env.NODE_URL || 'environment'
const config = require('../knexfile.js')[environment]
const knex = require('knex')(config)

module.exports = knex
