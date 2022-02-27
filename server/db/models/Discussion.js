const Sequelize = require('sequelize');
const db = require ("../db");
// const Fact = require('./Fact');

const Discussion = db.define("discussion", {
    topic: Sequelize.STRING,
    content: Sequelize.TEXT,

})

module.exports = Discussion