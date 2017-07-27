const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  score: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
    // make required?
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    // once again, maybe make use of 'createdAt' and/or 'updatedAt' (or was it
    // 'lastUpdated'?)
  },
  writtenReview: { // 'content' a more eloquent name for this field?
    type: Sequelize.TEXT,
  }
})

module.exports = Review
