const Router = require('express');
const router = new Router();
const CountryController = require('../controllers/Country.controller')


router.get('/get_all', CountryController.getAll)
// router.post('/create', AuthorsController.create)



module.exports = router;