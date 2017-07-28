const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  score: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
  },
  content: {
    type: Sequelize.TEXT,
    len: [10, 2500],
  }
})

module.exports = Review
