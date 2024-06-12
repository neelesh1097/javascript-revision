const person = {
    name: 'Alice',
    greet: function(greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }
};

const boundGreet = person.greet.bind(person, 'Hello'); // Pre-bound with `this` and argument
boundGreet();

// bind creates a new function and returns a new function 



// const person1 = {
//     name: 'Alice',
//     greet: function(greeting) {
//         console.log(`${greeting}, my name is ${this.name}`);
//     }
// };

// const boundGreet1 = person1.greet.call(person, 'Hello'); 
// boundGreet1();  // error 


// call - immediately invokes a new function 