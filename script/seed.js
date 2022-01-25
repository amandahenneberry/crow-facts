'use strict'

const {db, models: {User, Fact, Discussion} } = require('../server/db')
//for 'discussions' content

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
    User.create({
      isAdmin: true,
      username: "amanda",
      password: "123",
      // userType: "Admin",
      email: "amandahenneberry@icloud.com",
    }),
  ])
  
  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`);

  //Creating Facts
const facts =  await Promise.all([
  Fact.create({ fact: 'When a crow dies, its neighbors may have a funeral', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows'}),
  Fact.create({ fact: `Proportionally, some crows' brains are bigger than yours`, source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows'}),
  Fact.create({ fact: 'Crows have regional dialects', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows'}),
  Fact.create({ fact: 'Some crows can read traffic lights', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows'}),
  Fact.create({ fact: 'Crows can recognize your face - and hold a grudge.', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows'}),
  Fact.create({ fact: 'New Caledonian Crows make and use tools', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows'}),
  Fact.create({ fact: 'Crows fight off predators by ganging up on them', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows'}),
  Fact.create({ fact: 'Crows are considered one of the smartest animals in the world, with their intelligence considered on par with chimpanzees', source: 'https://www.audubon.org/news/10-fun-facts-about-american-crow'}),
  Fact.create({ fact: 'Examples of tool use in American Crows include a captive individual dipping a cup in some water to moisten a container of dry food and a wild crow ripping off a splinter of wood from a fence to try to spear some prey in a hole.', source: 'https://www.audubon.org/news/10-fun-facts-about-american-crow'}),
  Fact.create({ fact: 'Crows form close family units of up to five generations.', source: 'https://www.audubon.org/news/10-fun-facts-about-american-crow'}),
  Fact.create({ fact: 'American Crows’ smarts and adaptability have served them well in the Anthropocene. They’ve been getting more numerous in recent decades, especially in urban centers. According to BirdLife International, their population has grown by nearly 20 percent each decade for the past 40 years.', source: 'https://www.audubon.org/news/10-fun-facts-about-american-crow'}),
  Fact.create({ fact: `Crows Don't Just Use Tools; They Also Make Them`, source: 'https://www.treehugger.com/facts-about-crows-corvids-4868585'}),
  Fact.create({ fact: 'Crows Can Solve Puzzles on Par with Human Kids', source: 'https://www.treehugger.com/facts-about-crows-corvids-4868585'}),
  Fact.create({ fact: `Crows Gossip, Hold Grudges, and Know Who You Are`, source: 'https://www.treehugger.com/facts-about-crows-corvids-4868585'}),
  Fact.create({ fact: `Crows Mate for Life, but They're also 'Monogamish'`, source: 'https://www.treehugger.com/facts-about-crows-corvids-4868585'}),

])
  
  console.log(`seeded ${facts.length} facts`)
  console.log(`seeded successfully`);
  


//Creating Discussions

const discussions = await Promise.all([
  Discussion.create({ topic: 'When a crow dies, its neighbors may have a funeral', factId: 1}),
  Discussion.create({ topic: `Proportionally, some crows' brains are bigger than yours`, factId: 2}),
  Discussion.create({ topic: 'Crows have regional dialects', factId: 3}),
  Discussion.create({ topic: 'Some crows can read traffic lights', factId: 4}),
  Discussion.create({ topic: 'Crows can recognize your face - and hold a grudge.', factId: 5}),
  Discussion.create({ topic: 'New Caledonian Crows make and use tools', factId: 6}),
  Discussion.create({ topic: 'Crows fight off predators by ganging up on them', factId: 7}),
])
  
  console.log(`seeded ${discussions.length} discussions`)
  console.log(`seeded successfully`);
  
}







/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
