const router = require('express').Router();
const {
    models: { Fact },
} = require ("../db");
module.exports = router;

//get all facts
router.get("/", async (req, res, next) => {
    try {
      const facts = await Fact.findAll({include: {all:true}});
      res.json(facts);
    } catch (err) {
      next(err);
    }
  });


// get single fact
router.get('/:id', async(req, res, next) => {
    try {
      const fact = await Fact.findByPk(req.params.id)
      res.send(fact);
    } catch (err) {
      next(err);
    }
  });

  // get single fact's source
// router.get('/:id', async(req, res, next) => {
//   try {
//     const source = await Fact.findByPk(req.params.id)
//     res.send(source);
//   } catch (err) {
//     next(err);
//   }
// });

  //submit a fact 
  router.post('/', async(req, res, next) => {
      try{
       res.status(201).send(await Fact.create(req.body))
      }catch(error){
        next(error)
      }
  })