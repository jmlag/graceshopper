const router = require("express").Router();
const { Review , Package } = require("../db/models");
module.exports = router;

router.get("/", (req, res, next) => {
  Review.findAll().then(reviews => res.json(reviews)).catch(next);
});

router.post("/", (req, res, next) => {
  Review.create(req.body).then(review => res.json(review)).catch(next);
});

router.get("/productId",(req, res, next)=>{
    Review.findAll({where:{productId:req.params.productId}})
    .then(reviews => res.json(reviews))
    .catch(next)
})
