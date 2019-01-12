const express = require('express');
const router = express.Router();
const lectionController = require('./../controllers/lectionController');

router.get('/', (req, res) => lectionController.getAll(req, res));
router.get('/:id', (req, res) => lectionController.get(req, res));
router.post('/', (req, res) => lectionController.create(req, res));
router.patch('/:id', (req, res) => lectionController.edit(req, res));
router.delete('/:id', (req, res) => lectionController.remove(req, res));

module.exports = router;