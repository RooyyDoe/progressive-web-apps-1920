// tutorial used: https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7

const cacheName = 'site-static-v1'
const dynamicCacheName = 'site-dynamic-v1'
const assets = [
    '/',
    '/js/sort.js',
    '/js/swRegister.js',
    '/css/stylesheet.css',
    '/images/flash.png',
    '/offline',
    // '/dist/css/stylesheet.min.css',
    // '/dist/js/main.min.js',
    'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
];

// Install service worker
self.addEventListener('install', event => {
    // console.log('service worker is installed.');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('caching shell assets');
                // Cashes all predevined cashe on install.
                cache.addAll(assets);
            }))
})

// Activate service worker
self.addEventListener('activate', event => {
    console.log('service worker has been activated')
    event.waitUntil(
        // returns a array with keys (Amount of cashe versions)
        caches.keys().then(keys => {
            // console.log(keys)

            // Basicly deletes old cashe in storage.

            // takes an array with promises and then when each of thoes
            // promises resolve then this is going to resolve aswell.
            return Promise.all(keys
                // if the names are not equal it will return true.
                // and stays in the array. otherways it will remove it.
                .filter(key => key !== cacheName && key !== dynamicCacheName)
                // mapping the array with all the promises and deletes
                // the cashes. this returns a promise.
                .map(key => caches.delete(key))
            )
        })
    )
})

// Fetch events
self.addEventListener('fetch', event => {
    // console.log('fetch event', event);
    event.respondWith(
        // If you browser through the application it will fire a fetch call and this will look
        // if the fetch call is existing it will automaticly return this. but if it is not it
        // will carries on with the fetch for that request.
        caches.match(event.request)
            .then(cacheRes => {
                // It will check if there is any static cashe and then all the other fetch calls
                // will be saved into the dynamicCasheName. The static cashe from casheRes will be
                // left out of the 'dynamicCasheName'
                return cacheRes || fetch(event.request).then(fetchRes => {
                    return caches.open(dynamicCacheName).then(cache => {
                        // This will put the new response into the dynamicCasheName
                        cache.put(event.request.url, fetchRes.clone());
                        return fetchRes;
                    })
                });
            }).catch(() => caches.match('/offline'))
    )
});