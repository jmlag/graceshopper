const router = require('express').Router()
const { OrderHistory, Package, HistoryItem, CartItem } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
  OrderHistory.findAll()
  .then(histories => res.json(histories))
  .catch(next)
})

router.get('/:count', (req, res, next) => {
  const limit = req.params.count || 10
  OrderHistory.findAndCount({
    where: {
      userId: req.user.id
    },
    limit: +limit,
    include: [
      {
        model: HistoryItem,
      }
    ],
  })
  .then(orderHistory => res.json(orderHistory))
  .catch(next)
})

