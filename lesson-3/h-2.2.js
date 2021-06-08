// 2.2) Напишіть функцію, яка приймає два числа і повертає максимальне з двох переданих чисел. Потрібно обробити і від"ємні значення


let maxNumber = (a, b) => {
if (a,b >= 0) {
    return console.log(Math.max(a,b))
}
else {
    return console.log('Only positive values can be accepted')
}
};
maxNumber(1,2);

function  maxNumber (a, b){
    if (a>=b) 
    return a;
    else
    return b; 
}

function maxNumber(a, b) {
    if (a && b) {
        return a > b ? a : b
    } else {
        return 'Type valid data';
    }
}
//
console.log(maxNumber (1, -2));
