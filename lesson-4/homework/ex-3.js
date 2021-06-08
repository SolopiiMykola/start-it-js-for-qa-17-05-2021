// Завдання 3
// Потрібно створити функцію, яка повертатиме максимальне число з масиву


const numbers3 = [1, 2, 3, 4, 5];
function getMax() { // parametrize function
let max = Math.max(...numbers3) // try to avoid buil in methods for testing purpose
return console.log(max) // use tab and spaces
};
getMax(); 

// 2
const numbers = [1, 2, 3, 4, 5];

function getMax(someArray) {
    let maxNamb = 0;
    for (let numb of someArray){
        if (numb > maxNamb){
            maxNamb = numb;
        }
    }
    return maxNamb;
}

const maxNumber = getMax(numbers);

console.log(maxNumber) // має відображати максимальне число з масиву - 5



const numbers2 = [9, 2, 7, 4, 5, 22, -4,'s', true, undefined];

const getMax = (arr) => {
    let filteredArr = arr.filter(val => typeof val === 'number');
    let sortedArr = filteredArr.sort((a, b) => b - a);
    return sortedArr[0]
}

const maxNumber = getMax(numbers2);
console.log(maxNumber) // має відображати максимальне число з масиву - 5

// -------------OR-------------

const getMax1 = (arr) => {
    let filteredArr = arr.filter(val => typeof val === 'number');
    return Math.max.apply(null, filteredArr);
}

const maxNumber1 = getMax1(numbers2);
console.log(maxNumber1) //




// If the result is positive b is sorted before a
// If the result is 0 no changes are done with the sort order of the two values.
// If the result is negative a is sorted before b.

console.log(num.sort((a, b) => a - b)); 
// first call (15 - 2) - positive 2 move at the begining
// second call (-25 - 2) - negative vaue

/*
function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  */