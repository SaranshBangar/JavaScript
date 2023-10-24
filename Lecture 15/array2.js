const marvel_heroes = ["Thor", "IronMan", "SpiderMan"]
const dc_heroes = ["SuperMan", "Flash", "BatMan"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) // [ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]
// console.log(marvel_heroes[3][2]) // BatMan

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes) // [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

const all_heroes2 = [...marvel_heroes, ...dc_heroes] // Spread Operator, it may be better than concat in some cases
console.log(all_heroes2) // [ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const better_arr1 = arr1.flat(Infinity)
console.log(better_arr1) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Saransh")) // false

console.log(Array.from("Saransh")) // [ 'S', 'a', 'r', 'a', 'n', 's', 'h' ]
console.log(Array.from({name: "Saransh"})) // [] // Special case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]