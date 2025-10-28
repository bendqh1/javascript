Image blocking should be done at the browser level but I don't know a browser level way to block `alt` attributes of images so I block them with JavaScript in the following script.

## Digital Well Being

The following script removes videos, image alts and news websites.

```js
// ==UserScript==
// @name        digital_wellbeing
// @run-at      document-start
// @match       *://*/*
// ==/UserScript==

document.querySelectorAll('img').forEach(image => image.removeAttribute('alt'));

window.setInterval(()=>{
    if ( document.querySelector('video') ) {
        document.querySelectorAll('video').forEach(video=>{
            video.pause();
            video.remove();
        });
    }
}, 1);

if (
  document.querySelector('title')?.textContent.includes('News') ||
  document.querySelector('title')?.textContent.includes('news') ||
  document.querySelector('meta[name="title"]')?.content.includes('News') ||
  document.querySelector('meta[name="title"]')?.content.includes('news') ||
  document.querySelector('meta[name="description"]')?.content.includes('News') ||
  document.querySelector('meta[name="description"]')?.content.includes('news') ||
  document.querySelector('meta[name="tags"]')?.content.includes('News') ||
  document.querySelector('meta[name="tags"]')?.content.includes('news') ||
  /**/
  document.querySelector('title')?.textContent.includes('חדשות') ||
  document.querySelector('title')?.textContent.includes('החדשות') ||
  document.querySelector('meta[name="title"]')?.content.includes('חדשות') ||
  document.querySelector('meta[name="title"]')?.content.includes('החדשות') ||
  document.querySelector('meta[name="description"]')?.content.includes('חדשות') ||
  document.querySelector('meta[name="description"]')?.content.includes('החדשות') ||
  document.querySelector('meta[name="tags"]')?.content.includes('חדשות') ||
  document.querySelector('meta[name="tags"]')?.content.includes('החדשות')
) {
  window.open("https://google.com/", "_self");
}
```

### One may want to add the following modules

#### Block any particular website

```js
// Timely !!! //
if ( window.location.href.includes('search-console') ) { window.open("https://google.com/", "_self"); }
```

Or:

```js
window.setInterval( () => {
    const urlPatternToBlock = [
        'cnn',
        'search-console'
    ];

    for (let element of urlPatternToBlock) {
        if ( window.location.href.includes(urlPatternToBlock) ) {
            window.open("https://google.com/", "_self");
        }
    }
}, 2);
```
