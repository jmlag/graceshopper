const router = require('express').Router()
const {Package} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Package.findAll()
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
  req.pkg.update({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
  })
  .then(putPackage => res.status(201).json(putPackage))
  .catch(next);
})

router.delete('/:packageId', (req, res, next) => {
  req.pkg.destroy()
  .then(() => res.sendStatus(204))
  .catch(next);
})

router.post('/', (req, res, next) => {
  Package.create({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
  })
  .then(pkg => res.status(201).json(pkg))
  .catch(next);
})
