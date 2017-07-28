const Sequelize = require('sequelize');
const db = require('../db');

const HistoryItem = db.define('historyItem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        min: 1,
    },    
    subscription: {
        type: Sequelize.DATE,
        defaultValue: null
    }
    totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

module.exports = HistoryItem;