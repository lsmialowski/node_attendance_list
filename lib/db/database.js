const Sequelize = require('sequelize');
let connection;

function connect(){
    connection = new Sequelize('attendance_list', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306',

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
    return connection;
}
function connectionTest(){
    connection
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}
function disconnect(){
    connection.disconnect();
}

function getConnection(){
    return connection;
}

module.exports = {connect, connectionTest, disconnect, getConnection};