//TASK ------ 1

// Implement a custom callback function:
//  Write a function named modulus that calculates the remainder of two numbers and pass it as a callback to the calculate function.

function modulus(num1,num2,result){
  return console.log(result = num1%num2);
}
modulus(21,2);

//****************************************************************************************************************************************** */
//TASK ------ 2

// Use callback functions for conditional logic:
//  Write a function named isGreater that takes two numbers as arguments and logs which number is greater. 
// Pass this function as a callback to the calculate function.

function isGreater(a,b)
{

  if(a<b){
    console.log(b);
  }
  else{
    console.log(a);
  }
}
let num1 = 10;
let num2 = 20;

function calculate(num1,num2,result)
{
  return result(num1,num2);
}

 calculate(num1,num2,isGreater);


 //*************************************************************************************************************************************** */
//TASK ------ 3

// Create an array processing callback:
//  Write a function named processArray that takes an array of numbers and a callback function.
//  Use the callback function to calculate the sum of all even numbers in the array.

function callBack(array){
  let sum = 0;
  for(let item of array){
     if((item % 2)===0){
      console.log(`The even numbers are`,item);
      sum =sum + item;
    }
   
  }
  console.log(`The sum of even numbers are : `,sum)
}


let array = [1,2,4,7,8,22]
function processArray(array,result ){
  return result(array);
}


processArray(array,callBack);


 //*************************************************************************************************************************************** */
//TASK ------ 4


// Transform numbers using callbacks: 
// Create a function square that returns the square of a number.
//  Pass it as a callback to a new transform function that applies the callback to each number in an array and returns the transformed array.
