// Memory is of 2 types - Stack (Primitive) and Heap (Non - Primitive)

let name1 = "Saransh" // Initiated "name1" and gave it the value "Saransh"
let name2 = name1 // Initiated "name2" and gave it the value of "name1"
name2 = "Bangar" // Updated name2's value to "Bangar"
console.log(name1) // Saransh
console.log(name2) // Bangar
// Note - "name2" is not given the original value of "name1", it is simply given a copy of its value. This is done using Stack memory

let user1 =
{
    email : "saranshbangad@gmail.com"
} // Initialised an object "user1" and gave it an attribute "email" with the value "saranshbangad@gmail.com"

let user2 = user1 // Initiated an object "user2" and gave it the value of "user1"
user2.email = "bangadsaransh@gmail.com" // Updated user2's email to "bangadsaransh@gmail.com"

console.log(user1.email) // bangadsaransh@gmail.com
console.log(user2.email) // bangadsaransh@gmail.com
// Note - user2's value overwrites user1's value as they both share the data from Heap memory

// Stack - A copy of the data is created and its reference is shared with the variables
// Heap - Data reference is shared with all variables without creating any copy