const express = require("express");
const hbs = require('express-handlebars');
// const minifyHTML = require('express-minify-html-2');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public/');

app.use('/', express.static(publicPath))

// app.use('/', (req, res, next) => {
//   res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 * 60);
//   next();
// });

// app.use(minifyHTML({
//   override: true,
//   exception_url: false,
//   htmlMinifier: {
//     removeComments: true,
//     collapseWhitespace: true,
//     collapseBooleanAttributes: true,
//     removeAttributeQuotes: true,
//     removeEmptyAttributes: true,
//     minifyJS: true
//   }
// }))

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
const sortOverview = require('./routes/sortOverview.js')

// Get routes
app.get("/", genres)

app.get("/genres/:slug", gameOverview)

app.get("/details/:slug", gameDetails)

app.post("/sort/:id", sortOverview)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
