function greeting ()
{
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
}
// greeting // Reference to the function
// greeting() // Calling the function
greeting() // H E L L O


// Function to add to numbers // Function with parameters
function sum (num1, num2)
{
    console.log(num1+num2)
}
sum(10, 20) // 30
sum(20, 30) // 50
sum("3", 4) // 34 // String
sum(50, "A") // 50A // String
const ans = sum(10, 20)
console.log(ans) // undefined


function add (num1, num2)
{
    // let result = num1 + num2
    // return result
    return (num1 + num2)
}
const result = add(10, 20)
console.log(result) // 30


function message (username)
{
    if (username === undefined) // Another syntax -> if (!username) // If username is undefined
    {
        console.log("Please enter your name!")
    }
    else return `${username} just came here!`
}
console.log(message("Saransh")) // Saransh just came here!
// console.log(message()) // undefined just came here! // undefined is the default value of username // Note - This output was in the previous version of this code
console.log(message()) // Please enter your name! // This is the output in the current version of this code
