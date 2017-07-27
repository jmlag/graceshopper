// let's get some consistency in the quotation marks...
const router = require('express').Router()
const {Package} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Package.findAll({}) // don't need to pass this empty obj
   .then(packages => res.json(packages))
   .catch(next);
})

router.param('packageId', (req, res, next, packageId) => {
  Package.findById(packageId)
  .then(pkg => {
    if (!pkg){
      const err = Error('Package not found.')
      err.status = 404
      throw err
    }

    req.pkg = pkg
    next()
  })
  .catch(next)
})

router.get('/:packageId', (req, res, next) => {
  res.json(req.pkg)
})

router.put('/:packageId', (req, res, next) => {
  req.pkg.update(req.body)
  .then(result => res.status(201).json(result)) // maybe something more descriptive than `result`
  .catch(next);
})

router.delete("/:packageId", (req, res, next) => {
  req.pkg.destroy({}) // don't need this empty obj
  .then( result => res.sendStatus(204)) // format/spacing? no-unused-vars?
  .catch(next);
})

router.post('/', (req, res, next) => {
  Package.create(req.body)
  .then(pkg => res.json(pkg)) // 201 status?
  .catch(next);
})
