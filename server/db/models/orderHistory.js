const Sequelize = require("sequelize")
const db = require('../db')

const OrderHistory = db.define('orderHistory', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  cost: {
    type: Sequelize.DOUBLE,
  },
})

module.exports = OrderHistory
