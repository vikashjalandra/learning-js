let marvel_heros =['ironman', 'thor', 'spiderman']

let dc_heros = ['superman' ,'batman' ,'flash']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

let all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

let all_new= [...marvel_heros,...dc_heros]

// console.log(all_new)

let another = [1,2,3,[4,5,6,[7,8,9]]]

let real_another_array= another.flat(Infinity)

// console.log(Array.isArray('vikash'))
// console.log(Array.from({name:'vikash'}))

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))