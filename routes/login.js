let router = express.Router();
const {PATH_HTML} = require('../public/utils/constantes');

router.get('/', function(req, res, next) {
    res.sendFile(PATH_HTML + 'login.html');
});

module.exports = router; 