let myDate = new Date() // Created an object "myDate" of "Date" class
console.log(myDate) // 2023-10-22T04:46:31.345Z
{
    console.log(myDate.toString()) // Sun Oct 22 2023 10:18:09 GMT+0530 (India Standard Time)
    console.log(myDate.toLocaleString()) // 22/10/2023, 10:19:51 am

    console.log(myDate.toDateString()) // Sun Oct 22 2023
    console.log(myDate.toLocaleDateString()) // 22/10/2023

    console.log(myDate.toISOString()) // 2023-10-22T04:49:11.631Z
    console.log(myDate.toJSON()) // 2023-10-22T04:49:11.631Z
}
console.log(typeof myDate) // Object

let newDate = new Date(2023, 10, 9, 5, 7 , 23) // Months start from 0
console.log(newDate.toDateString()) // Thu Nov 09 2023
console.log(newDate.toLocaleString()) // 9/11/2023, 5:07:23 am

let currentDate = new Date()
console.log(currentDate.getDate()) // 22 // Displays current day
console.log(currentDate.getFullYear()) // 2023 // Displays ,current year
console.log(currentDate.getMonth()) // 9 // Displays current month with respect to 0 based indexing