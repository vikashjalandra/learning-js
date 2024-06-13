const name = "vikash"
const repoCount = 50

// console.log(`My name is ${name} and repo count is ${repoCount}`);

const gameName = new String('vikash-hC-com') 

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    vikash   new"
console.log(newStringOne);
console.log(newStringOne.trim());


const url = 'https://google.com/vikash%20kumawat'
console.log(url.replace("%20",'-'))

console.log(url.includes("vikash"));

console.log(gameName.split("-"));