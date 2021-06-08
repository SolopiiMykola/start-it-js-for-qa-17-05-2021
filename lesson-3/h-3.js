// 3) Є об’єкт в якому зберігається зарпати кількох колег:
// Напишіть функцію, яка підсумує всі зарплати і повертає це значення. У прикладі вище результат має бути 1000.


let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 };
let sum = 0;
let sumSalaries = () => {
    for (let key in salaries) {  // параметризувати функцію
    sum += salaries[key];
};
 return console.log(sum);
};
sumSalaries();



let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }  
function sum (obj){ 
    let sumSalaries = 0;
    for (let key in obj) {
        sumSalaries += obj[key]; // add variable called "sum" and return value
    }
}

let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }
//



function sumOfObj(obj){
    let res = 0;
    for(let key in obj) {
        res += obj[key]
    }
    return res;
}

console.log(sumOfObj(salaries))
