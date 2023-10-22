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
}