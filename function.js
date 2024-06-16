function sayMyName() {
    console.log('v');
    console.log('i');
    console.log('k');
    console.log('a');
    console.log('s');
    console.log('h');
}

// sayMyName()

// function addTwoNumbers(num1,num2) {
//    console.log( num1+num2);
// }

function addTwoNumbers(num1,num2) {
    // let result = num1+num2
    // console.log('vikash');
    return num1+num2
}

const result =addTwoNumbers(2,3)

// console.log("Result:",result);


function loginUserMessage(username){
    if (!username) {
        return 'Please enter a username'
    }else{
    return `${username} just logged in!`
    }
}

// console.log(loginUserMessage('vikash'))


function caculateCartPrice(...num1) { // ...num1 - rest operator
    return num1
}

// console.log(caculateCartPrice(2,3,4))

const user = {
    username:'vikash',
    price:123
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);     
}

// handleObject(user)

handleObject({
    username:'sam',
    price:333
})

const arr = [1,2,3,4]

function returnSecondValue(getArr) {
        return getArr[1]
}

// console.log(returnSecondValue(arr));
console.log(returnSecondValue([22,33,44,55]));