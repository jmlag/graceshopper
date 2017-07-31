const router = require('express').Router();
const { HistoryItem } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  HistoryItem.findAll({
    where: {
      renewDay: {
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
    if (!subscription.renewDay){
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
