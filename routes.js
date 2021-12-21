//Import Express module et router
let express = require('express');
let router = express.Router();

//Utilisation Style MVC
let mainController = require('./controllers/mainController');
//Partie Site
router.get('/', mainController.Redirect);
router.get('/Site', mainController.Site);
router.post('/Site', mainController.SiteAdd);
router.get('/Site/Listing', mainController.SiteListing);

//Exports router
module.exports = router;