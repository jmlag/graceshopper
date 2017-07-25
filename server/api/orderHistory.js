const router = require('express').Router()
const { OrderHistory } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
  OrderHistory.findAll()
  .then(histories => res.json(histories))
  .catch(next)
})

router.param('id', function(req, res, next, id) {
  OrderHistory.findById(id)
  .then(history => {
    if(!history) {
      const err = Error('OrderHistory not found.')
      err.status = 404
      throw err
    }
    history.getPackages()

    req.orderHistory = history
    next()
  })
  .catch(next)
})


router.get('/:id', function(req, res, next){
  res.json(req.orderHistory)
})

router.put('/:id', function(req, res, next){
  req.orderHistory.update(req.body)
  .then(orderHistory => res.status(200).json(orderHistory))
  .catch(next)
})

router.delete('/:id', function(req, res, next){
  req.orderHistory.destroy()
  .then(res.sendStatus(204))
  .catch(next)
})

router.post('/', function(req, res, next){
  const orderHistory = OrderHistory.build(req.body)
  orderHistory.save()
  .then(order => res.json(order))
  .catch(next)
})
