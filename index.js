require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const TutorialRouters = require('./routes/Tutorial.router');
const models = require('./models/Models');
// ----------IMPORTS----------------------------


// ----------APP--------------------------------
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use('/api', TutorialRouters);
// ----------APP--------------------------------


// ----------APP SATR---------------------------
const start = async () => {
    try {
        await sequelize.authenticate(); //подключение к БД
        await sequelize.sync({alter: true});  //сверяем БД с теми моделями что мы описали
        await app.listen(PORT, () => console.log(`SERVER START ON PORT - ${PORT}`));  //запуск сервера
    } catch (e) {
        console.log(`ERROR - ${e}`) //отлавливаем ошибку при подключении
    }
}
start();

app.get('/', (req ,res) => {
    res.json('test page');
})
// ----------APP SATR---------------------------

