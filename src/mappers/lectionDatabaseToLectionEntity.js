const lectionEntity = require('./../entities/lectionEntity');

const lectionDatabaseToLectionEntity = (data) => {
    return lectionEntity(data.id, data.title, data.category, data.date, data.description);
};

module.exports = lectionDatabaseToLectionEntity;
