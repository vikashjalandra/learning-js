// +++++++++++++++  Important For Interviews  +++++++++++++++//

// Global Execution Context - this 
// Function Execution Context 
// Eval Execution Context (Mostly seen in mongoose like tool)


// Vist Again - https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25&t=33s

// phases

// 1. Global Execution Phase
// -> this (allocated)

// 2. Memory Phase
// -> val1 = undefined
// -> val2 = undefined
// -> addNum = definition

// 3. Execution Phase
// -> val1 = 10
// -> val2 = 5
// -> addNum -- new variable environment + Execution thread (delete after work)
//            -> (i). Memory Phase(of function addNum)
//            -> val1 = undefined
//            -> val2 = undefined
//            -> total = undefined

//            -> (ii). Execution Phase(of function addNum)
//            -> num1 = 10
//            -> num2 = 5
//            -> total = 15

// result1 = 15
// result2 = ....

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(2,3)