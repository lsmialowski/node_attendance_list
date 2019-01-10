const userEntity = (id, name, surname, party, join_date) => {
    return {
        id,
        name: name,
        surname: surname,
        party: party,
        joinDate: join_date
    }
};

module.exports = userEntity;
