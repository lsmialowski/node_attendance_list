const db = require('./../../lib/db/database');
const connection = db.getConnection();

const dataTypes = require('sequelize');

module.exports = connection.define('users', {
    name: {
        type: dataTypes.STRING
    },
    surname: {
        type: dataTypes.STRING
    },
    group: {
        type: dataTypes.INTEGER
    },
    joinDate: {
        type: dataTypes.INTEGER
    }
}, {
    timestamps: false
});