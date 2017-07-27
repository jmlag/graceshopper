const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next);
})

router.param('userId', (req, res, next, userId) => {
  User.findById(userId)
  .then(user => {
    if(!user) {
      const err = Error('User not found.')
      err.status = 404
      throw err
    }

    req.user = user
    next()
  })
  .catch(next)
})

router.get('/:userId', (req, res, next) => {
  res.json(req.user)
})

router.put('/:userId',(req,res,next)=>{
  req.user.update(req.body)
  .then(result => res.status(201).json(result))
  .catch(next);
})

router.delete('/:userId', (req, res, next) => {
  req.user.destroy()
  .then( () => res.sendStatus(204))
  .catch(next);
})

router.post('/', (req, res, next) => {
  const {email, password} = req.body
  User.create({email, password})
  .then(user => res.json(user))
  .catch(next);
})
