// Завдання 2
// Коли ви запускаєте функцію arrayFromRange, функція повинна виводити числа від мінімального до максимального значення в форматі масиву
// Також ця функція повинна приймати від'ємні числа

function arrayFromRange(min, max) {
    let length = max - min;
    let arr = new Array();
    for (let i=0; i<length; i++) {
        let a = min++;
        arr.push(a);
    }
    arr.push(max);
    return arr;
}

const numbers = arrayFromRange(1, 4); // мінімальне та максимальне значення

console.log(numbers); // повинно повернути [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // повинно повернути [-10, -9, -8]



const arrayFromRange = (min, max) => {
    let resArr = [];
    for(let i = min; i <= max; i++) resArr.push(i);
    return resArr;
}

const numbers1 = arrayFromRange(1, 4); // мінімальне та максимальне значення

console.log(numbers1); // повинно повернути [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // повинно повернути [-10, -9, -8]