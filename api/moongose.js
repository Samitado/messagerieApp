const mongoose = require('mongoose');

    mongoose.connect("mongodb://root:example@localhost:27017/messagerieDB");




mongoose.connection.on("open", () => console.log("Connexion réussie à la database."))
    mongoose.connection.on("error", () => console.log("Connexion failed à la database."))

module.exports = mongoose;