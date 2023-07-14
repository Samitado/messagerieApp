const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mydb_test");

const Users = mongoose.model("users", userSchema);

//on va tenter en faisant une api CRUD
//me faut une structure de donnée
//me connecter à la DB
//le create, read, update & delete