// 2.1) Напишіть функцію isEmpty (obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.
let isEmpty = (obj) => { // type valid parameter name
    if (Object.keys(obj).length == 0) { // verify length 
        return true; 
    }
    else {
        return false
    }
};
console.log(isEmpty(schedule));


function isEmpty(obj) {
    for (let keys in obj) {
        return false;
    }
    return true;
}

let schedule = {};
console.log( isEmpty(schedule) );

schedule["8:30"] = "get up";
console.log( isEmpty(schedule) );


const isEmpty = (obj) => {
    return Object.keys(obj).length == 0 ? true : false;
  }
  