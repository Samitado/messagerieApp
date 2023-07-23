const express = require('express');
const router = express.Router();
const {PATH_HTML} = require('../public/utils/constantes');
const { post } = require('../api/routes/Client.route');

router.get('/', function(req, res, next) {
    res.redirect('/login')
});

router.get('/login', function(req, res, next){
    res.sendFile(PATH_HTML + '\\login.html');
    
})

router.post('/login', async function(req, res, next){
    //il faut que je récupère deux données : 
    //l'username & le password
  //console.log(req.body)
  //
  //const response = await fetch('http://localhost:3000/client', 
  //{
  //    body:JSON.stringify(req.body), 
  //    method: 'POST',
  //    headers: {
  //        'Content-Type' : 'application/json'
  //    }
  //})
  //const data = await response.json()

  //console.log(data)

    res.redirect('/index')
})

module.exports = router; 

