const Rider = require('../models/Rider');


exports.createRider = (req, res, next) => {
    const riderObject = req.body;
    delete riderObject._id;
    const rider = new Rider({
        ...riderObject,
    });
  
    rider.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json({ error })})
};

exports.getAllRiders = (req, res, next) => {
    Rider.find()
    .then(rider => res.status(200).json(rider))
    .catch(error => res.status(400).json({error}));
};

exports.getOneRider = (req, res, next) => {
    Rider.findOne({_id: req.params.id})
    .then(rider => res.status(200).json(rider))
    .catch(error => res.status(404).json({error}))
};

//! PROBLEM WITH POST ROUTE !!!!!!!!!!!!!!
exports.updateRider = (req, res, next) => {
    // const riderObject = req.file ? {
    //     ...req.body,
    //    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file}`
    // } : { ...req.body };

    const riderObject = {...req.body};
  
    // delete riderObject._userId;
    Rider.findOne({_id: req.params.id})
        .then((rider) => {
                Rider.updateOne({ _id: req.params.id}, { ...riderObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Objet modifié!'}))
                .catch(error => res.status(401).json({ error }));
            }
        )
        .catch((error) => {
            res.status(400).json({ error });
        });
};
//! **********************************************

exports.deleteRider = (req, res, next) => {
    Rider.findOne({ _id: req.params.id})
        .then(rider => {
            Rider.deleteOne({_id: req.params.id})
                .then(() => { res.status(200).json({message: 'Objet supprimé !'})})
                .catch(error => res.status(401).json({ error }));
        })
        .catch( error => {
            res.status(500).json({ error });
        });
};