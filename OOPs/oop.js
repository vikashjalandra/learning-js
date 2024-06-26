const user = {
    username:'vikash',
    logincount:8,
    signedIn:true,


getUserDdetails: function () {
    return this
}
}

// console.log(user.getUserDdetails());

// console.log(user.username);

function User(username, logincount, isLoggedIn) {
    this.username=username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const user1= new User('vikash',12,true)
const user2 =new User('hitesh',11,false)
console.log(user1.constructor);
// console.log(user2);
