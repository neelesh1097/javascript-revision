let nameObj = { 
	name: "Neelesh"
} 

let PrintName = { 
	name: "steve", 
	sayHi: function (age) { 
		console.log(this.name + " age is " + age); 
	} 
} 

PrintName.sayHi.call(nameObj, 42);



let my_name ={
    name: "neelesh"
}


let printName ={
    name:"anything",

    sayhi : function (age){
        console.log(this.name +" age is " + age)
    }
}

printName.sayhi.call(my_name , 21);



function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this ,username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);