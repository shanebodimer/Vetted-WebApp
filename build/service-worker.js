"use strict";var precacheConfig=[["/vetted/index.html","dcbbc941a8981860d1d9417d92ce7f20"],["/vetted/static/css/main.9fc70278.css","a7b18dce11c9387e09f37fbd86e82a46"],["/vetted/static/js/main.2cfabafe.js","2c839de1e5d9c816478a9aeaf6f665ed"],["/vetted/static/media/Avenir.eb3aa3d3.ttc","eb3aa3d3dfaaee7c3b9d342b0c1da9e0"],["/vetted/static/media/fa-brands-400.60652037.woff","6065203719447e8246b86d2d849821b4"],["/vetted/static/media/fa-brands-400.81e35852.woff2","81e35852f1c74faa7c66b4762a109d8c"],["/vetted/static/media/fa-brands-400.99fb42ae.eot","99fb42ae2d1caeeef928b88e424b02ab"],["/vetted/static/media/fa-brands-400.b1c71dc4.svg","b1c71dc4022e5dd80f01fa23658cc003"],["/vetted/static/media/fa-brands-400.cd7b4e46.ttf","cd7b4e46cd06a6dcaf787a454c71fc02"],["/vetted/static/media/fa-light-300.0145959f.woff","0145959f8f52958cf24da0eb15b7cd38"],["/vetted/static/media/fa-light-300.03e67a20.ttf","03e67a20f133f8e37095cc9f988e51a4"],["/vetted/static/media/fa-light-300.2ef6d99e.eot","2ef6d99e18876b039be154afdedabf01"],["/vetted/static/media/fa-light-300.dea6e205.woff2","dea6e2053ba43b37f5d29daf544a0973"],["/vetted/static/media/fa-light-300.e935c186.svg","e935c1861b8602b2dc6c669c42cf83ac"],["/vetted/static/media/fa-regular-400.12c6ff70.ttf","12c6ff700b23c72480819b939a40198c"],["/vetted/static/media/fa-regular-400.5b1536b4.svg","5b1536b4f63d819f8fa413917073926f"],["/vetted/static/media/fa-regular-400.5f838fc8.woff2","5f838fc8f38524d4b71adedfaddb2ede"],["/vetted/static/media/fa-regular-400.6e684aa4.woff","6e684aa45636f8af27fa3d6db3bcd246"],["/vetted/static/media/fa-regular-400.759ed07e.eot","759ed07eb34028d659e7e52934affebb"],["/vetted/static/media/fa-solid-900.006cf3b7.ttf","006cf3b7c239a0b2845c25e7665b4fbb"],["/vetted/static/media/fa-solid-900.5cea46da.woff","5cea46da0b5bdbea3a0503ec0f55a06e"],["/vetted/static/media/fa-solid-900.9760d404.svg","9760d404c933f832702cd784072b5925"],["/vetted/static/media/fa-solid-900.ca3a3491.woff2","ca3a3491ce9b0c4028f7bb97510dfc0b"],["/vetted/static/media/fa-solid-900.d92b3871.eot","d92b387165a85a5861108075d1595357"],["/vetted/static/media/icon.8f566165.png","8f5661651d797e15c00a12d931743b08"],["/vetted/static/media/logo.cf443344.png","cf443344b9e0f2025caa960a829368b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var n="/vetted/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});