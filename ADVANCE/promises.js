const promise1 = new Promise((resolve, reject) => {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        // console.log('Async');
        resolve()
    }, 1000)
})

promise1.then(() => {
    // console.log('Promise');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('Async 2');
        resolve()
    }, 1000)
}).then(() => {
    // console.log('Promise 2');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: 'Vikash', email: 'vikash@gmail.com' })
    }, 1000)
})

promise3.then((user) => {
    // console.log(user);
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ user: 'vikash', password: "1234" })
        } else {
            reject('ERROR: Something Went Wrong.')
        }
    }, 1000)
})

promise4.then((user) => {
    // console.log(user);
    return user.username;
}).then((username) => {
    // console.log(username);
}).catch((err) => {
    // console.log(err);
}).finally(()=>{
    // console.log("Finally");
})


const promise5=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ user: 'javascript', password: "1234" })
        } else {
            reject('ERROR: JS Went Wrong.')
        }
    }, 1000)
})

async function consumePromise(){
    try {
        const response=await promise5
        // console.log(response);
        
    } catch (error) {
        // console.log(error);
    }
}

consumePromise()


// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/vikashjalandra')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }

// }

// getAllUser()

fetch('https://api.github.com/users/vikashjalandra')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})