const arr1 = [0, 1, 2, 3, 4, 5, 6, 7] // Older way to declare an array
console.log(arr1[2]) // 2 // Displays the element at a particular index

const arr2 = new Array(1, 2, 3, 4) // Better way of declaring an array
{
    arr2.push(5) // Adds a new element at the end of the array
    console.log(arr2) // [ 1, 2, 3, 4, 5 ]
    arr2.pop() // Removes the last element from the array
    console.log(arr2) // [ 1, 2, 3, 4 ]

    arr2.unshift(0) // Add a new element at the start of the array // Note - Not optimized
    console.log(arr2) // [ 0, 1, 2, 3, 4 ]
    arr2.shift() // Removes the first element from the array // Note - Not optimized
    console.log(arr2) // [ 1, 2, 3, 4 ]   

    console.log(arr2.includes(10)) // false // It always returns a boolean value
    console.log(arr2.indexOf(10)) // -1 // 10 is not present in the array
}

const arr3 = arr2.join() // It converts an array to a string
console.log(typeof arr3) // string
console.log(arr2) // [ 1, 2, 3, 4 ]
console.log(arr3) // 1,2,3,4

// Note -> Slice v/s Splice - Slice does not modify the original array whereas Splice does 
console.log("A ", arr1) // A  [ 0, 1, 2, 3, 4, 5, 6, 7 ]
const slice = arr1.slice(1, 3)
console.log(slice) // [ 1, 2 ]

console.log("B ", arr1) // B  [ 0, 1, 2, 3, 4, 5, 6, 7 ]
const splice = arr1.splice(1, 3) 
console.log(arr1) // [ 0, 4, 5, 6, 7 ] // It cuts the array and stores it in "splice"
console.log(splice) // [ 1, 2, 3 ]