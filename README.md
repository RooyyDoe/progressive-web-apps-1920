# Progressive Web Apps @cmda-minor-web 1920

Rebuilding [WAFS](https://github.com/RooyyDoe/web-app-from-scratch-1920) to a progressive web app.

## Table of contents

- [Install](#install)
- [Application description](#application-description)
- [Explanation](#explanation)
- [Conclusion](#conclusion)
- [Sources](#sources)
- [Credits](#credits)
- [Licence](#licence)

## Install

**Clone the repository of the project**

```
git clone https://github.com/RooyyDoe/progressive-web-apps-1920.git
```

**Navigate to the map**

```
cd progressive-web-apps-1920
```

**Install dependencies**

```
npm install 
```

**Run server in terminal**

```
npm run dev
```

Server running on **localhost:3000**

## Application description

In the start screen of my product users are presented with a list of all gaming genres. The user can select a genre out of this list that the user wants to know more about by clicking on it. The user is then directed to a new page where all the games within the selected genre are presented in a list in the same way as the genres were previously. The games within the selected genre are obtained using an RAWG API. The user is now able to select one of these games in the list to obtain more detailed information about it. When a certain game is selected, the user will be navigated to a new page with all sorts of details about the game.

## Explanation

For this course I needed to use different techniques to make my website perform better. My project does not have big size files, so these features will only apply small changes to the performance. I will test every feature that I am applying to my code and will explain what is happening and show the improvement of my application. When I am done testing I will give a conclusion of what has happend to my application at the end of all the improvements.

### Server Side Rendering

As first I have made the application server-side. On this way the browser can run the application with javascript turned off. I've tried to get every feature working in my application that I had made in the WAFS course. In the chrome browser you can make a **Audits** test that will run through the application and look for problems and will show how good/bad your browser will perform.

#### Cable internet (93.13 Mbps)

![Schermafdruk 2020-03-25 12 47 12](https://user-images.githubusercontent.com/40355914/77536165-2f8dd800-6e9c-11ea-9c6a-ea5203ca6142.png)

![Schermafdruk 2020-03-25 12 39 52](https://user-images.githubusercontent.com/40355914/77536177-3583b900-6e9c-11ea-812a-c25e97f53b1d.png)

#### WiFi (1.92 Mbps)

<details>
  <summary>WiFi Tests</summary>
  
  ![Schermafdruk 2020-03-25 13 30 04](https://user-images.githubusercontent.com/40355914/77536523-bfcc1d00-6e9c-11ea-86fc-aafbf296028c.png)
  
  ![Schermafdruk 2020-03-25 12 22 35](https://user-images.githubusercontent.com/40355914/77536357-80053580-6e9c-11ea-9ce5-cffe1213e18f.png)
</details>

### LazyLoading images

My first problem with the application was the rendering time of the images. On slow internet this could take up to around three minuts before they were loaded in. Ofcourse the website was usable without the images, but I wanted to fix this. I have implemented lazy loading into the "Genre" page and the "Overview" page to reduce the rendering time of the images.

#### Cable internet (93.13 Mbps)

![Schermafdruk 2020-03-26 13 17 21](https://user-images.githubusercontent.com/40355914/77646109-32ec9680-6f64-11ea-9d8a-4519389e0fa1.png)

![Schermafdruk 2020-03-26 13 16 27](https://user-images.githubusercontent.com/40355914/77646099-2f590f80-6f64-11ea-975d-575201187b8d.png)

#### WiFi (1.92 Mbps)

<details>
  <summary>WiFi Tests</summary>
  
![Schermafdruk 2020-03-26 13 22 54](https://user-images.githubusercontent.com/40355914/77646501-f2d9e380-6f64-11ea-8fa5-196689172f5e.png)

![Schermafdruk 2020-03-26 13 22 02](https://user-images.githubusercontent.com/40355914/77646496-eeadc600-6f64-11ea-9c9c-9fd1059273a5.png)
</details>

### Minifying 

I have used gulp to minify my files. I am using "gulp-clean-css", "gulp-uglify", "gulp-babel" to do this. On this way the files will be smaller and will load in better and faster for people with slower internet. Ofcourse aren't the files massive but you will see some difference between these files and the files from the first tests.

#### Cable internet (93.13 Mbps)

![Schermafdruk 2020-03-26 13 54 22](https://user-images.githubusercontent.com/40355914/77648981-5239f280-6f69-11ea-9176-8d57a89d7d36.png)

![Schermafdruk 2020-03-26 13 51 44](https://user-images.githubusercontent.com/40355914/77648992-55cd7980-6f69-11ea-913e-3ab7c1c64fc1.png)

#### WiFi (1.92 Mbps)

<details>
  <summary>WiFi Tests</summary>
  
![Schermafdruk 2020-03-26 13 44 18](https://user-images.githubusercontent.com/40355914/77648156-f91d8f00-6f67-11ea-8299-112f650ad7a4.png)

![Schermafdruk 2020-03-26 13 43 15](https://user-images.githubusercontent.com/40355914/77648139-f58a0800-6f67-11ea-8cb4-eb786be1a952.png)
</details>

### Gzip Compression



### Service Worker

## Conclusion


## Sources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - I mostly used this site to obtain my sources
- [API Docs](https://api.rawg.io/docs/) - Instructions on how to use this API.
- [Handlebars.js](https://handlebarsjs.com/guide/#what-is-handlebars) - Everything I needed to know about handlebars.
- [Service worker tut](https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7) - Best tutorial I've found on youtube that helped me out alot.
- [LazyLoading of images](https://imagekit.io/blog/lazy-loading-images-complete-guide/) - Good explanation about lazyloading with good examples aswell.

## Credits

- [Help from Wessel smit](https://github.com/WesselSmit)
- [Help from Stefan Gerrits](https://github.com/StefanGerrits2)

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
