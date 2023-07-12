const express = require('express');
const router = express.Router();
const sculpturesController = require('../controllers/sculptures');

router.get('/sculptures', sculpturesController.getAllSculptures);
router.get('/sculptures/:id', sculpturesController.getSculptureById);
router.post('/sculptures', sculpturesController.createSculpture);
router.put('/sculptures/:id', sculpturesController.updateSculptureById);
router.delete('/sculptures/:id', sculpturesController.deleteSculpture);

module.exports = router;
