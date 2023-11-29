// if 
// const isUserLoggedIn = true
// const tempreture = 41

// if (tempreture < 40) {
//     console.log('Less Than 50');
// } else {
//     console.log("Greater Than 50");
// }

// const score = 200

// if (score>100) {
//     const power = 'fly'
//     console.log(`User Power: ${power}`);
// }

const balance = 1000

// if (balance>500) console.log('test');

// if (balance<500) {
//     console.log('Less Than 500');
    
// }else if(balance<750){
//     console.log('Less Than 750');
// } else{
//     console.log('Less Than 900');
// }

const userLoggedIn= true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (userLoggedIn&&debitCard&&2==2) {
    console.log('Access Granted');
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User Logged In');
}