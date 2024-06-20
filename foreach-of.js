// for of

const arr = [1,2,3,4,5,6,]

for (const num of arr) {
    // console.log(num);
}

const greetings ='Hello World'

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN','India')
map.set('USA','USA')
map.set('Fr','France')
map.set('IN','India')

// console.log(map);

for (const [key,value] of map) {
    // console.log(key);
}

const myObj = {
    game1:'NFS',
    game2:'Spiderman'
}

// for (const [key,value] of myObj) {
//     console.log(key);
// }

const myObject={
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift'
}

for (const key in myObject) {
    // console.log(`${key} for ${myObject[key]}`);
}

const prog=['js','ruby','py','java']

for (const key in map) {
    // console.log(key);
}

// +++++++++++ for each ++++++++++++++++++

// prog.forEach((item)=> {
//     console.log(item);
// } )

function printMe(item) {
    console.log(item);
}

// prog.forEach(printMe)

prog.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding =[
    {
        name:'JavaScript',
        file:'js'
    },
    {
        name:'Java',
        file:'java'
    },
    {
        name:'Python',
        file:'py'
    },
]

myCoding.forEach((item)=>{
    console.log(item.name);
})