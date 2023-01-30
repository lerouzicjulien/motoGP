const express = require('express');
const mongoose = require('mongoose');
const app = express();
const riderRoutes = require('./routes/rider');
const teamRoutes = require('./routes/team');
const userRoutes = require('./routes/user');
const path = require('path');
const db = require('./db.json');


mongoose.connect(`mongodb+srv://${db.username}:${db.password}@cluster0.lr882tw.mongodb.net/test`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/rider', riderRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;