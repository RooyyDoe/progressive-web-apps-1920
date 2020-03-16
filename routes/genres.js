const fetcher = require('../modules/fetcher.js');

async function getGenres(req, res) {
    const genres = await fetcher.get('https://api.rawg.io/api/genres');

    res.render("genres", {
        genres: genres
    });
}

module.exports = getGenres;