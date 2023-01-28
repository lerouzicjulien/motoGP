const express = require('express');
const auth = require('../middlewares/auth')
const riderCtrl = require('../controllers/rider');
const multer = require('../middlewares/multer-config');

const router = express.Router();

router.post('/', auth, multer, riderCtrl.createRider);

router.put('/:id', auth, multer, riderCtrl.updateRider);

router.delete('/:id', auth, riderCtrl.deleteRider);

router.get('/:id', riderCtrl.getOneRider);

router.get('/', riderCtrl.getAllRiders);

module.exports = router;