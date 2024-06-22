const form = document.querySelector('form');
// this usecase will give you empty
// const height =parseInt(document.querySelector('#height').value);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const results =document.querySelector('#results');

    if (height==='' || height<0 || isNaN(height)) {
        results.innerHTML =`Please give a valid Height ${height}`
    }  else if (weight==='' || weight<0 || isNaN(weight)) {
        results.innerHTML =`Please give a valid Weight ${weight}`
    } else{
        const BMI =(weight/((height*height/10000))).toFixed(2) 

        if (BMI<=18.6) {
            results.innerHTML =`<span>BMI:${BMI},</span> <span>You Are Underweight</span>`
        } else if (BMI>18.6 && BMI<24.9) {
            results.innerHTML =`<span>BMI:${BMI},</span> <span>Your Weight in Normal</span>`
        } else if (BMI>=24.9) {
            results.innerHTML =`<span>BMI:${BMI},</span> <span>You Are Overweight</span>`
        }

    }


})