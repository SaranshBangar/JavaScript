const user = new Object() // Singleton object
const user2 = {} // Non singleton 
user.id = "123ABC"
user.name = "Saransh"
user.isLoggedIn = false
console.log(user) // { id: '123ABC', name: 'Saransh', isLoggedIn: false }

const newUser = // Nesting in objects
{
    email : "saranshbangad@gmail.com",
    fullname :
    {
        firstname :
        {
            fname : "Saransh",
        },
        lastname :
        {
            lname : "Bangar",
        },
    },
}
console.log(newUser.fullname.lastname.lname) // Bangar

const obj1 =
{
    1: "one",
    2: "two",
    3: "three",
}
const obj2 =
{
    1: "i",
    2: "ii",
    3: "iii",
}

// Method 1 of merging two objects
const obj3 = Object.assign({}, obj1, obj2) // Merging two objects // {} is the target object
console.log(obj3) // { '1': 'i', '2': 'ii', '3': 'iii' }

// Method 2 of merging two objects
const obj4 = {...obj1, ...obj2} // Merging two objects // Spread operator
console.log(obj4) // { '1': 'i', '2': 'ii', '3': 'iii' }

console.log(Object.keys(obj1)) // [ '1', '2', '3' ]
console.log(Object.values(obj1)) // [ 'one', 'two', 'three' ]

console.log(obj1.hasOwnProperty(1)) // true
console.log(obj1.hasOwnProperty(5)) // false