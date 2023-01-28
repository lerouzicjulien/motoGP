const express = require('express');
const auth = require('../middlewares/auth')
const teamCtrl = require('../controllers/team');
const multer = require('../middlewares/multer-config');

const router = express.Router();

router.post('/', multer, teamCtrl.createTeam);

router.put('/:id', multer, teamCtrl.updateTeam);

router.delete('/:id', teamCtrl.deleteTeam);

router.get('/:id', teamCtrl.getOneTeam);

router.get('/', teamCtrl.getAllTeams);

module.exports = router;

//TODO auth,