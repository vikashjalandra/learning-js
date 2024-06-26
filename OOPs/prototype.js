// let myName = 'vikash     '

// console.log(myName.trueLength);

let myHeros =['thor','hulk']


let heroPower={
    thor:'hammer',
    hulk:'strength',
    getHulkPower:function () {
        console.log(`Hulk power is ${this.hulk}`);
    }
}

Object.prototype.vikash = function () {
    console.log(`vikash is supreme`);
}

Array.prototype.heyVikash=function () {
    console.log(`Vikash says, hello`);
}

// heroPower.heyVikash()
// heroPower.vikash()

// heroPower.vikash()

// myHeros.vikash()
// myHeros.heyVikash()


// Inhertance 


const user={
    name:'chai',
    email:'chai@gmail.com'
}

const teacher ={
    makeVideo:true
}

const teachingAssistance ={
    isAvailable:false
}

const TASupport = {
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:teachingAssistance
}

teacher.__proto__ = user

Object.setPrototypeOf(teachingAssistance,teacher)

let anotherUsername ='vikash      '

String.prototype.trueLength =function () {
    console.log(`${this}`);
    console.log(`True Length:${this.trim().length}`);
}

anotherUsername.trueLength()
'hey guys'.trueLength()