const router = require("express").Router();
const { Review, Package, User } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  console.log('this ran ---------------------------')
  Review.findAll().then(reviews => res.json(reviews)).catch(next);
});

router.post("/", (req, res, next) => {
  User.findById(req.user.id).then(user =>
    Review.create(req.body).then(review => res.json(review)).catch(next)
  );
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