const month = 3

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;

    default:
        console.log('Default');
        break;
}

// //////////////////////////

// const userEmail='a@b.c'
const userEmail=[]

// if (userEmail) {
//     console.log('Got Email');
// } else{
    
//     console.log(`Don't Got Email`);
// }

// Falsy Values-
// false, 0,-0,BigInt 0n, "", null, undefined, NaN 

// Truthy Values 
// "0", 'false', ' ', [], {}, function(){}, 

// if (userEmail.length==0) {
//     console.log('Array is Empty');
// }

const emptyObj={}

if (Object.keys(emptyObj).length===0) {
    console.log('Object is Empty');
}

// Nullis Coalescing Operator(??): null undefined

let val1;
// val1=5??4
// val1=null??4
// val1=undefined??4
val1 = null??10??15

console.log(val1);

//Ternary Operator

// condition ? true: false

const myAge=18
myAge >=80 ? console.log('You are old') : console.log('You are young');

