const router = require('express').Router()

const { Cart, CartItem, Package } = require('../db/models')
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
  CartItem.findAll({
    where: {
      cartId: req.cart.id,
    },
  })
  .then(cartItems => res.json(cartItems))
})

//req.body should be a package.
router.put('/', (req, res, next) => {
  CartItem.findOrCreate({
    where: {
      cartId: req.cart.id,
      packageId: req.body.id,
    },
    defaults: {
      quantity: 0,
    }})
  .spread((cartItem) => cartItem.increment('quantity'))
  .then(updatedCartItem  => res.json(updatedCartItem))
  .catch(next)
})

router.delete('/', (req, res, next) => {
  req.cart.destroy()
  .then(res.sendStatus(204))
  .catch(next)
})

router.put('/:packageId', (req, res, next) => {
  CartItem.findOne({
    where: {
      cartId: req.cart.id,
      packageId: req.params.packageId,
    },
  })
  .then(cartItem => {
    if (cartItem){
      return cartItem.update({
        quantity: req.body.quantity,
      })
      .then(updatedCartItem => {
        res.json(updatedCartItem)
      })
    } else {
      res.sendStatus(404)
    }
  })
  .catch(next)
})

router.delete('/:packageId', (req, res, next) => {
  CartItem.findOne({
    where: {
      cartId: req.cart.id,
      packageId: req.params.packageId,
    }
  })
  .then(cartItem => cartItem.destroy())
  .then(res.sendStatus(204))
  .catch(next)
})
