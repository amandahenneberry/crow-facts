// 'use strict'

// const {db, models: {User, Fact, Discussion, Comment} } = require('../server/db')

//   // Users
//   const users = [
//     { username: 'cody', password: '123' },
//     { username: 'murphy', password: '123' },
//     {
//       isAdmin: true,
//       username: "amanda",
//       password: "123",
//       // userType: "Admin",
//       email: "amandahenneberry@icloud.com",
//     },
//   ];
  

//   //Facts
// const facts = [
//   ({ fact: 'When a crow dies, its neighbors may have a funeral', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows', 
// discussion: {
//   topic:'When a crow dies...', content: 'comments...'
// }
// }, {include : [Discussion]
// }),
//   ({ fact: `Proportionally, some crows' brains are bigger than yours`, source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows',
//   discussion: {
//     topic:'Proportionally, some crows...', content: 'comments...'
//   }
//   }, {include : [Discussion]
// }),
//   ({ fact: 'Crows have regional dialects', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows',
//   discussion: {
//     topic:'Crows have regional dialects', content: 'comments...'
//   }
//   }, {include : [Discussion]
// }),
//   ({ fact: 'Some crows can read traffic lights', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows',
//   discussion: {
//     topic: 'Some crows can read traffic lights', content: 'comments...'
//   }
//   }, {include : [Discussion]
// }),
//   ({ fact: 'Crows can recognize your face - and hold a grudge.', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows',
//   discussion: {
//     topic: 'Crows can recognize your face...', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   }),
//   ({ fact: 'New Caledonian Crows make and use tools', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows',
//   discussion: {
//     topic: 'New Caledonian Crows make and use tools', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   }),
//   ({ fact: 'Crows fight off predators by ganging up on them', source: 'https://www.mentalfloss.com/article/504722/12-fascinating-facts-about-crows',
//   discussion: {
//     topic: 'Crows fight off predators by ganging up on them', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   }),
//   ({ fact: 'Crows are considered one of the smartest animals in the world, with their intelligence considered on par with chimpanzees', source: 'https://www.audubon.org/news/10-fun-facts-about-american-crow',
//   discussion: {
//     topic: 'Crows are considered one of the smartest animals in the world...', content: 'comments...'
//   }
//   }), {include : [Discussion]
//   },
//   ({ fact: 'Examples of tool use in American Crows include a captive individual dipping a cup in some water to moisten a container of dry food and a wild crow ripping off a splinter of wood from a fence to try to spear some prey in a hole.', source: 'https://www.audubon.org/news/10-fun-facts-about-american-crow',
//   discussion: {
//     topic: 'Examples of tool use in American Crows include', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   }),
//   ({ fact: 'Crows form close family units of up to five generations.', source: 'https://www.audubon.org/news/10-fun-facts-about-american-crow',
//   discussion: {
//     topic: 'Crows form close family units of...', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   }),
//   ({ fact: 'American Crows’ smarts and adaptability have served them well in the Anthropocene. They’ve been getting more numerous in recent decades, especially in urban centers. According to BirdLife International, their population has grown by nearly 20 percent each decade for the past 40 years.', source: 'https://www.audubon.org/news/10-fun-facts-about-american-crow',
//   discussion: {
//     topic: 'American Crows’ smarts and adaptability have...', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   }),
//   ({ fact: `Crows Don't Just Use Tools; They Also Make Them`, source: 'https://www.treehugger.com/facts-about-crows-corvids-4868585',
//   discussion: {
//     topic: 'Crows Dont Just Use Tools...', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   }),
//   ({ fact: 'Crows Can Solve Puzzles on Par with Human Kids', source: 'https://www.treehugger.com/facts-about-crows-corvids-4868585',
//   discussion: {
//     topic: 'Crows Can Solve Puzzles on Par with Human Kids', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   }),
//   ({ fact: `Crows Gossip, Hold Grudges, and Know Who You Are`, source: 'https://www.treehugger.com/facts-about-crows-corvids-4868585',
//   discussion: {
//     topic: 'Crows Gossip, Hold Grudges, and Know Who You Are', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   }),
//   ({ fact: `Crows Mate for Life, but They're also 'Monogamish'`, source: 'https://www.treehugger.com/facts-about-crows-corvids-4868585',
//   discussion: {
//     topic: 'Crows Mate for Life, but ...', content: 'comments...'
//   }
//   }, {include : [Discussion]
//   })
// ]

// const seed = () =>
//   Promise.all(users.map(user =>
//     User.create(user))
//   )
//   .then(() =>
//   Promise.all(facts.map(fact =>
//     Fact.create(fact))
//   ));
//   .then(() =>
//   Promise.all(dicussions.map(discussion =>
//     Discussion.create(discussion))
//   )
// );

// const main = () => {
//   console.log('Syncing db...');
//   db.sync({ force: true })
//     .then(() => {
//       console.log('Seeding databse...');
//       return seed();
//     })
//     .catch(err => {
//       console.log('Error while seeding');
//       console.log(err.stack);
//     })
//     .then(() => {
//       db.close();
//       return null;
//     });
// };

// main();


