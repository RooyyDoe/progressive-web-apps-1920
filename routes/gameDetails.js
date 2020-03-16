const fetcher = require('../modules/fetcher.js');

async function getGameOverview(req, res) {
    const gameDetails = await fetcher.get(`https://api.rawg.io/api/games/${req.params.slug}`);

    res.render("details", {
        gameDetails: gameDetails
    });
}

module.exports = getGameOverview;