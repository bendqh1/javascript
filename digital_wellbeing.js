window.setInterval( () => {
  if ( document.querySelectorAll('video') ) {
    document.querySelectorAll('video').forEach(video => {
      video.pause();
    });
  };
}, 1);

////////////////////////////////////////////////////////////////////////////
// Block specific website/s
////////////////////////////////////////////////////////////////////////////

// Add in the script call itself this structure:

// @match *://DOMAIN_TLD_1/*/*
/* if ( window.location.href.includes('https://DOMAIN_TLD_1/search-console/about') ) { window.open("https://google.com/", "_self"); } */
