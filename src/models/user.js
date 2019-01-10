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
        type: dataTypes.STRING
    },
    joinDate: {
        type: dataTypes.DATE
    }
}, {
    timestamps: false
});