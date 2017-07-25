const Sequelize = require('sequelize')
const db = require('../db')

const Package = db.define('package', {
  name: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DOUBLE,
  },
  description: {
    type: Sequelize.TEXT,
  }
})

module.exports = Package
