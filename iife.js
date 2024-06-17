// Immediately Invoked Function Expressions(IIFE)

(function one(){
    //named IIFE
    console.log('DB Connected');
}());

((name)=>{
    // unnamed IIFE
    console.log(`Connected ${name}`);
})('vikash')