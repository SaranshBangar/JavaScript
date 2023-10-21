// String concatonation (Old method)
const str1 = "Hello "
const str2 = "World"
console.log(str1 + str2)

// String interpolation (New method)
const name = "Saransh"
console.log(`Hello, my name is ${name}`);

const userName = new String("Saransh Bangar")// Another way to declare string using object
// The above method is much more beneficial as we get many functions (like ".length()") that can work with it

console.log(userName.length) // 14 // Prints the length of "userName"
console.log(userName.toUpperCase()) // SARANSH BANGAR // Note - It does'nt change the original value of the string
console.log(userName.charAt(4)) // n // It prints the charachter at the given index of our string
console.log(userName.indexOf('B')); // 8 // It gives the index of the character

const newUserName = userName.substring(0,4) // Creates a substring of length 0 -> (n-1)
console.log(newUserName) // Sara

const anotherUserName = userName.slice(1,-4) // Similar to substring, but we can also use negative numbers in it
console.log(anotherUserName); // aransh Ba

const newStr1 = "     Saransh     "
console.log(newStr1.trim()) // Saransh // The trim function removes the extra spaces from the starting and the end of the string

const url = "https://www.google.com/saransh%20bangar"
console.log(url.replace('%20', '-')) // https://www.google.com/saransh-bangar
console.log(url.includes('saransh')) // true
console.log(url.includes('hello')) // false

console.log(userName.split(' ')) // [ 'Saransh', 'Bangar' ] // Divides the string into an array