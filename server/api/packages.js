const router = require('express').Router()
const {Package} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Package.findAll({})
   .then(users => res.json(users))
   .catch(next);
})

router.get('/:packageId',(req, res, next)=>{
  Package.findOne({where:{ id: req.params.packageId }})
  .then(package => res.json(package))
  .catch(next);
})

router.post('/', (req, res, next)=>{
  Package.create(req.body)
  .then(package => res.json(package))
  .catch(next);
})

router.put('/:packageId',(req,res,next)=>{
  Package.findOne({where:{ id: req.params.packageId }})
  .then(package => package.update(req.body))
  .then(result => res.status(201).json(result))
  .catch(next);    
})

router.delete("/:packageId", (req, res, next) => {
  Package.findById(req.params.packageId)
  .then( package => package.destroy({}) )
  .then( result => res.status(204))
  .catch(next);
})