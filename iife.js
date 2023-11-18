// Immediately Invoked Function Expressions (IIFE)

(function one() {
    console.log('DB Connected');
})();

((name)=>{
    console.log(`DB Connected 2 ${name}`);
})('vikash');