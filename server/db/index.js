//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Fact = require('./models/Fact')
const Discussion = require('./models/Discussion')

//associations could go here!
Fact.hasOne(Discussion);
Discussion.belongsTo(Fact);
// Fact.hasOne(Discussion, {as: 'topic'});
// Discussion.belongsTo(Fact, {as: 'topic'});

module.exports = {
  db,
  models: {
    User,
    Fact,
    Discussion
  },
}
