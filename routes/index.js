let express = require('express');
let router = express.Router();
const {PATH_HTML} = require('../public/utils/constantes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(PATH_HTML + 'index.html');
});

module.exports = router;