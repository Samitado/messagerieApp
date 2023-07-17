const express = require('express');
const router = express.Router();
const {PATH_HTML} = require('../public/utils/constantes');

router.get('/', function(req, res, next) {
    res.redirect('/login')
});

router.get('/login', function(req, res, next){
    res.sendFile(PATH_HTML + '\\login.html');
    
})

router.post('/login', function(req, res, next){
    res.redirect('/index')
})

module.exports = router; 

