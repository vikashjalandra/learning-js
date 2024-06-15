// singleton
// Object.create


// object literals

const mySym= Symbol("key1")

const JsUser ={
    name:'vikash',
    "full name":'vikash kumawat',
    age:18,
    [mySym]: "myKey1",
    location:'jaipur',
    email:'vikash@google.com',
    isLoggedIn: false,
    lastLoginDays:['Monday', 'Saturday']
}

// console.log(JsUser.name);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]); // most convinience method
// console.log(typeof JsUser[mySym]);



// Object.freeze(JsUser) // cannot be changed

JsUser.email='a@b.c'

// console.log(JsUser);

JsUser.greeting = function () {
    console.log('Hello World');
}
JsUser.greeting2 = function () {
    console.log(`Hello World, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());


// ++++++++++++++ objects part - 2 +++++++++++++++++++++

// const tinderUser= new Object() // singleton
const tinderUser= {}

tinderUser.id='123abc'
tinderUser.name='sam'
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser ={
    email:"sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vikash",
            lastname:"kumawat"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'c',4:'d'}
const obj4 ={5:'e',6:'f'}

// const obj3= {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const user =[
    {
        id:1,
        email:'a@b.c'
    },
    {
        id:1,
        email:'a@b.c'
    },
    {
        id:1,
        email:'a@b.c'
    },
    {
        id:1,
        email:'a@b.c'
    },
    {
        id:1,
        email:'a@b.c'
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

