const { Tutorial, Author, AuthorTutorial, Country} = require('../models/Models');

class AuthorsController {


    async getAll(req, res){
        try{
            const authorSerch = await Author.findAll({
                include: [Tutorial, Country]
            });
            res.json(authorSerch);
        } catch (e) {
            res.status(400).json(e)
        }
    }


    async getById(req,  res){
        try {
            const {id} = req.body;
            const author = await Author.findOne({
                where: {id: id},
                include: [Country, Tutorial]
            })
            res.json(author);
        } catch (e) {
            res.status(400).json({message: e})
        }
    }


    async create(req, res){
        try {
            const {name} = req.body;
            const authorSearch = await Author.findOne({where: {name: name}});
            if (authorSearch){
                res.status(400).json('Даннй автор уже есть в списке');
                return;
            }
            const authorItem = await Author.create({name: name})
            res.json(authorItem);
        } catch (e) {
            res.status(400).json(e)
        }
    };

}


module.exports = new AuthorsController();
