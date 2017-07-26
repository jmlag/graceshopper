
//req.user
const router = require('express').Router()

const { Cart } = require('../db/models')
module.exports = router

router.use((req, res, next) => {
  if(req.user) {
    Cart.findOne({where: {
      userId: req.user.id,
    }})
    .then(cart => {
      req.cart = cart
      next()
    })
    .catch(next)
  } else {
    res.sendStatus(204)
  }

})

router.get('/', (req, res, next) => {
  res.status(200).json(req.cart)
})

//how do i make this drier
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
