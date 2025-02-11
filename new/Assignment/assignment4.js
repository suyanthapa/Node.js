// Countdown Timer with Promises
// Description: Create a countdown function that takes a number of seconds as input and counts down to zero, logging each second to the console.

// javascript
// Copy code
// async function countdown(seconds) {
//   // Write a countdown timer
// }
// countdown(5).then(() => console.log('Countdown complete!'));
// Hint: Use a delay function with Promise and setTimeout in a loop.
// Goal: Build familiarity with combining asynchronous logic and loops


const delay  = (seconds) => new Promise (function(resolve, reject) {

  const intrvl =  setInterval( function (){
   
    if(seconds === 0){
      resolve(`Happy New Year  `);
      clearInterval(intrvl);
    }
    else if (seconds === undefined){
      reject(`SECONDS UNDEFINED`)
      }
      else {
        console.log(`Countdown:`, seconds--);
      }

  },1000)

});

 async function countdown(seconds){
  try {
     const play =await delay(seconds);
     console.log(play)
    
  }
  catch (error ){
    console.log(error);
  }

}
countdown(2);