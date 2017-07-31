const router = require('express').Router()
const { OrderHistory, Package, HistoryItem, CartItem } = require('../db/models')
const Promise = require('bluebird')

module.exports = router

router.get('/', (req, res, next) => {
  OrderHistory.findAll({
    where: {
      userId: req.user.id
    },
    include: [
      {
        model: Package,
      }
    ],
  })
  .then(orderHistory => res.json(orderHistory))
  .catch(next)
})

router.post('/', (req, res, next) => {
  // const userId = req.user.id;
  const userId = 1
  const cartItems = req.body.cartItems;
  console.log('reqb', req.body.cartItems)
  OrderHistory.create({userId})
  .then(history => Promise.map(cartItems, (cartItem) => {
    return HistoryItem.create({
      orderHistoryId: history.id,
      quantity: cartItem.quantity,
      packageId: cartItem.packageId,
      renewDay: cartItem.renewDay,
      totalPrice: cartItem.quantity * cartItem.price
    });
  }))
  .then(order => res.json(order))
  .catch(next)
})

