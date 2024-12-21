// javascript objects
//how to g-t  all data from the list
//line no 80-87---- If we delete the data from the list, does it coccupify by others or stays undefined
var cryptoData = {
    date: "21 may, 2024",
    currencies: [
        {
            'name': "Bitcoin",
            "exchangeRate": 97000,
            'foundIn': '2005'
        },
        {
            'name': "Ethereum",
            "exchangeRate": 3200,
            'foundIn': '2013'
        },
        {
            'name': "Dogecoin",
            "exchangeRate": 0.32,
            'foundIn': '2016'
        },
        {
            'name': "Stack",
            "exchangeRate": 2.2,
            'foundIn': '2019'
        }
    ],
  }

  
//   Task 1: Display the exchange rate for Ethereum
//   Write a code snippet that shows the following output:
//   "The rate of Ethereum is 3200 as of 21 may, 2024"
  
console.log(`Task 1----The rate of Ethereum is ${cryptoData.currencies[1].exchangeRate} as of ${cryptoData.date}`);

// *********************************************************************************************************************************************

// Task 2: Add a new cryptocurrency to the list
// Add a new cryptocurrency called Solana with the following properties:

// name: "Solana"
// exchangeRate: 190
// foundIn: "2020"

cryptoData.currencies.push(
    {
        'name' : "Solana",
        'exchangeRate': "190",
        'foundIn' : "2020"
    }
)
// for(i=0; i< cryptoData.currencies.length; i++){
//     console.log(`The updated list : ${cryptoData.currencies[i]}`);
// }


//***************************************************************************************************************************/

// Task 3: Change the exchange rate of Stack
// Change the exchange rate of Stack from 2.2 to 2.45.


cryptoData.currencies[3].exchangeRate =2.77;
console.log(`Task 3---- After chnaging the exchange rate of Stack : ${cryptoData.currencies[3].exchangeRate}`);

//******************************************************************************************************************************/

// Task 4: Update the foundIn year for Dogecoin
// Change the year Dogecoin was found to "2014".

cryptoData.currencies[2].foundIn = 2014;
console.log(`Task 4----After updating the foundIn Year of${cryptoData.currencies[2].name} : ${cryptoData.currencies[2].foundIn}`);

//*********************************************************************************************************************************/

// Task 5: Remove the cryptocurrency DogeCoin from the list
// Remove the cryptocurrency object for DogeCoin from the currencies array.


// console.log(`Before removing the cryptoCurrency Dogecoin : ${cryptoData.currencies[2].name}`);
// delete cryptoData.currencies[2];
// console.log(`After removing the cryptoCurrency Dogecoin : ${cryptoData.currencies[2].name}`);
 
// for(i=0; i<`${cryptoData.currencies.length}`; i++){
//     console.log(`${cryptoData.currencies[i].exchangeRate}`);
// }

//********************************************************************************************************************************************* */

// Task 6: Calculate the total exchange rate for all currencies
// Write a function that calculates the sum of the exchangeRate for all the cryptocurrencies listed in currencies.

let sum=0;
for(i=0; i<`${cryptoData.currencies.length}`; i++){
    sum = sum + cryptoData.currencies[i].exchangeRate;
}
console.log(sum);

//*********************************************************************************************************************************************/

//Task 7: Display all cryptocurrencies found after 2010
// Create a list of cryptocurrencies that were found after the year 2010. For example, you can create a new array and log out the details of those currencies.
    
let newArray = [];
for(i=0; i< `${cryptoData.currencies.length}`; i++){
   if( `${cryptoData.currencies[i].foundIn}` > '2010') {
   
    newArray.push(cryptoData.currencies[i].name);
    
   }
}
console.log(` Task 7: ${newArray}`);

//*********************************************************************************************************************************************/

// Task 8: Add a new property symbol to all currencies
// Add a new property symbol for each currency. Here’s what the values for symbol could be:

// "Bitcoin" → "BTC"
// "Ethereum" → "ETH"
// "DogeCoin" → "DOGE"
// "Stack" → "STACK"
// "Solana" → "SOL"


for(i =0; i< `${cryptoData.currencies.length}`; i++){

    if(cryptoData.currencies[i].name) {
        let name = cryptoData.currencies[i].name;
        let property= 'symbol';
        switch(name){
          
            case 'Bitcoin':
                cryptoData.currencies[i][property] = 'BTC';
                break;
            
            case 'Ethereum':
                cryptoData.currencies[i][property] = 'ETH';
                break;

            case 'Stack':
                    cryptoData.currencies[i][property] = 'STACK';
                    break;

            case 'Dogecoin':
                        cryptoData.currencies[i][property] = 'DOGE';
                        break;

            case 'Solana':
                            cryptoData.currencies[i][property] = 'SOL';
                            break;

             default:
                
        }
        
    }
}

console.log(`${cryptoData.currencies[2].symbol}`); // for checking

//*********************************************************************************************************************************************/

// Task 9: Sort the currencies by exchange rate
// Write code to sort the currencies by their exchange rate in descending order and log the sorted list.


    // console.log("Task 9");
    // // cryptoData.currencies.sort((a,b) => a-b);
    // for(const data of cryptoData.currencies)
    
    // console.log(data);

 //****************************************************************************************************************************************** */

//  Task 11: Find the index of Ethereum in the currencies list
// Find the index position of Ethereum in the currencies array and display it.

for(i=0; i<`${cryptoData.currencies.length}`; i++){
    if( (cryptoData.currencies[i].name) === 'Ethereum'){
        console.log(i);
    }
}

//********************************************************************************************************************************************/

//Task 12: Display the names of all currencies in a single string
// Write code to output the names of all cryptocurrencies as a comma-separated string.
// Example output:
// "BitCoin, Ethereum, DogeCoin, Stack, Solana"

///*******************************************************************************************************************************************/


// //
// Task 15: Find the currency with the name "Stack"
// Write a function that searches for the cryptocurrency called "Stack" and returns its details (including the name, exchange rate, and year found).

function find(cryptoName){
    
for(i=0; i<`${cryptoData.currencies.length}`; i++){
    if( (`${cryptoData.currencies[i].name}`) === cryptoName){
        return{
         name: cryptoData.currencies[i].name,
        exchangeRate:cryptoData.currencies[i].exchangeRate,
        FoundIn:cryptoData.currencies[i].foundIn
    }
}}

}

console.log("Task 15---",find("Stack"));

///*******************************************************************************************************************************************/


// Task 19: Check if a currency exists in the list
// Write a function that checks whether a cryptocurrency (e.g., "Bitcoin", "Cardano") exists in the currencies array. It should return true or false.

function check(crypto1,crypto2){
    for(i=0; i<`${cryptoData.currencies.length}`; i++){
        if ((`${cryptoData.currencies[i].name}`)  === crypto1  || (`${cryptoData.currencies[i].name}`)  === crypto2)  {
            return true;
    }}
}

console.log(check("Bitcoin","Cardano"));

