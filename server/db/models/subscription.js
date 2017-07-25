const Sequelize = require('sequelize')
const db = require('../db')

const Subscription = db.define('subscription', {
  renewDay: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cost: {
    type: Sequelize.DOUBLE,
  },
})

module.exports = Subscription
