const userEntity = require('./../entities/userEntity');

const userDatabaseToUserEntity = (data) => {
    return userEntity(data.id, data.name, data.surname, data.party, data.joinDate);
};

module.exports = userDatabaseToUserEntity;
