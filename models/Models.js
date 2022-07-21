const {DataTypes} = require('sequelize'); //импортим типы данных из секвалайза
const sequelize = require('../db') //мпотрим настройки БД
// ----------IMPORTS----------------------------


    const Tutorial = sequelize.define("tutorial", {
        title: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        published: { type: DataTypes.BOOLEAN }
    });


module.exports = { Tutorial };