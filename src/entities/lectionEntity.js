const lectionEntity = (id, title, category, date, description) => {
    return {
        id,
        title: title,
        category: category,
        date: date,
        description: description
    }
};
// yolo
module.exports = lectionEntity;
