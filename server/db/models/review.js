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
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  writtenReview: {
    type: Sequelize.TEXT,
  }
})

module.exports = Review
