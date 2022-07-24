const Router = require('express');
const router = new Router();
const TuturialController = require('../controllers/Tuturial.controller')


router.get("/get_all", TuturialController.getAll );
router.post("/get_by_id", TuturialController.getById );
router.post("/create", TuturialController.create);


module.exports = router;
