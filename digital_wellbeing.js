////////////////////////////////////////////////////////////////////////////
// Block news websites as much as possible
////////////////////////////////////////////////////////////////////////////

if (
  /* document.querySelector('title').textContent.includes('Breaking News') || */
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
  document.querySelectorAll('video').forEach(video => {
    video.pause();
  });
}, 1);

////////////////////////////////////////////////////////////////////////////
// Block specific website/s
////////////////////////////////////////////////////////////////////////////

window.setInterval( () => {
    const urlPatternToBlock = [
        'cnn.com'
    ];

    for (const element of urlPatternToBlock) {
        if (window.location.href.includes(urlPatternToBlock)) {
            window.open("https://google.com/", "_self");
        }
    }
}, 1);

/*
If a website from those in the array isn't blocked,
  it's probably because of a redirect,
    so,
      add it to the user script manager with a @match command and block locally:
        if ( window.location.href.includes('https://search.google.com/search-console/about') ) { window.open("https://google.com/", "_self"); }
*/
