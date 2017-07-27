const Sequelize = require("sequelize")
const db = require('../db')

const OrderHistory = db.define('orderHistory', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    // there is an automatic createAt field if that's relevant?
  },
  cost: {
    type: Sequelize.DOUBLE, 
    // should this be a required field?
  },
})

// see comment about storing money in packages model

module.exports = OrderHistory
