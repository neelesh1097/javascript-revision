class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const neelsh = new User("Neelesh")
// console.log(neelesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iqoo = new Teacher("iqoo", "i@qoo.com")
console.log(iqoo.createId());