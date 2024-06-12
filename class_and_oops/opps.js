// object literals

const my_id = {
    name :"neelesh",
    last :"yadav",
    middle: "kumar",
    course:"btech ai",
    rollno:"221000050026",

    getDetails : function (){
          console.log(`my name is ${this.name} ${this.middle}  ${this.last}`)
    }
}

console.log(my_id.name);
console.log(my_id.getDetails());


function myid(username , userid , id){
this.username = username;
this.userid = userid;
this.id =id;
 
return this;
}

let user1 =myid("neelesh" , 123 ,33)
let user2 =myid("yash" , 125 ,36)
console.log(user1);   

//username: 'yash',
//userid: 125,
//id: 36
let user3 = new myid("neel" , 123 ,33)
let user4 = new myid("shivam nath" , 125 ,36)
console.log(user1);
console.log(user3);  
console.log(user4);  
   
// new keyword helps to avoid the overwriting 

// change in user2 is overwriting user1 which makes object literal very difficult to manage 


// the new keyword and constructor function - it can be used to create instances of object without repetition of code in a easy and efficient way 


//constructor function 


