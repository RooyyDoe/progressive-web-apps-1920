const fs = require('fs')

module.exports = (req, res) => {
    const sortMethod = req.params.id;

    const data = JSON.parse(fs.readFileSync(__dirname + '/../data/fetchedData.json', {
        encoding: 'utf8'
    }))

    switch (sortMethod) {
        case "a":
            // Sorts alphabetical A - Z
            data.results.sort((highest, lowest) => highest.name.localeCompare(lowest.name.toLowerCase()))
            break
        case "z":
            // Sorts alphabetical Z - A
            data.results.sort((highest, lowest) => lowest.name.localeCompare(highest.name.toLowerCase()))
            break
        case "hoog":
            // Sorts on highest rating
            data.results.sort((highest, lowest) => lowest.rating - highest.rating)
            break
        case "laag":
            // Sorts on lowest rating
            data.results.sort((highest, lowest) => highest.rating - lowest.rating)
            break
    }

    res.render("overview", {
        gameOverview: data
    });
}