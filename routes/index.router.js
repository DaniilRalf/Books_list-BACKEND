const Router = require('express');
const router = new Router();

const TutorialRouter = require('./Tutorial.router');
const AuthorsRouter = require('./Authors.router');


router.use('/books', TutorialRouter);
router.use('/authors', AuthorsRouter);



module.exports = router;