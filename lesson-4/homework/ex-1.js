// Завдання 1
// Напишіть функцію, яка повинна повертати суму всіх чисел усередині масиву. Функція повинна враховувати позитивні та від'ємні значення

// Приклад масиву
const numbers = [1, -1, 2, 3];

function sum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
        }
        return sum
    }
    
    console.log(sum(numbers));




const sum = (arr) => {
    let res = 0;
    for (let val of arr) {
        res += val
    }
    return res
}

console.log(sum(numbers));

function sumFunc(numbers) {
    if (!Array.isArray(numbers)) return; // verify input data
    let sum = 0;
    numbers.forEach(each => {
        sum += each;
    });
    return sum; 
    };
    console.log(sumFunc(numbers)); 

// -------------OR-------------

const sum1 = (arr) => {
    let res=0;
    arr.forEach(val => res += val);
    return res;
}

console.log(sum1(numbers))

// -------------OR-------------

let reduce = numbers.reduce((sum, current)  => sum + current ,0)
console.log(reduce)


// Reducer
const numbers = [1, -1, 2, 3];

let sum = (numbers) => {return numbers.reduce((sum, current) => sum + current, 0)}

console.log(sum(numbers));

const numbers = [1, -1, 2, 3];
/*
The reducer function returns the value and assigns it to the accumulator.
The battery value is stored after all iterations and returned at the end as the only result.
*/
numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    /*
        accumulator the same as our "let sum = 0;"
        currentValue will iterate throught all elements in array, 
        currentIndex will iterate throught all indexes in array
        array - source array
        so on each call we want to get the current value and add it to the accumulator
    */

    return accumulator + currentValue; // reduce with get the result and store it in accumulator
}, 0) // initial value for accumulator

// first call
// a = 0, c = 1, a + c = 1;
// second call
// a = 1, c = -1, a + c = 0;
// third call
// a = 0, c = 2, a + c = 2;
// fourth call
// a = 2, c = 3, a + c = 5;