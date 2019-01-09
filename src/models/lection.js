const db = require('./../../lib/db/database');
const connection = db.getConnection();

const dataTypes = require('sequelize');

module.exports = connection.define('lection', {
    title: {
        type: dataTypes.STRING
    },
    category: {
        type: dataTypes.STRING
    },
    date: {
        type: dataTypes.DATE
    },
    description: {
        type: dataTypes.STRING
    }
}, {
    timestamps: false
});