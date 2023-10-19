console.log(2>1) // true
console.log(2>=1) // true
console.log(2<1) // false
console.log(2<=1) // false
console.log(2==1) // false
console.log(2!=1) // true

console.log("2" > 1) // true

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
// Note - Comparison operators (>, <, >=, <=) converts "null" to a number (0), whereas equality check does not do so

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false
// Note - "undefined" is converted to "NaN" rather than 0

console.log("2" == 2) // true
console.log("2" === 2) // false
// Note - "===" checks the datatype along with the value, it can be understood as a more stricter version of equality check (==)