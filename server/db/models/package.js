const Sequelize = require('sequelize')
const db = require('../db')

const Package = db.define('package', {
  name: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.TEXT,
  }
})

module.exports = Package
