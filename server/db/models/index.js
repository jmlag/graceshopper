const Cart = require('./cart')
const OrderHistory = require('./orderHistory')
const Package = require('./package')
const Review = require('./review')
const Subscription = require('./subscription')
const User = require('./user')
const CartItem = require('./cartItem')
const HistoryItem = require('./historyItem')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Cart.belongsTo(User)
Package.belongsToMany(Cart, {through: 'cartItem'})
Cart.hasMany(CartItem)

Package.belongsToMany(OrderHistory, {through: 'historyItem'})
OrderHistory.belongsTo(User)

Subscription.hasOne(HistoryItem)
HistoryItem.hasOne(Subscription)

Review.belongsTo(User)
User.hasMany(Review)

Review.belongsTo(Package)
Package.hasMany(Review)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Cart,
  CartItem,
  OrderHistory,
  Package,
  Subscription,
  User,
  Review,
}
