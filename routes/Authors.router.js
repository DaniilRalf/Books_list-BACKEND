const Router = require('express');
const router = new Router();
const AuthorsController = require('../controllers/Authors.controller')


router.get('/get_all', AuthorsController.getAll);
router.post("/get_by_id", AuthorsController.getById);
router.post('/create', AuthorsController.create);



module.exports = router;