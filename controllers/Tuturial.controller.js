const { Tutorial, Author } = require('../models/Models');
const {where} = require("sequelize");

class TuturialController {



    async getAll(req, res){
        try {
            const booksAll = await Tutorial.findAll();
            res.json(booksAll);
        } catch (e) {
            res.status(400).json({message: e})
        }
    };


    async create(req, res){
        try {
            const {title, description, author} = req.body;
            const bookSearch = await Tutorial.findOne({where: {title: title}});
            if (bookSearch){
                res.status(400).json('Данная книга уже есть в списке');
                return;
            }
            const bookItem = await Tutorial.create({title: title, description: description})
            res.json(bookItem);
        } catch (e) {
            res.status(400).json(e)
        }
    };







    async authorcreate(req, res){
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


module.exports = new TuturialController();
