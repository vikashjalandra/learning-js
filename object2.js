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
// console.log(obj3);

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
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


// +++++++++++++++ Objects De-Structure ++++++++++++++++

const course ={
    course:"Js in Hindi",
    price:'999',
    courseInstructor:'vikash'
}

// course.courseInstructor

const{courseInstructor:teacher} =course

// console.log(courseInstructor);
console.log(teacher);

// const navbar =({company})=>{

// }

// navbar(company='vikash')


// {
//     'name':'vikash',
//     'course':'Js in hindi',
//     'price':'free'   
// }

