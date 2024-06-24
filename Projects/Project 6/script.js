//random color generate

const randomColor =()=>{
    const hex ='0123456789ABCDEF'
    let color ='#'
    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
        
    }
    return color
}
let intervalId;
const startChangingColor=()=>{
    
    const changeBG=()=>{
        document.body.style.backgroundColor=randomColor()
    }

    if (!intervalId) {
        intervalId =setInterval(changeBG,1000)
    }

}

const stopChangingColor =()=>{
    clearInterval(intervalId)
    intervalId=null
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)