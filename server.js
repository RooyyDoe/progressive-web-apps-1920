const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(express.static("static"));

app.set("view engine", "ejs");
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set("views", "views");

app.get("/", async (req, res) => {
  const response = await fetch('https://api.rawg.io/api/genres');
  const data = await response.json();
  const genres = data;

  console.log(genres);

  res.render("genres", {
    title: "Genres",
    genres
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
