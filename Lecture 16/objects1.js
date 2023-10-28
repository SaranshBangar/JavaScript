// Object literals

const sym = Symbol("key")

const JSUser =
{
    name: "Saransh",
    age: 20,
    city: "Chennai",
    email: "saranshbangad@gmail.com",

    [sym]: "newKey", // Correct syntax for using symbol in an object

    isLoggedin: false,
    lastLogin: new Date().getTime(),
    lastLoginDays: ["Mon", "Tue", "Wed", "Thu"],

}

// 2 ways to access object properties
console.log(JSUser.isLoggedin) // false
console.log(JSUser["isLoggedin"]) // false // Useful when we have to access a property with a space (" ") in it
console.log(JSUser[sym]) // newKey

JSUser.isLoggedin = true
console.log(JSUser.isLoggedin) // true

// Object.freeze(JSUser) // Freezes the object and makes it immutable

JSUser.greeting = function()
{
    console.log("Hello Saransh")
}
console.log(JSUser.greeting()) // Hello Saransh


JSUser.greeting2 = function()
{
    console.log(`Hello ${this.name}`)
}
console.log(JSUser.greeting2()) // Hello Saransh
