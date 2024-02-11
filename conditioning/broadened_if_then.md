```js
if (
   ( !window.location.href.includes('github') )
   &&
   ( !window.location.href.includes('benaharoni') )
   &&
   (
   document.querySelector('title')?.textContent.toLowerCase().includes('a') ||
   document.querySelector('meta[name="tags"]')?.content.toLowerCase().includes('b')
   ||
   document.querySelector('title')?.textContent.includes('c) ||
   document.querySelector('title')?.textContent.includes('d') 
   )
   ) {
         // Do stuff
   }
```
