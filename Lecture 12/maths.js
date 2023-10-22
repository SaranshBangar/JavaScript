console.log(Math) // Object [Math] {}

console.log(Math.abs(-12)) // 12 // Converts -ve value to +ve value
console.log(Math.round(4.75)) // 5 // Rounds off a number to nearest integer
    console.log(Math.ceil(4.01)) // 5 // Always takes the higher value
    console.log(Math.floor(4.99)) // 4 // Always takes the lower value
console.log(Math.pow(2, 10)) // 1024 // Calculates the power of a number

console.log(Math.min(2, 4, 7, 3, 1)) // 1 // Returns the lowest value from an array
console.log(Math.max(2, 4, 7, 3, 1)) // 7 // Returns the largest value from an array

console.log(Math.random()) // Generates a random value from 0 -> 1
    const min = 10
    const max = 20
    Math.random() * (max - min + 1) + min
    console.log(Math.floor(Math.random() * (max - min + 1) + min)) // Used basic maths to ensure that the number generated is between 10 -> 20