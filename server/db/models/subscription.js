const Sequelize = require('sequelize')
const db = require('../db')

const Subscription = db.define('subscription', {
  renewDay: {
    type: Sequelize.INTEGER,
    allowNull: false,
    // validations? assuming it's days of the month, should be 1-31
    // but this model might break months without 29, 30, and/or 31
  },
  cost: {
    type: Sequelize.DOUBLE, // same thing about money
    // should be required possibly?
  },
})

module.exports = Subscription
