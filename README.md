# Web App From Scratch @cmda-minor-web 1819

The whole process of Web App From Scratch will be documented here!

## Table of contents

- [To Do](#to-do-)
- [Description](#description-)
- [Usage](#usage)
  - [Packages and Technologies](#packages-and-technologies)
- [API](#api)
- [Sources](#sources)
- [Credits](#credits)
- [Licence](#licence)

## To Do

This is a list of things I want to do in this course:

### Week One

Live link: [Demo](https://rooyydoe.github.io/progressive-web-apps-1920/week1/)

- [x]

### Week Two

Live link: [Demo](https://rooyydoe.github.io/progressive-web-apps-1920/week2/)

- [X]

### Week Three

Live link: [Demo](https://rooyydoe.github.io/progressive-web-apps-1920/week3/)

- [x]

## Description

In the start screen of my product users are presented with a list of all gaming genres. The user can select a genre out of this list that the user wants to know more about by clicking on it. The user is then directed to a new page where all the games within the selected genre are presented in a list in the same way as the genres were previously. The games within the selected genre are obtained using an RAWG API. The user is now able to select one of these games in the list to obtain more detailed information about it. When a certain game is selected, the user will be navigated to a new page with all sorts of details about the game.

## Usage

**Clone the repository of the project**

```
git clone https://github.com/RooyyDoe/progressive-web-apps-1920.git
```

**Run code**

```
Run the index.html into your browser
```

(Live demo if needed)

**Demo** is also live at: **Still Loading**

## API

The data that I will be using for my applicatipon is comming directly come out of the [RAWG API](https://rawg.io/). This is the largest open video games database that there is. **RAWG** is sharing around 350,000+ games, search, and machine learning recommendations with the world.

This API is working with pagination, this will mean that I will get only 20 results when I make a call. This also can be extended by `page_size`. This call will be to heavy to render and will slow down the productivity of the application by big numbers. That's why I am going to use a `loadMore` function.

---

In the **Genre page** I am using this API endpoint:

> https://api.rawg.io/api/genres

This will be returning the following data:

<details>
 <summary>Genre page</summary>
 
 ```javascript
 
 {
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
    "id": 0,
    "name": "string",
    "slug": "string",
    "games_count": 0,
    "image_background": "http://example.com"
    }
  ]
}
 
 ```
 
</details>

---

In the **Game overview page** I am using this API endpoint:

> https://api.rawg.io/api//games?genres=<string>

This will be returning the following data:

<details>
 <summary>Game overview page</summary>
 
 ```javascript
 
 {
"count": 0,
"next": "http://example.com",
"previous": "http://example.com",
"results": [
    {
    "id": 0,
    "slug": "string",
    "name": "string",
    "released": "2020-02-10",
    "tba": true,
    "background_image": "http://example.com",
    "rating": 0,
    "rating_top": 0,
    "ratings": { },
    "ratings_count": 0,
    "reviews_text_count": "string",
    "added": 0,
    "added_by_status": { },
    "metacritic": 0,
    "playtime": 0,
    "suggestions_count": 0
    }
  ]
}
 
 ```
 
</details>

---

In the **Detail page** I am using this API endpoint:

> https://api.rawg.io/api/games/{id}

This will be returning the following data of the game:

<details>
 <summary>Detail page</summary>
 
 ```javascript
 
 {
  "id": 0,
  "slug": "string",
  "name": "string",
  "name_original": "string",
  "description": "string",
  "metacritic": 0,
  "released": "2020-02-10",
  "tba": true,
  "updated": "2020-02-10T11:09:20Z",
  "background_image": "http://example.com",
  "background_image_additional": "string",
  "website": "http://example.com",
  "rating": 0,
  "rating_top": 0,
  "ratings": { },
  "reactions": { },
  "added": 0,
  "added_by_status": { },
  "playtime": 0,
  "screenshots_count": 0,
  "movies_count": 0,
  "creators_count": 0,
  "achievements_count": 0,
  "parent_achievements_count": "string",
  "reddit_url": "string",
  "reddit_name": "string",
  "reddit_description": "string",
  "reddit_logo": "http://example.com",
  "reddit_count": 0,
  "twitch_count": "string",
  "youtube_count": "string",
  "reviews_text_count": "string",
  "ratings_count": 0,
  "suggestions_count": 0,
  "alternative_names": [
  "string"
  ],
  "metacritic_url": "string",
  "parents_count": 0,
  "additions_count": 0,
  "game_series_count": 0
}
 
 ```
 
</details>

---

## Sources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - I mostly used this site to obtain my sources
- [API Docs](https://api.rawg.io/docs/) - Instructions on how to use this API.
- [Handlebars.js](https://handlebarsjs.com/guide/#what-is-handlebars) - Everything I needed to know about handlebars.
- [Routie.js](http://projects.jga.me/routie/) - Everything I needed to know about Routie
- [Sorting A - Z](https://stackoverflow.com/questions/8900732/sort-objects-in-an-array-alphabetically-on-one-property-of-the-array) - Sorting an object in an array on alphabetical A - Z and Z - A.
- [Sorting eventlistener](https://stackoverflow.com/questions/51033185/addeventlistener-onchange-dropdown-selected-value-javascript) - How I got my value into a eventlistener.
- [.map, .filter, .reduce](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) - Explained so I could understand.

## Credits

- [Help from Thijs Spijker](https://github.com/iSirThijs)
- [Help from Wessel smit](https://github.com/WesselSmit)
- [Help from Sjors evenleens](https://github.com/Choerd)
- [Help from Menno](https://github.com/Mennauu)

# License

More information over [License](https://help.github.com/en/articles/licensing-a-repository)

[MIT](https://github.com/RooyyDoe/web-app-from-scratch-1920/blob/master/LICENSE.txt) © [Roy Kuijper](https://github.com/RooyyDoe)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
