// var c=300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:",a);
}



// console.log(a);
// console.log(b);


function one() {
    const username ="vikash"
    function two() {
        const website ='youtube'
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = 'vikash'
    if (username==='vikash') {
        const website =' youtube'
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++++ intresting ++++++++++++++++++++


console.log(addone(5))
function addone(num){
    return ++num
}


const addTwo = function (num) {
    return num+2
}
console.log(addTwo(5));
