const router = require('express').Router()

const { Cart, CartItem } = require('../db/models')
module.exports = router

router.use((req, res, next) => {
  Cart.findOrCreate({where: {
    userId: req.user.id,
  }})
  .spread((cart, created) => {
    req.cart = cart
    next()
  })
  .catch(next)
})

router.get('/', (req, res, next) => {
  res.status(200).json(req.cart)
})

//req.body should be a package.
router.put('/', (req, res, next) => {
  CartItem.create({
    quantity: 1,
    cartId: req.cart.id,
  })
  .then(cartItem => {
    cartItem.setPackage(req.body.id)
    res.json(req.cart)
  })
  .catch(next)
})

router.delete('/', (req, res, next) => {
  req.cart.destroy()
  .then(res.sendStatus(204))
  .catch(next)
})

router.delete('/:packageId', (req, res, next) => {
  req.cart.removePackage(req.params.packageId)
  .then(res.sendStatus(204))
  .catch(next)
})
