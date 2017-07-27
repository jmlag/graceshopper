const router = require('express').Router();
const { Review, Package, User } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Review.findAll()
  .then(reviews => res.json(reviews))
  .catch(next);
});

router.post('/', (req, res, next) => {
  Review.create({
    score: req.body.score,
    date: req.body.date,
    writtenReview: req.body.writtenReview,
  })
  .then(review => review.setUser(req.user))
  .then(reviewWithUser => res.json(reviewWithUser))
  .catch(next)
});

router.get('/:productId', (req, res, next) => {
  Review.findAll({ where: { productId: req.params.productId } })
    .then(reviews => res.json(reviews))
    .catch(next);
});


router.delete('/:reviewId', (req,res,next) => {
  Review.findById(req.params.reviewId)
    .then(review => {
      return review.destroy()
    }).catch(next)
})

router.put('/:reviewId', (req, res, next) => {
  Review.findById(req.params.reviewId)
  .then(review => review.update({
    score: req.body.score,
    date: req.body.date,
    writtenReview: req.body.writtenReview,
  }))
})
