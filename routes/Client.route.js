const express = require('express');
const router = express.Router();
const User = require('../api/Models/Client')


router.get('/', function(req, res, next) {
  var users = User.find().then(
    response => 
    res.send('client recupérer' + response));
    
});

router.post('/', function(req, res, next) {
    const user = new User();
    user.save()
      .then(result => {
          console.log(result)
      })
      .catch(err => 
          console.log("erreur lors de la création"))
    res.send('client créé' + res)
})

router.put('/', function(req, res, next) {
    res.send('client mod')
})

router.delete('/', function(req, res, next) {
    res.send('client supprimé')
})



module.exports = router;
