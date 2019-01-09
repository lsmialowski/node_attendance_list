const userEntity = (id, name, surname, group, join_date) => {
    return {
        id,
        name: name,
        surname: surname,
        group: group,
        joinDate: join_date
    }
};

module.exports = userEntity;
