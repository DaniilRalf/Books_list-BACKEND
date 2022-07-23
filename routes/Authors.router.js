const Router = require('express');
const router = new Router();
const AuthorsController = require('../controllers/Authors.controller')


router.get('/get_all', AuthorsController.getAll)
router.post('/create', AuthorsController.create)



module.exports = router;