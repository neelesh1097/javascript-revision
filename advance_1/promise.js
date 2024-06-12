let promise1 = new Promise(function(resolve ,reject){
  setTimeout(function(){
    console.log('this is async code')
    resolve();
  },1000)
})

promise1.then(function(){
    console.log('promise consumed')
})


 new Promise(function(resolve ,reject){
    setTimeout(function(){
      console.log('this is async code number 2')
      resolve();
    },1000)
  }).then(function(){
    console.log('promise consumed 2nd time')
})

  
new Promise(function(resolve ,reject){
    setTimeout(function(){
      console.log('this is async code number 3')
      resolve({username:"neelesh" ,userId:'neelesh',roll_no:221000050026});
    },1000)
  }).then(function(user){
    console.log(user)
    console.log('promise consumed 3rd time')
})



let promisefour =new Promise(function(resolve ,reject){
    setTimeout(function(){
      console.log('this is async code number 4')
      let error =false;
      if(!error){
        resolve({username:"neelesh" ,userId:'neelesh',roll_no:221000050026});
      }
      else{
        reject('ERROR: JS went wrong')
      }
     
    },1000)
  })
  
  promisefour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
   console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



let promisefive =new Promise(function(resolve ,reject){
    setTimeout(function(){
      console.log('this is async code number 5')
      let error =false;
      if(!error){
        resolve({username:"neelesh" ,userId:'neelesh',roll_no:221000050026});
      }
      else{
        reject('ERROR: JS went wrong')
      }
     
    },1000)
  })
  
  async function consumePromiseFive(){
    try {
        const response = await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
  }
  consumePromiseFive()



  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) =>
  {
    return response.json()
  }
)
.then((data) => {

    const usernames = data.map(user => user.username);
    console.log(usernames);
    // console.log(data);
})

.catch((error) => {
    console.log(error)
})



async function fetchUser() {

    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')

        const data = await response.json()
        console.log(data);
        // const usernames = data.map(user => user.username);
        // console.log(usernames);
    } catch (error) {
        console.log(error);
    }
}

fetchUser();