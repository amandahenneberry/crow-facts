const router = require('express').Router();
const User = require('../db/models/User');
const Discussion = require('../db/models/Discussion');
const Fact = require('../db/models/Fact')
module.exports = router;

//get ALL discussions
router.get('/', async (req, res, next) => {
    try {
      const discussions = await Discussion.findAll({
        where: req.query,
        attributes: ['topic'],
        include: [Fact]
      })
      res.json(discussions)
    }
    catch (error) {
      next(error)
    }
  })

  // GET /api/discussions/:discussionId
  router.get('/:discussionId', async (req, res, next) => {
    try {
      const discussion = await Discussion.findByPk(req.params.discussionId, {
        include: [Fact]
       // include: [Fact, {model: Comment, include: User}]
      })
      res.json(discussion)
    }
    catch (error) {
      next(error)
    }
  })
  