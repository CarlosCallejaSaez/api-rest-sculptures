const express = require('express');
const router = express.Router();
const {
    getAllSculptures,
    getSculptureById,
    createSculpture,
    updateSculptureById,
    deleteSculpture,
  } = require('../controllers/sculptures');

router.get('/sculptures', getAllSculptures);
router.get('/sculptures/:id', getSculptureById);
router.post('/sculptures', createSculpture);
router.put('/sculptures/:id', updateSculptureById);
router.delete('/sculptures/:id', deleteSculpture);

module.exports = router;
