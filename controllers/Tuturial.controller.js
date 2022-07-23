const { Tutorial, Author, AuthorTutorial } = require('../models/Models');

class TuturialController {



    async getAll(req, res){
        try {
            const booksAll = await Tutorial.findAll({
                include: [Author]
            });
            res.json(booksAll);
        } catch (e) {
            res.status(400).json({message: e})
        }
    };


    async create(req, res){
        try {
            const {title, description, authorId} = req.body;
            const bookSearch = await Tutorial.findOne({where: {title: title}});
            if (bookSearch){
                res.status(400).json('Данная книга уже есть в списке');
                return;
            }

            const bookItem = await Tutorial.create({title: title, description: description});
            const authorItem = await Author.findOne({where: {id: authorId}});
            await bookItem.addAuthor(authorItem);
            res.json(bookItem);
        } catch (e) {
            res.status(400).json(e)
        }
    };



    async teest(req, res){
        const tutorial = await Tutorial.findOne({where: {id: 3}, include: [Author]});

        // //Удаление связи МНОГИЕ-КО-МНОГИМ
        // const author_tutorial = await AuthorTutorial.findOne({
        //     where: {
        //         tutorialId: 3,
        //         authorId: 1
        //     }
        // }).then(item => {
        //     item.destroy();
        // })
        //
        //
        // //Добавление существующего автора при создании книги МНОГИЕ-КО-МНОГИМ
        // //Похожее можно сделать при создании и книги и автора сразу
        // const bookItem = await Tutorial.create({title: title, description: description})
        // const authorItem = await Author.findOne();
        // await bookItem.addAuthor(authorItem);
        //
        //
        // //Поиск книг и авторов и фильтрация, вместе со связами МНИГИЕ-КО-МНОГИМ
        // const test = await Author.findAll(
        //     {include: [Tutorial]}
        // )
        // const test2 = await Tutorial.findAll(
        //     {include: [Author],}
        // )
        // const test3 = test2.filter(item => {
        //     return item.authors.length == 0;
        // })

        res.json('');
    };
}


module.exports = new TuturialController();
