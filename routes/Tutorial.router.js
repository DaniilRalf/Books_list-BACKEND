const Router = require('express');
const router = new Router();
const TuturialController = require('../controllers/Tuturial.controller')


// Create a new Tutorial
router.post("/", TuturialController.create);

// Retrieve all Tutorials
router.get("/", TuturialController.findAll);




module.exports = router;