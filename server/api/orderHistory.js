const router = require('express').Router()
const { OrderHistory, Package, HistoryItem, CartItem } = require('../db/models')
const Promise = require('bluebird')

module.exports = router

router.get('/', (req, res, next) => {
  OrderHistory.findAll()
  .then(histories => res.json(histories))
  .catch(next)
})

router.param('id', (req, res, next, id) => {
  OrderHistory.findById(id)
  .then(history => {
    if (!history) {
      const err = Error('OrderHistory not found.')
      err.status = 404
      throw err
    }
    req.orderHistory = history
    next()
  })
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  res.json(req.orderHistory)
})

router.get('/:id/items', (req, res, next) => {
  HistoryItem.findAll({
    where: {orderHistoryId: req.params.id}
  })
  .then(items => res.json(items))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  req.orderHistory.update({
    quantity: req.body.quantity,
    renewDay: req.body.renewDay,
    totalPrice: req.body.totalPrice
  })
  .then(orderHistory => res.json(orderHistory))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  req.orderHistory.destroy()
  .then(res.sendStatus(204))
  .catch(next)
})

router.post('/', (req, res, next) => {
  const userId = req.body.userId;
  const cartItems = req.body.cartItems;

  OrderHistory.create({userId})
  .then(history => Promise.map(cartItems, (cartItem, index) => {
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
