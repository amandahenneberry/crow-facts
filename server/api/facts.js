const router = require('express').Router();
const {
    models: { Fact },
} = require ("../db");
module.exports = router;

//get all facts
router.get("/", async (req, res, next) => {
    try {
      const facts = await Fact.findAll();
      res.json(facts);
    } catch (err) {
      next(err);
    }
  });

// get single fact
router.get('/:factId', async(req, res, next) => {
    try {
      const fact = await Fact.findByPk(req.params.factId)
      res.json(fact);
    } catch (err) {
      next(err);
    }
  });

  //submit a fact 
  router.post('/addFact', async(req, res) => {
      try{
        const {fact, source} = req.body;
        await Fact.create({fact, source});
        res.end();
      } catch (err){
        res.status(404).end()
      }
  })