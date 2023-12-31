const express = require('express');
const router = express.Router();
const User = require('../Models/Client')

//findById
router.get('/:id', function(req, res, next) {
    const id = req.params.id
    const user = User.findById()
    .then(result => res.send(result))
    .catch(err =>res.send(err.message))
})

//findAll
router.get('/', function(req, res, next) {
  const users = User.find()
    .then(result => res.send(result))
    .catch(err =>res.send(err.message))
    
});

//enregistrer un client
router.post('/', function(req, res, next) {
    const user = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        identifiant: req.body.identifiant,
        password: req.body.password
    })
    user.save()
        .then(result => res.send(result))
        .catch(err =>res.send(err.message))
})

//TODO put
router.put('/', function(req, res, next) {
    res.send('client mod')
})


//deleteById
router.delete('/:id', function(req, res, next) {
    const id = req.params.id
    User.findByIdAndDelete(id)
    .then(result => console.log(result))
    .catch(err => console.log(err.message))
})

module.exports = router;
