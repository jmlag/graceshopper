
//req.user
// ^ what's this for?
const router = require('express').Router()

const { Cart } = require('../db/models')
module.exports = router

router.post('/', function(req, res, next){ // be consistent about function or arrow
  /*  chaining might work here and look a little more elegant, e.g.:
        Cart.build(cartData)
          .setUser(req.user)
          .save()
          .then(cart => res.json(cart))
          .catch(next)

      Also, it might also work with just a `create` if not having userId doesn't
      violate some constraint on the model
        Cart.create(data)
          .then(cart => cart.setUser(req.user))
          .then(cartWithUser => res.send(cartWithUser))
          .catch(next)
  */
  const cart = Cart.build(req.body)
  /* possibly security issue to just feed in req body
  should only feed in relevant fields */
  cart.setUser(req.user)
  cart.save()
  .then(savedCart => res.status(200).json(savedCart))
  /* don't need to manually set a 200 status - that's default. 
  a 201 is probably better for this case (201 = 'created') */
  // handle your errors
})


// this is kinda cool!
router.use((req, res, next) => {
  if(req.user) {
    Cart.findOne({where: {
      userId: req.user.id,
    }}) // findById?
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
