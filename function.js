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

// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1) {
    return num1;
}

// console.log(calculateCartPrice(200,400,500,200,3000));

const user={
    username:"Vikash",
    price:199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const newArr=[200,400,600]

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(newArr));