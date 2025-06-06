**Change `example.com` accordingly.**

## Way 1

```js
// ==UserScript==
// @name         x
// @match        https://example.com
// @run-at       document-start

// ==/UserScript==

window.setInterval( ()=>{
    document.querySelector('[id^="radix-\\:r"] > div > div > a').click();
}, 100);

window.setInterval( ()=>{
    document.querySelector('[id^="radix-«r"] > div > div > a').click();
}, 100);
```

## Way 2

```js
// ==UserScript==
// @name         x
// @match        https://example.com
// @run-at       document-start

// ==/UserScript==

const mySelectors = [
  '#radix-\\:ra\\: > div > div > a',
  '#radix-\\:rb\\: > div > div > a',
  '#radix-\\:rc\\: > div > div > a',
  '#radix-\\:rd\\: > div > div > a',
  '#radix-\\:re\\: > div > div > a',
  '#radix-\\:rf\\: > div > div > a',
  '#radix-\\:rg\\: > div > div > a',
  '#radix-\\:rh\\: > div > div > a',
  '#radix-\\:ri\\: > div > div > a',
  '#radix-\\:rj\\: > div > div > a',
  '#radix-\\:r1\\: > div > div > a',
  '#radix-\\:r2\\: > div > div > a',
  '#radix-\\:r3\\: > div > div > a',
  '#radix-\\:r4\\: > div > div > a',
  '#radix-\\:r5\\: > div > div > a',
  '#radix-\\:r6\\: > div > div > a',
  '#radix-\\:r7\\: > div > div > a',
  '#radix-\\:r8\\: > div > div > a',
  '#radix-\\:r9\\: > div > div > a',
  '#radix-\\:r10\\: > div > div > a'
];

let matchedElement = null;

for (const selector of mySelectors) {
  matchedElement = document.querySelector(mySelectors);
  if (matchedElement) {
    break; // If an element is found, stop the loop
  }
}

if (matchedElement) {
  matchedElement.click();
};
```

## Alternative approach

```js
## Didn't work 1

```js
// ==UserScript==
// @name         x
// @match        https://example.com
// @run-at       document-start

// ==/UserScript==

window.open("https://google.com/", "_self");
window.open("https://example.com/", "_self");
```

## If none works

Try this:

```js
// ==UserScript==
// @name         x
// @match        https://example.com
// @run-at       document-start

// ==/UserScript==
alert("Hi");
```

If it still doesn't work, try to enable `developer mode`.
