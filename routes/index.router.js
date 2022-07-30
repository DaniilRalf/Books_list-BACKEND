const Router = require('express');
const router = new Router();

const TutorialRouter = require('./Tutorial.router');
const AuthorsRouter = require('./Authors.router');
const CountryRouter = require('./Country.router');


router.use('/books', TutorialRouter);
router.use('/authors', AuthorsRouter);
router.use('/countries', CountryRouter);



module.exports = router;