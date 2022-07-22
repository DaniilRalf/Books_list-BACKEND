const Router = require('express');
const router = new Router();
const TuturialController = require('../controllers/Tuturial.controller')



// Finde all Tutorials
router.get("/get_all", TuturialController.getAll );

// Create a new Tutorial
router.post("/create", TuturialController.create);




// Create a new Tutorial
router.post("/authorcreate", TuturialController.authorcreate);

module.exports = router;
