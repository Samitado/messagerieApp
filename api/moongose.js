const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mydb_test");
mongoose.connection.on("open", () => console.log("Connexion réussie à la database."))
mongoose.connection.on("error", () => console.log("Connexion failed à la database."))


module.exports = mongoose;