const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/orderHistory', require('./orderHistory'))
router.use('/reviews', require('./reviews'))
router.use('/packages', require('./packages'))
router.use('/subscriptions', require('./subscriptions'))
router.use('/cart', require('./cart'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
