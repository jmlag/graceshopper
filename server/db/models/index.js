const Cart = require('./cart')
const OrderHistory = require('./orderHistory')
const Package = require('./package')
const Subscription = require('./subscription')
const User = require('./user')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Package.belongsTo(Cart)
Cart.hasMany(Package)

Package.belongsTo(OrderHistory)
OrderHistory.hasMany(Package)

Subscription.belongsTo(OrderHistory)
OrderHistory.hasMany(Subscription)

Cart.belongsTo(User)

OrderHistory.belongsTo(User)

Subscription.belongsTo(User)
User.hasMany(Subscription)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Cart,
  OrderHistory,
  Package,
  Subscription,
  User,
}
