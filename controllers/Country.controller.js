const { Author, Country } = require('../models/Models');

class CountryController {


    async getAll(req, res){
        try{
            const countrySearch = await Country.findAll({
                include: [Author]
            });
            res.json(countrySearch);
        } catch (e) {
            res.status(400).json(e)
        }
    }


    // async create(req, res){
    //     try {
    //         const {name} = req.body;
    //         const authorSearch = await Author.findOne({where: {name: name}});
    //         if (authorSearch){
    //             res.status(400).json('Даннй автор уже есть в списке');
    //             return;
    //         }
    //         const authorItem = await Author.create({name: name})
    //         res.json(authorItem);
    //     } catch (e) {
    //         res.status(400).json(e)
    //     }
    // };

}


module.exports = new CountryController();
