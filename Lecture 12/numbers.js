const score = 25
console.log(score) // 25

// Another way of defining numbers, this way is much better as we get many additional properties
const balance = new Number(300)
console.log(balance) // [Number: 300]
console.log(balance.toString()) // 300 // Converts a number to a string
console.log(balance.toString().length) // 3 // We can use string functions on it
console.log(balance.toFixed(3)) // 300.000 // Gives decimal values

const number = 15.75
console.log(number.toPrecision(3)) // 15.8

const bigNumber = 1000000
console.log(bigNumber.toLocaleString()) // 10,00,000 // Adds comma (,) to a number according to the Indian system
console.log(bigNumber.toLocaleString('en-US')) // 1,000,000 // Adds comma (,) to a number according to the US system

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991