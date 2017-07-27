const router = require('express').Router()
const { OrderHistory, Package } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
  OrderHistory.findAll()
  .then(histories => res.json(histories))
  .catch(next)
})

router.param('id', (req, res, next, id) => {
  OrderHistory.findById(id, {include: [{
    model: Package,
  }]})
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

router.put('/:id', (req, res, next) => {
  req.orderHistory.update({
    date: req.body.date,
    cost: req.body.cost,
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
  OrderHistory.create({
    date: req.body.date,
    cost: req.body.cost,
  })
  .then(order => res.json(order))
  .catch(next)
})
