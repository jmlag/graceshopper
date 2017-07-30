const Sequelize = require('sequelize');
const db = require('../db');

const HistoryItem = db.define('historyItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        min: 1,
    },    
    renewDay: {
        type: Sequelize.DATE,
        defaultValue: null
    },
    totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

module.exports = HistoryItem;