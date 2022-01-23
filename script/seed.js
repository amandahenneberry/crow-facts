'use strict'

const {db, models: {User, Fact} } = require('../server/db')

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
const facts = await Promise.all([
  Fact.create({ fact: 'fact1', source: 'source1'}),
  Fact.create({ fact: 'fact2', source: 'source2'}),
  Fact.create({ fact: 'fact3', source: 'source3'}),
  Fact.create({ fact: 'fact4', source: 'source4'}),
  Fact.create({ fact: 'fact5', source: 'source5'}),
  ])
  
  console.log(`seeded ${facts.length} facts`)
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
