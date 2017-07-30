const router = require('express').Router();
const { HistoryItem } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  HistoryItem.findAll({
    where: {
      renewDay:{
        $ne: null,
      }
    }
  })
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
  req.subscription.update({
    renewDay: req.body.renewDay,
    cost: req.body.cost,
  })
  .then(subscription => res.status(200).json(subscription))
  .catch(next)
})

router.delete('/:id', function(req, res, next){
  req.subscription.destroy()
  .then(res.sendStatus(204))
  .catch(next);
})

router.post('/', function(req, res, next){
  Subscription.create({
    renewDay: req.body.renewDay,
    cost: req.body.cost,
  })
  .then(savedSub => res.json(savedSub))
  .catch(next);
})
