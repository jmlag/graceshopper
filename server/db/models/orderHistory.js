const Sequelize = require("sequelize")
const db = require('../db')

const OrderHistory = db.define('orderHistory', {
  cost: {
    type: Sequelize.INTEGER,
  },
})

module.exports = OrderHistory
