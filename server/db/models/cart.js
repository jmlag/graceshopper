const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  lastUpdated: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  }
})

module.exports = Cart
