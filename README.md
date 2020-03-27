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

In the start screen of my product, users are presented with a list of all gaming genres. Out of this list the user can select a genre that the user wants to know more about by clicking on it. The user is then directed to a new page where all the games within the selected genre are presented in a list in the same way as the genres were previously. The games within the selected genre are obtained using an RAWG API. The user is now able to select one of these games in the list to obtain more detailed information about it. When a certain game is selected, the user will be navigated to a new page with all sorts of details about the game.

## Explanation

For this course I needed to use different techniques to make my website perform better. My project does not have big size files, so these features will only apply small changes to the performance. I will test every feature that I am applying to my code and will explain what is happening and show the improvement of my application. When I am done testing I will give a conclusion of what has happened to my application at the end of all the improvements.

### Server Side Rendering

As first I have made the application server-side. In this way the browser can run the application with javascript turned off. I have tried to get every feature working in my application that I had made in the WAFS course. In the chrome browser you can make an **Audits** test that will run through the application and look for problems and will show how good/bad your browser will perform.

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

My first problem with the application was the rendering time of the images. With slow internet this could take up to around three minutes before they were loaded in. Ofcourse the website was usable without the images, but I wanted to fix this. I have implemented lazy loading into the "Genre" page and the "Overview" page to reduce the rendering time of the images.

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

I have used gulp to minify my files. I am using "gulp-clean-css", "gulp-uglify", "gulp-babel" to do this. In this way the files will be smaller and will load in better and faster for people with slower internet. Ofcourse the files are not massive, but you will see some difference between these files and the files from the first tests.

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

All the static files need to be as small as possible. This will decrease the download time of my website. I have used Gulp Gzip for the last compression of my website. Gzip is used to increase the chane of any of the compression types to be supported by the browser.

#### Cable internet (93.13 Mbps)

![Schermafdruk 2020-03-26 14 13 01](https://user-images.githubusercontent.com/40355914/77650765-33892b00-6f6c-11ea-9b82-db45664ba4a0.png)

![Schermafdruk 2020-03-26 14 12 25](https://user-images.githubusercontent.com/40355914/77650777-35eb8500-6f6c-11ea-9788-6fedaf485137.png)

### Service Worker

I have used a service worker to handle the offline mode of my application. Users are able to load in my website with no internet if they have cashed pages. Otherwise they will see an offline page where they can refresh the page and get back to the Homepage, but this will only work when the users internet is back.

#### Cable internet (93.13 Mbps)

![Schermafdruk 2020-03-26 14 29 48](https://user-images.githubusercontent.com/40355914/77652316-574d7080-6f6e-11ea-9cac-4945106e740c.png)

![Schermafdruk 2020-03-26 14 29 01](https://user-images.githubusercontent.com/40355914/77652326-59173400-6f6e-11ea-9715-586af7daf065.png)

#### WiFi (1.92 Mbps)

<details>
  <summary>WiFi Tests</summary>
  
![Schermafdruk 2020-03-26 14 34 19](https://user-images.githubusercontent.com/40355914/77652667-e8244c00-6f6e-11ea-9777-aa8da245397a.png)

![Schermafdruk 2020-03-26 14 33 29](https://user-images.githubusercontent.com/40355914/77652684-ec506980-6f6e-11ea-9a56-617a332b5570.png)
</details>

## Conclusion

### Lazy Loading

When I added lazy loading into my application the rendering time of a page became way lower than when you load in all the images at once. With or without good internet it is faster. You will see the biggest difference when you compare the ones with bad internet. I think this is a hacky way to reduce lagg on your application, but if it works it works.

### Minify files

I have had some issues with gulp, mainly because I wanted to use "Sourcemaps" but I did not get it to work properly so I have commented it in my code for now. I also had an error with my code that it was not in the good 'code style' and for this I have used babel to help me get rid of this error. 

I think I could have done a better job at making the code look more clean than it is right now. I wanted to compress the files even more with "gulp-concat", but when I did this and wrote the files to my browser it gave some errors. So I have minified every file seperately. 

The files are compressed. I cannot really see if it does something with the rendering of my application, but the KB's are less than when you run the normal files, so I guess it worked!

### Service worker

When I wanted to test the service worker in the "Audits" it did not work. But it only worked when I did not had my internet cable in my laptop. So if you want to see the best result you should watch the screenshot in the situation with bad internet. It also kept screwing my service worker over. When I ran the tests it would set the service worker to redundant and I did not know how to fix that.

But my service worker works perfectly and the user will be able to see content if they have cashed it before turning the internet off.

And the offline page would look something like this:

<img width="1440" alt="Schermafdruk 2020-03-26 14 53 40" src="https://user-images.githubusercontent.com/40355914/77654646-9af5a980-6f71-11ea-9a3b-f4cd2f0955df.png">


## Sources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - I mostly used this site to obtain my sources
- [API Docs](https://api.rawg.io/docs/) - Instructions on how to use this API.
- [Handlebars.js](https://handlebarsjs.com/guide/#what-is-handlebars) - Everything I needed to know about handlebars.
- [Service worker tut](https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7) - Best tutorial I have found on youtube that helped me out a lot.
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
