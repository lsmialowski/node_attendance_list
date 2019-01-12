const lectionDatabaseToLectionEntity = require('./lectionDatabaseToLectionEntity');

const lectionsDatabaseToLectionEntity = (data) => {
    const lections = [];

    for (const lectionData of data) {
        lections.push(lectionDatabaseToLectionEntity(lectionData));
    }
    return lections;
};

module.exports = lectionsDatabaseToLectionEntity;
