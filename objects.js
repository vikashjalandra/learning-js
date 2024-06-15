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
