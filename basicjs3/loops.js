// for loop 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
 // basic for loop


 // for const of loop

 let arr =['neelesh', 'yash' ,'shivam nath', 'deepak']
 for (const iterator of arr) {
    console.log(iterator);
 }

 // output =neelesh yash shivam nath deepak

 let obj ={
    name: 'neelesh',
    class:'btech ai',
    roll_no: 221000050026,
    sem: 4,
    department: 'engineering',
 }

//  for (const iterator of obj) {
//     console.log(iterator);
//  }   // object is not iterable with for(cost of obj)
   // for(const key in obj) => it is used for iteration

    for (const key in obj) {
       console.log(`key is ${key} and val is ${obj[key]}`);
      
    }

    // maps
    // iteration in maps

   let maps =new Map();
   maps.set( 'info', {name:'neelesh',class:'btechAI'})

   let maps2=new Map();

   maps.set('name','neelesh');
   maps.set('class', 'btech_ai');
   maps.set('roll_no', '221000050026');
   maps.set('department','engineering');

   // console.log(maps)

   maps2.set('name','yash');
   maps2.set('class', 'btech_ai_y');
   maps2.set('roll_no', '221000050056');
   maps2.set('department','engineering_y');

for (const [key,value] of maps) {
   console.log(key ,value);
}

for (const [key,value] of maps2) {
   console.log(key ,value);
}

// weakmaps
const weakMap = new WeakMap();
const keyObject = {}; // Creating an object to use as a key

// Adding an object (element) to WeakMap
weakMap.set(keyObject, 'hello');

console.log(weakMap.get(keyObject)); // 'hello' 


let my_obj = {
   Name:'neelesh',
   class:'btech ai',
   roll_no: 221000050026,
   age: 21
}


for (const key in my_obj) {
      console.log(`key ${key} and value is ${my_obj[key]}`);
}


// foreach loop\

let my_array =['neelesh', 'yash' ,'shivam' ,'yash' ,'yash' ,'neelu']

my_array.forEach( (items ,index ,array) => {
   console.log(items ,index , array);
});

//neelesh 0 [ 'neelesh', 'yash', 'shivam', 'yash', 'yash', 'neelu' ]
//yash 1 [ 'neelesh', 'yash', 'shivam', 'yash', 'yash', 'neelu' ]
//shivam 2 [ 'neelesh', 'yash', 'shivam', 'yash', 'yash', 'neelu' ]
//yash 3 [ 'neelesh', 'yash', 'shivam', 'yash', 'yash', 'neelu' ]
//yash 4 [ 'neelesh', 'yash', 'shivam', 'yash', 'yash', 'neelu' ]
//neelu 5 [ 'neelesh', 'yash', 'shivam', 'yash', 'yash', 'neelu' ]

// destructuring object in a array

let myclass =[{
        name:'neelesh',
        class:'artificial intelligence',
        language:'javascript'

},
{
   name:'yash',
   class:'artificial intelligence',
   language:'ruby,jyoti'

},

{
   name:'jeetu',
   class:'artificial intelligence',
   language:'ruby,c++,python'
},
{
   name:'deepak',
   class:'artificial intelligence',
   language:'ruby,c++,java,javascript,python'
}


]

myclass.forEach((key) => {
  console.log(key.language);
})

// foreach loops

let num =[1,2,3,4,5,6,7,8,9,10]

num.forEach((num) => {
   if(num>4){
      console.log(num);
   }
})



