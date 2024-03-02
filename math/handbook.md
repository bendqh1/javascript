## Clear modulo

Modulo is a way to check if a division operation yields a remainder.

```js
let dividend = 10;
let divisor = 3;
let result = dividend % divisor;
console.log(result); // returns the remainder of 1 
```

and:

```
let dividend = 10;
let divisor = 2;
let result = dividend % divisor;
console.log(result); // returns the remainder of 0 (no remainder)
```

## Calculate percentile shipping fee

Calculate percentile shipping fee without `Math.round()` and with `Math.round()`.<br>
Alert the original price and the calculation results each one in its own line.

```js
let originalPrice = 222;
let shippingFee = 25 * 1 / 100;
let finalPrice_1 = originalPrice + originalPrice * shippingFee;
let finalPrice_2 = Math.round(originalPrice + originalPrice * shippingFee);
alert(`
    ${originalPrice}
    ${finalPrice_1} 
    ${finalPrice_2}
`);
```

### Old fashioned style without template literals and with forcing numbers to appear as strings

```js
let originalPrice = 222;
let shippingFee = 25 * 1 / 100;
let finalPrice_1 = originalPrice + originalPrice * shippingFee;
let finalPrice_2 = Math.round(originalPrice + originalPrice * shippingFee);
alert("" + originalPrice + " | " + finalPrice_1 + " | " + finalPrice_2);
```
