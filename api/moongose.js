const mongoose = require('mongoose');

    mongoose.connect("mongodb://sami:sami@localhost:27017/messagerieDB");
   // mongoose.connect("mongodb://localhost:27017/messagerieDB");

    mongoose.connection.on("open", () => console.log("Connexion réussie à la database."))
    mongoose.connection.on("error", () => console.log("Connexion failed à la database."))

    module.exports = mongoose;