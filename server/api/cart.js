
//req.user
const router = require('express').Router()

const { Cart } = require('../db/models')
module.exports = router

router.use((res, res, next) => {
  Cart.findOne({where: {
    userId: req.user.id,
  }})
  .then(cart => {
    req.cart = cart
    next()
  })

})

router.get('/', (req, res, next) => {
  if(req.user) {

    .then(cart => {res.status(200).json(cart)})
    .catch(next)
  } else {
    res.sendStatus(204)
  }
})
//how do i make this drier
router.put('/', (req, res, next) => {
  if(req.user) {
    Cart.findOne({where: {
      userId: req.user.id,
    }})
    .then(cart => {res.status(200).json(cart)})
    .catch(next)
  } else {
    res.sendStatus(204)
  }
})
