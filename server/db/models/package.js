const Sequelize = require('sequelize')
const db = require('../db')

// I feel as though _something_ in this model should be required, no?
const Package = db.define('package', {
  name: {
    type: Sequelize.STRING,
    // maybe this should be required
  },
  image: { // maybe "imageUrl" is a better naming scheme
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DOUBLE, // https://www.noelherrick.com/blog/always-use-decimal-for-money
    // allowNull: false this as well?
  },
  description: {
    type: Sequelize.TEXT,
  }
})

// So, based on the article above - I'd recommend using either integers (cents)
// or decimals (10, 2). If using integers, it may be sensible to have a getter
// for the price in dollars.

module.exports = Package
