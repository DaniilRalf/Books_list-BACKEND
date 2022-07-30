const {DataTypes} = require('sequelize'); //импортим типы данных из секвалайза
const sequelize = require('../db') //мпотрим настройки БД
// ----------IMPORTS----------------------------


    const Tutorial = sequelize.define("tutorial", {
        id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement:true},
        title: { type: DataTypes.STRING, defaultValue: null },
        description: { type: DataTypes.STRING, defaultValue: null },
        published: { type: DataTypes.BOOLEAN, defaultValue: false },
        img: { type: DataTypes.STRING, defaultValue: null}
    });

    const Author = sequelize.define("author", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
        name: {type: DataTypes.STRING, allowNull: false}
    });

    const Country = sequelize.define("country", {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
        name: {type: DataTypes.STRING, allowNull: false}
    });

    const AuthorTutorial = sequelize.define("author_tutorial", {
        id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement:true},
    });



    Tutorial.belongsToMany(Author, {through: 'author_tutorial'});
    Author.belongsToMany(Tutorial, {through: 'author_tutorial'});

    Country.hasMany(Author);
    Author.belongsTo(Country);



module.exports = { Tutorial, Author, AuthorTutorial, Country };
