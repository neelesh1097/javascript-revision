class user{
    constructor(username){
        this.username =username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


const neel =new user ("neelesh")
console.log(neel)
neel.logMe()

class Teacher extends user {
    constructor(username, email, password){
           super (username)
           this.email =email
           this.password =password
    }  

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const neel2 =new Teacher ('neelesh' ,'neels@1233' , 'charander')

console.log(neel2);
neel2.logMe()   //USERNAME is neelesh  inherited property