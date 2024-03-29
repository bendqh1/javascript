// ==UserScript==
// @name        digital_wellbeing
// @run-at      document-start
// @match       *://*/*
// ==/UserScript==

window.setInterval(()=>{
    if ( document.querySelector('video') ) {
        document.querySelectorAll('video').forEach(video=>{
            video.pause();
            video.remove();
        });
    }
}, 1);

/*-------------------------------------------------------------------------*/

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

if ( window.location.href.includes('nws') ) {window.open("https://google.com/", "_self");}

// Timely !!! //
if ( window.location.href.includes('search-console') ) { window.open("https://google.com/", "_self"); }

/*-------------------------------------------------------------------------*/

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
