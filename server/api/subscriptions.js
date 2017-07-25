const router = require('express').Router();
const { Subscription } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Subscription.findAll({})
  .then(subscriptions => res.json(subscriptions))
  .catch(next);
})

router.param('id', function(req, res, next, id) {
  Subscription.findById(id)
  .then(subscription => {
    if(!subscription) {
      const err = Error('Subscription not found.');
      err.status = 404;
      throw err;
    }
    req.subscription = subscription;
    next();
  })
  .catch(next);
})


router.get('/:id', function(req, res, next){
  res.json(req.subscription);
})

router.put('/:id', function(req, res, next){
  req.subscription.update(req.body)
  .then(subscription => res.status(200).json(subscription))
  .catch(next)
})

router.delete('/:id', function(req, res, next){
  req.subscription.destroy()
  .then(res.sendStatus(204))
  .catch(next);
})

router.post('/', function(req, res, next){
  const subscription = Subscription.build(req.body)
  subscription.save()
  .then(subscription => res.json(subscription))
  .catch(next);
})
