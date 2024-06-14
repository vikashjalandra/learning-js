const marvelHeros = ['thor','ironman', 'spiderman']
const dcHeros = ['superman','batman', 'flash']
const indianHeros =['hanuman','krishna','shaktiman']

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros, ...indianHeros]

// console.log(allNewHeros);

const anotherArray =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realArray = anotherArray.flat(Infinity)

console.log(realArray);


console.log(Array.isArray('vikash'))
console.log(Array.from('vikash'))
console.log(Array.from({name:'vikash'})) // important 

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3));
