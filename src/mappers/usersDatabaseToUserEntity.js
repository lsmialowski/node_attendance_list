const userDBToUserEntity = require('./userDatabaseToUserEntity');

const usersDBToUserEntity = (data) => {
    const users = [];

    for (const userData of data) {
        users.push(userDBToUserEntity(userData));
    }
    return users;
};

module.exports = usersDBToUserEntity;
