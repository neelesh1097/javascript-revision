// for, for...in, for...of, forEach do not return new array

let num =[1,2,3,4,5,6,7,8,9,10]

let newnum =[]

num.forEach((num) => {
   if(num>4){
      newnum.push(num);
   }
})

console.log(newnum);




// loops that retun new array
//filter
let num1 =[1,2,3,4,5,6,7,8,9,10]

const fil =num1.filter((num) => {
    return num>4;
})

console.log(fil);

//returns a new array 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


  let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredResults = num1
  .map((num, index) => ({ num, index }))  // Create an array of objects with value and index
  .filter(item => item.num > 4);  // Apply the filter condition

console.log(filteredResults);



//map
let food =['rasin' ,'cashew','almond','dates','pistacho']

let ind =food.map((num,index) =>{
  console.log(`${num} at ${index} index`)
})
//reduce


const number = [10,23,34,2,1,2,45,6,6,7,8,67,43]
let add = number.reduce((acc,num) =>
 {
      return acc +num ;
 } ,0);

 console.log(add)  // accumlator number index and array parameters of reduce