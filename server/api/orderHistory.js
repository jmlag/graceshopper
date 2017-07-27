const router = require('express').Router()
const { OrderHistory } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => { // again, consistency with function vs. arrow
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
    history.getPackages() // this is a promise, doesn't do anything to history!

    req.orderHistory = history
    /* this history object doesn't have pkg info on it if it's something you care about
    either do this in a then after returning the prev thing, or use some eager loading
    when querying on line 13 */

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
  // again, status code. if you want to set one, find a more relevant/descriptive one
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
  // a two-step build/save is silly when you can simply `create`
  .then(order => res.json(order)) // maybe a 201 status code
  .catch(next)
})
