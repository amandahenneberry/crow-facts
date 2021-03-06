const router = require('express').Router()
const { models: {User }} = require('../db')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticateLogin(req.body)}); 
  } catch (err) {
    next(err)
  }
})
 
router.post('/signup', async (req, res, next) => {
  try {
    //PREVENT INJECTION ATTACKS!!:
    // user NOW cannot malicously add data, by deconstructing req.body
    //upon User.Create:
    const { username, password, email, image} = req.body

    const user = await User.create({ username, password, email, image })
    res.send({token: await user.generateToken()})
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (ex) {
    next(ex)
  }
})
