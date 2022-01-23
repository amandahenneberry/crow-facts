const Sequelize = require('sequelize');
const db = require ("../db");

const Fact = db.define("fact", {
    fact: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    source: {
        type: Sequelize.STRING,
    },
    username: {
        type: Sequelize.STRING,
        defaultValue: 'anonymous'
    }

})

module.exports = Fact