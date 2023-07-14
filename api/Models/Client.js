const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nom : String,
    prenom : String,
    identifiant : String,
    password : String
})

const User = mongoose.model('User', userSchema);

module.exports = User;