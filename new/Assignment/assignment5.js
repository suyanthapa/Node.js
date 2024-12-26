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

import express from ('express');

const server = new express();

server.get("/", function(req,res){
  res.send("Hello suyan from assignmnet 5")
})

server.listen(9000,function(){
  console.log("Server is running on port 900")
})