const firstLinkElement = document.querySelector('link');

if (firstLinkElement.href.includes('https://search.google.com/search-console/about')) {
 window.open("https://google.com/", "_self");   
}
