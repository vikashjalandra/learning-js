// const tinderUser= new Object()
const tinderUser ={}

tinderUser.id='123abc'
tinderUser.name='vikash'
tinderUser.isLoggedIn=false


// console.log(tinderUser);

const regularUser={
    email:'abc@gmail.com',
    fullname:{
        userfullname:{
            firstname:'Vikash',
            lastname:'Kumawat'
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1={1:'a',2:'b'}
const obj2={3:'c',2:'d'}


// const obj= {obj1, obj2}
// const obj= Object.assign({}, obj1, obj2)

const obj= {...obj1,...obj2}

// console.log(obj);


const users=[
    {
        id:1,
        email:'a@gmail.com'
    },
    {
        id:2,
        email:'b@gmail.com'
    },
    {
        id:3,
        email:'c@gmail.com'
    },
]

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLogged'))


const course={
    name:"JS In Hindi",
    price:1999,
    teacher:"Vikash Kumawat"
}

const {teacher}=course

console.log(teacher);

