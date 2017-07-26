
//req.user
const router = require('express').Router()

const { Cart } = require('../db/models')
module.exports = router

router.post('/', function(req, res, next){
  const cart = Cart.build(req.body)
  cart.setUser(req.user)
  cart.save()
  .then(savedCart => res.status(200).json(savedCart))
})

router.use((req, res, next) => {
  if(req.user) {
    Cart.findOne({where: {
      userId: req.user.id,
    }})
    .then(cart => {
      req.cart = cart
      return req.cart.getPackages()
    })
    .then(() => next())
    .catch(next)
  } else {
    res.sendStatus(204)
  }

})

router.get('/', (req, res, next) => {
  res.status(200).json(req.cart)
})

router.put('/', (req, res, next) => {
  req.cart.update(req.body)
  .then(updatedCart => res.status(200).json(updatedCart))
  .catch(next)
})

router.delete('/', (req, res, next) => {
  req.cart.destroy()
  .then(res.sendStatus(204))
  .catch(next)
})
