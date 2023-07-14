// ==UserScript==
// @name        digital_wellbeing
// @run-at      document-start
// @match       *://*/*
// ==/UserScript==

////////////////////////////////////////////////////////////////////////////
// Block news websites as much as possible
////////////////////////////////////////////////////////////////////////////

if (
  document.querySelector('meta[name="title"]')?.content.includes('News') ||
  document.querySelector('meta[name="title"]')?.content.includes('news') ||
  document.querySelector('meta[name="description"]')?.content.includes('News') ||
  document.querySelector('meta[name="description"]')?.content.includes('news') ||
  document.querySelector('meta[name="tags"]')?.content.includes('News') ||
  document.querySelector('meta[name="tags"]')?.content.includes('news') ||
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

/*
  window?.location.href.includes('news') ||
  window?.location.href.includes('News') ||
  window?.location.href.includes('חדשות') ||
  window?.location.href.includes('החדשות') ||
*/

////////////////////////////////////////////////////////////////////////////
// Block videos autoplay
////////////////////////////////////////////////////////////////////////////

window.setInterval( () => {
  document.querySelectorAll('video').forEach(anyVideo => {
    anyVideo.pause();
  });
}, 1);

////////////////////////////////////////////////////////////////////////////
// Block specific website/s
////////////////////////////////////////////////////////////////////////////

window.setInterval( () => {
    const urlPatternToBlock = [
        'https://search.google.com/search-console'
    ];

    for (const element of urlPatternToBlock) {
        if (window.location.href.includes(urlPatternToBlock)) {
            window.open("https://google.com/", "_self");
        }
    }
}, 1);
