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
  HistoryItem.findById(id)
  .then(subscription => {
    if(!subscription.renewDay) {
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

/* USE ORDERHISTORY API INSTEAD
router.put('/:id', function(req, res, next){
  req.subscription.update({
    renewDay: req.body.renewDay,
    quantity: req.body.quantity,
    totalPrice: req.body.totalPrice,
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
    quantity: req.body.quantity,
    totalPrice: req.body.totalPrice,
  })
  .then(savedSub => res.json(savedSub))
  .catch(next);
})
*/