const router = require("express").Router();
const { Review, Package, User } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  Review.findAll()
  .then(reviews => res.json(reviews))
  .catch(next);
});

router.post("/", (req, res, next) => {
  const postedReview = Review.create(req.body) // feeding entire req.body tends to be unsafe
  const reviewer = req.user

  /* this Promise.all wrapper seems rather silly when you can do something like:
        Review.create(reviewData)
          .then(review => review.setUser(req.user))
          .then(reviewWithUser => res.json(reviewWithUser));
          .catch(next);
  
  */
  Promise.all([postedReview, reviewer])
  .then(([post, author]) =>{
      post.setUser(author)
      res.json(post)
  }).catch(next)
});

router.get("/:productId", (req, res, next) => {
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
  .then(review => review.update(req.body))
})