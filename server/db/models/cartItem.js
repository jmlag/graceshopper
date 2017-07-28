const Sequelize = require('sequelize');
const db = require('../db');

const CartItem = db.define('cartItem', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        min: 1,
    },
    subscription: {
        type: Sequelize.DATE,
        defaultValue: null
    }
})

module.exports = CartItem;