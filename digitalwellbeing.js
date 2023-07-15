window.setInterval(()=>{
    if ( document.querySelector('video') ) {
        document.querySelectorAll('video').forEach(video=>{
            video.pause();
            video.remove();
        });
}, 1);

/*-------------------------------------------------------------------------*/

window.setInterval( () => {
    const urlPatternToBlock = [
        'cnn.com' ||
        'search.google.com/search-console'
    ];

    for (const element of urlPatternToBlock) {
        if (window.location.href.includes(urlPatternToBlock)) {
            window.open("https://google.com/", "_self");
        }
    }
}, 1);

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
