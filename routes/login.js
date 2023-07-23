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

    const password = req.body.password
    const username = req.body.username
    console.log(username + password)
    //Check if in DB then redirect : 
    const response = await fetch(`http://localhost:3000/client`, {method : 'GET'})
    response.json().then(clients => {
       for(const client of clients){
        console.log(client.prenom)
        console.log(username)
        console.log(client.prenom === username)
        if(client.prenom === username){
            res.redirect('/index')
            return
        } 
       }
       res.send('Client Non trouvé')
    }).catch(err => console.log('oups'+ err.message))
    
})

module.exports = router; 

