const descriptor =Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descriptor);

// console.log(Math.PI);

// Object.prototype.Math.PI = 4

// console.log(Math.PI);

const chai ={
    name:'ginger chai',
    price:150,
    isAvailable:true,
    orderChai:function () {
        console.log(`code fatt gya`);
    }
}


console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai, 'name',{
    // writable:false,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value!='function') {
        
        console.log(`${key}, ${value}`);
    }
}