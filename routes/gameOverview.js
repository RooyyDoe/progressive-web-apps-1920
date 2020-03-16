const fetcher = require('../modules/fetcher.js');
const cleanTagsData = require('../modules/cleaningTags.js');
const sortingGameData = require('../modules/sortingGames.js');

async function getGameOverview(req, res) {
    const gameOverview = await fetcher.get(`https://api.rawg.io/api/games?genres=${req.params.slug}&page_size=40`);

    const cleanGameData = cleanTagsData(gameOverview);

    res.render("overview", {
        gameOverview: cleanGameData
    });
}

module.exports = getGameOverview;