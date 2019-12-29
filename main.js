/* psudocode:
1- for loop generates list of numbers from 2 to maxLimit and save it to array primeNums
2- loop for each number and multiply with the rest of numbers terminiate when number is heighr than max
3- filter out remaining numbers from primeNums
*/

primeNums = []
maxLimit = 100;

for (let i=2; i<=maxLimit ; i++){
    primeNums.push(i);
}

let notPrime = []

for (let i=0; i<=primeNums.length; i++){
    for (let k=0; k<=primeNums.length; k++){
        result = primeNums[i]*primeNums[k];
        if 
    }
}


console.log(primeNums)



/* Salman's solution


const fillNumbers = function(limit){
    let numbers = []
    for(let i = 2; i <= limit; i++){
        numbers.push(i)
    }
    return numbers
}
const removeNotPrimes = function(arrNumbers){
    for(let i = 0; i < arrNumbers.length; i++){
        for (let j = arrNumbers[i]; j < arrNumbers.length; j++){
            let notPrime = arrNumbers[i] * j
            let indexOfNotPrime = arrNumbers.indexOf(notPrime)
            if(indexOfNotPrime != -1){
                arrNumbers.splice(indexOfNotPrime, 1)
            }
        }
    }
    return arrNumbers
}
let numbers = fillNumbers(120)
numbers = removeNotPrimes(numbers)
console.log(numbers)
*/