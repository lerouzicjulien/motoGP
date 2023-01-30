const Team = require('../models/Team');

exports.createTeam = (req, res, next) => {
    
    const teamObject = req.body;
    console.log(teamObject)
    // delete teamObject._id

    const team = new Team({
        ...teamObject
    });
    console.log(team)
    team.save()
        .then(() => res.status(201).json({message: 'team crée'}))
         .catch(error => { res.status(400).json({ error })})
};

exports.getAllTeams = (req, res, next) => {
    Team.find()
    .then(team => res.status(200).json(team))
    .catch(error => res.status(400).json({error}));
};

exports.getOneTeam = (req, res, next) => {
    Team.findOne({_id: req.params.id})
    .then(team => res.status(200).json(team))
    .catch(error => res.status(404).json({error}))
};

exports.updateTeam = (req, res, next) => {

};

exports.deleteTeam = (req, res, next) => {
    Team.findOne({ _id: req.params.id})
    .then(team => {
        Team.deleteOne({_id: req.params.id})
            .then(() => { res.status(200).json({message: 'Objet supprimé !'})})
            .catch(error => res.status(401).json({ error }));
    })
    .catch( error => {
        res.status(500).json({ error });
    });
};