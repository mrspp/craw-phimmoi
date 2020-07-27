const helpers = {};

helpers.gdriveplayerCrawler = function crawler(froms, to) {
  for (let page = from; page <= to; page++) {
    setTimeout(() => {
      console.log("Crawling " + page);
      axios
        .get(`https://database.gdriveplayer.me/movie.php?page=${page}`)
        .then((res) => {
          const $ = cheerio.load(res.data);
          for (let index = 2; index <= 26; index++) {
            try {
              let poster = $(
                `#t01 > tbody > tr:nth-child(${index}) > td:nth-child(2) > img`
              ).attr("src");
              let title = $(
                `#t01 > tbody > tr:nth-child(${index}) > td:nth-child(3) > b > a`
              ).text();
              let year = $(
                `#t01 > tbody > tr:nth-child(${index}) > td:nth-child(4) > b`
              ).text();
              let imdb = $(
                `#t01 > tbody > tr:nth-child(${index}) > td:nth-child(5) > b > a`
              ).text();
              let tmdb = $(
                `#t01 > tbody > tr:nth-child(${index}) > td:nth-child(6) > b > a`
              ).text();
              let movies = new movieSchema({
                poster: poster,
                title: title,
                year: parseInt(year) || 0,
                imdb: imdb,
                tmdb: parseInt(tmdb) || 0,
              });
              movies.save();
            } catch (error) {
              console.log(error);
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, page * 2000);
  }
};

helpers.phuongPhi = console.log("Phuong phi...");
module.exports = helpers;
