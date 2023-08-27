const express = require('express');
const router = express.Router();
const {PATH_HTML} = require('../public/utils/constantes');
const { post } = require('../api/routes/Client.route');

router.post('/', async function(req, res){
    const password = req.body.nMdp
    const username = req.body.nUser

    console.log(username + password)

    const response = await fetch(`http://localhost:3000/client`,
        {method : 'POST',
            body : {
                "nom" : username,
                "prenom" : username,
                "password" : password
            } })
    response.then(reponse => {
        console.log(reponse)
        res.send(('Client Ajouté'))

    }).catch(err => {
        console.log(err)
    })
})

module.exports = router;

