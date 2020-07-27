const axios = require('axios');
const cheerio = require('cheerio');
//const mongoose = require('mongoose');

//KẾT NỐI VÀO CƠ SỞ DỮ LIỆU
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//ĐÃ KẾT NỐI

axios.get('https://database.gdriveplayer.me/movie.php?page=1')
    .then(res => {
        const $ = cheerio.load(res.data)
        //console.log(res.data);
        //$("#t01 > tbody")[0].children.map(item => console.log(item))
        for (let index = 1; index <= 25; index++) {
            console.log($(`#t01 > tbody > tr:nth-child(${index}) > td:nth-child(5) > b > a`).text());
            console.log($(`#t01 > tbody > tr:nth-child(${index}) > td:nth-child(6) > b > a`).text());

        }
    })
    .catch(err => {
        console.error(err);
    })

