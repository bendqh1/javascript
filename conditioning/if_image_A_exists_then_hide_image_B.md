```js
// Remove sidebar image if there is an hero image for a webpage which is not the homepage

if  (
    document.querySelector('#block-globalrs-content > div > article > div > div.text-content.clearfix.field.field--name-body.field--type-text-with-summary.field--label-hidden.field__item > img')
    ) {
    document.querySelector('.region--sidebar .block:first-of-type:has(img)').remove();
};
```

Better to do it with CSS though:

https://www.sitepoint.com/community/t/how-to-hide-an-image-if-another-image-appears/442512
