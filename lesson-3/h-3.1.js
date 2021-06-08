// 3.1) Є об’єкт в якому зберігається зарпати кількох колег:
//
// Напишіть функцію, яка повертає ім’я та значення працівника, який отримує найбільшу зарплату.

let maxSalary = () => {
    let obj = Object.values(salaries);
    let max = Math.max(...obj);
    return max;
};





function highestValOfObj(obj){
    let highestValue = 0;
    let keyName;
    for (let key in obj){
        if(obj[key] > highestValue){
            highestValue = obj[key];
            keyName = key;
        } 
    }
    return `${keyName} salary is ${highestValue}` // you can return object or any valid data type
}

// let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }
console.log(highestValOfObj(salaries))
//