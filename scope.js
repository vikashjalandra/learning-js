var c=300

// console.log(c);
let a=300;

if (true) {
    let a =10
    const b=2
    // console.log(a);
}


// console.log(a);
// console.log(b);
// console.log(a);


function one() {
    const username='vikash';

    function two() {
        const website='youtube'
        console.log(username)
    }
    two()
    // console.log(website)
}

// one()

if (true) {
    const username='vikash'
    if (username==='vikash') {
        const website='youtube'
        // console.log(username+website);
    }
    // console.log(website)
}

// console.log(username);


//+++++++++++ intresting ++++++++++++//

console.log(addOne(6))
function addOne(num) {
    return num+1
}


// Hoisting problem
// addTwo(6) 
const addTwo=function(num) {
    return num+2
}

const test =()=>{
    console.log('Hello World');
}
test()
