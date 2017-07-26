const router = require("express").Router();
const { Review, Package, User } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  Review.findAll()
  .then(reviews => res.json(reviews))
  .catch(next);
});

router.post("/", (req, res, next) => {
  const postedReview = Review.create(req.body)
  const reviewer = req.user
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