const user={
    username:"vikash",
    price:999,

    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

user.welcomeMessage()
user.username='sam'
user.welcomeMessage()

// console.log(this);

// function one() {
//     let username = 'vikash'
//     console.log(this.username);
// }



const one =  ()=> {
    let username = 'vikash'
    console.log(this);
    
}

// one()


// const addTwu=(num1,num2)=>{
//     return num1+num2;
// }
// const addTwu=(num1,num2)=> num1+num2;

// const addTwu=(num1,num2)=> (num1+num2)

const addTwu=(num1,num2)=>({username:'vikash'})

console.log(addTwu(3,4));

