const express = require('express');
const auth = require('../middlewares/auth')
const riderCtrl = require('../controllers/rider');
const multer = require('../middlewares/multer-config');

const router = express.Router();

router.post('/', multer, riderCtrl.createRider);

router.put('/:id', multer, riderCtrl.updateRider);

router.delete('/:id', riderCtrl.deleteRider);

router.get('/:id', riderCtrl.getOneRider);

router.get('/', riderCtrl.getAllRiders);

module.exports = router;