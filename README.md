# Polytangent
The tangent of a polynomial written in JavaScript!

## Usage

The `polytan` module contains a function that finds the tangent line to a polynomial equation. The function takes an array of coefficients in  **ascending** order and the **x-coordinate** of the point where the tangent **touches** the polynomial. 

```js
const calculate = require('polytan')

// f(x) = x^2 - 2x + 1
// touching point = (2, f(2))
console.log(calculate([1, -2, 1], 2)) 
// { slope: 2, intercept: -3 }
// g(t) = 2x - 3
```