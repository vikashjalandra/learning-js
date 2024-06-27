class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username:${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password

    }

    addCourse(){
        console.log(`New Course by ${this.username}`);
    }
}

const vikash = new Teacher('vikash','vikash@gmail.com','12345')
vikash.addCourse()
vikash.logMe()

const hitesh = new User('Hitesh')

hitesh.logMe()

console.log(vikash instanceof Teacher);

