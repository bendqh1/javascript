Note how the syntax is sorted here with extra white spaces and extra line breaks.

```js
if (
   ( !window.location.href.includes('cnn') )
   &&
   ( !window.location.href.includes('sitepoint') )
   &&
   ( !window.location.href.includes('ynet') )
   &&
   (
   document.querySelector('title')?.textContent.toLowerCase().includes('news') ||
   document.querySelector('meta[name="title"]')?.content.toLowerCase().includes('news') ||
   document.querySelector('meta[name="description"]')?.content.toLowerCase().includes('news') ||
   document.querySelector('meta[name="tags"]')?.content.toLowerCase().includes('news')
   ||
   document.querySelector('title')?.textContent.includes('חדשות') ||
   document.querySelector('title')?.textContent.includes('החדשות') ||
   document.querySelector('meta[name="title"]')?.content.includes('חדשות') ||
   document.querySelector('meta[name="title"]')?.content.includes('החדשות') ||
   document.querySelector('meta[name="description"]')?.content.includes('חדשות') ||
   document.querySelector('meta[name="description"]')?.content.includes('החדשות') ||
   document.querySelector('meta[name="tags"]')?.content.includes('חדשות') ||
   document.querySelector('meta[name="tags"]')?.content.includes('החדשות')
   )
   ) {
         window.open("https://www.ynet.co.il/news/category/184", "_self");
   }
```
