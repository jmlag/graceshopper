const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  score: {
    type: Sequelize.ENUM,
    values: [1, 2, 3, 4, 5],
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  writtenReview: {
    type: Sequelize.TEXT,
  }
})

module.exports = Review
