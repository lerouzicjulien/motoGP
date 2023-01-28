const Rider = require('../models/Rider');

//! PROBLEM WITH POST ROUTE !!!!!!!!!!!!!!
exports.createRider = (req, res, next) => {
    const riderObject = JSON.parse(req.body.rider);
    delete riderObject._id;
    delete riderObject._userId;
    const rider = new Rider({
        ...riderObject,
        // userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    rider.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
};
//! **********************************************



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
    const riderObject = 
    // req.file ? {
    //     ...JSON.parse(req.body.rider),
    //     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    // } : 
    { ...req.body };
  
    // delete riderObject._userId;
    Rider.findOne({_id: req.params.id})
        .then((rider) => {
            // if (rider.userId != req.auth.userId) {
            //     res.status(401).json({ message : 'Not authorized'});
            // } else {
                Rider.updateOne({ _id: req.params.id}, { ...riderObject, _id: req.params.id})
                .then(() => res.status(200).json({message : 'Objet modifié!'}))
                .catch(error => res.status(401).json({ error }));
            // }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};
//! **********************************************

exports.deleteRider = (req, res, next) => {
    Rider.findOne({ _id: req.params.id})
        .then(rider => {
            // if (rider.userId != req.auth.userId) {
            //     res.status(401).json({message: 'Not authorized'});
            // } else {
                // const filename = rider.imageUrl.split('/images/')[1];
                // s.unlink(`images/${filename}`, () => {
                    Rider.deleteOne({_id: req.params.id})
                        .then(() => { res.status(200).json({message: 'Objet supprimé !'})})
                        .catch(error => res.status(401).json({ error }));
                // });
            // }
        })
        .catch( error => {
            res.status(500).json({ error });
        });
};