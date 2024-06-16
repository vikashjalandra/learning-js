const user = {
    username: 'vikash',
    price: 999,

    welcomeMessage: function () {
        console.log(`Welcome ${this.username}!`)
        console.log(this);
    },

}

// user.welcomeMessage()
// user.username ='sam'
// user.welcomeMessage()

// console.log(this);

// function newOne() {
//     let username = 'vikash'
//     console.log(this.username);
// }

// newOne()

const one = () => {
    let username = 'vikash'
    console.log(this.username);
}

// one()


// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo = (num1,num2)=> num1+num2
// const addTwo = (num1,num2)=> (num1+num2)

const addTwo = (num1,num2)=> ({username:'vikash'})

console.log(addTwo(2,3));

const myArr = [2,3,4,5]

myArr.forEach(()=>{})