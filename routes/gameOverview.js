const fetcher = require('../modules/fetcher.js');
const cleanTagsData = require('../modules/cleaningTags.js');
const fs = require('fs')

async function getGameOverview(req, res) {

    let data;

    const gameOverview = await fetcher.get(`https://api.rawg.io/api/games?genres=${req.params.slug}&page_size=40`);

    data = cleanTagsData(gameOverview);

    fs.writeFileSync(__dirname + '/../data/fetchedData.json', JSON.stringify(data));

    res.render("overview", {
        gameOverview: data
    });
}

module.exports = getGameOverview;