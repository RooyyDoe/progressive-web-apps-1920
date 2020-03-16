const express = require("express");
const hbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static("public/"))

// template engine
app.set("view engine", "hbs")
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials/'
}))

// Data routes
const genres = require('./routes/genres.js')
const gameOverview = require('./routes/gameOverview.js')
const gameDetails = require('./routes/gameDetails.js')

// Get routes
app.get("/", genres)

app.get("/genres/:slug", gameOverview)

app.get("/details/:slug", gameDetails)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
