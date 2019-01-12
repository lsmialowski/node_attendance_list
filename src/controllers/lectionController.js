const lectionSchema = require('./../validators/lectionSchema');
const lectionsDatabaseToLectionEntity = require('./../mappers/lectionsDatabaseToLectionEntity');
const lectionDatabaseToLectionEntity = require('./../mappers/lectionDatabaseToLectionEntity');
const Joi = require('joi');

const getAll = (req, res) => {
    const lection = require('./../models/lection');
    lection.findAll().then(data => {
        res.send(lectionsDatabaseToLectionEntity(data));
    });
};

const get = (req, res) => {
    const lection = require('./../models/lection');
    lection.findByPk(req.params.id).then(data => {
        if (data === null) {
            res.status(404);
            return res.send('lection not found :(');
        }
        res.send(lectionDatabaseToLectionEntity(data));
    });
};

const create = (req, res) => {
    const lection = require('./../models/lection');
    const result = Joi.validate(req.body, lectionSchema);
    if (result.error !== null) {
        result.error.status = 400;
        throw result.error;
    }
    lection.create({
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            description: req.body.description
        }
    )
        .then((data) => {
            res.send(data)
        });
};

const edit = (req, res) => {
    const lection = require('./../models/lection');
    const result = Joi.validate(req.body, lectionSchema);
    if (result.error !== null) {
        result.error.status = 400;
        throw result.error;
    }
    lection.update(
        {
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            description: req.body.description
        },
        {where: {id: req.params.id}}
    ).then(data => {
        if (data[0] === 0) {
            return res.send('Nothing changed');
        }
        lection.findByPk(req.params.id).then(data => {
            res.send(lectionDatabaseToLectionEntity(data));
        });
    });
};

const remove = (req, res) => {
    //todo id validation
    const lection = require('./../models/lection');
    lection.destroy({where: {id: req.params.id}}).then(data => {
            if (data === 0) {
                return res.send('Nothing changed');
            }
            res.send(`${data} deleted`);
        }
    );
};

module.exports = {get, getAll, create, edit, remove};