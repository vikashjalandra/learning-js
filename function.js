function sayMyName() {
    console.log('V');
    console.log('I');
    console.log('K');
    console.log('A');
    console.log('S');
    console.log('H');
}

// sayMyName()

function addTwoNumbers(num1,num2) {
    // let result = num1+num2
    return num1+num2
}

const result =addTwoNumbers(2,3)
// console.log("Result:",result);

function loginUserMessage(username='Vikash Kumawat') {
    if(!username){
        console.log('Please Enter a Username')
        return
    }
    return  `${username} just logged in!`
    
}

console.log(loginUserMessage())