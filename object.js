//object literals

const symbol1=Symbol('myKey')

let obj={
    name:'vikash',
    "Full Name":'vikash kumawat',
    age:24,
    address:'jaipur',
    hobbies:['coding','gaming','reading'],
    [symbol1]:'this is my symbol',
}

// console.log(obj.name)
// console.log(obj['name'])
console.log(obj['Full Name'])
// console.log(obj[symbol1])
// console.log(typeof symbol1)


obj.age=25

// console.log(obj)

// Object.freeze(obj)
// obj.location='delhi'
// console.log(obj)

obj.greel=function(){
    console.log(`hello, ${this.name}`)
}

console.log(obj.greel())

obj.greel2=function(){
    console.log(`hello, ${this.name}`)
}

console.log(obj.greel2())

