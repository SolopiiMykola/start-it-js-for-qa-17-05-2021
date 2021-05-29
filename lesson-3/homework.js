// Ex 2
let name1 = prompt('What is your name?');
if (name1) {
    alert (`Hi, ${name1}`);
} else {
    alert('Please type valid name')
}

let birthday = prompt ('When did you born?');
if (birthday) {
    const currentYear = new Date();
    let age = currentYear.getFullYear() - birthday;
    alert ('You are ' + age + ' years old' );
} else {
    alert('Please type valid birthday')
}


// Ex 3
let number = prompt ('Please enter the number beetween 60 and 90');
if (number >= 90 && number <= 100)
{console.log ('A')} 
else if (number >= 80 && number < 90)
{console.log ('B')} 
else if (number >= 70 && number < 80)
{console.log ('C')} 
else if (number >= 60 && number < 70)
{console.log ('D')} 
else {console.log ('Your nomber is not between 60 and 90')}












let num = 65
if(num < 60){
    console.log(`current number ${num} equals to letter 'F'`);
} else if (num < 70){
    console.log(`current number ${num} equals to letter 'D'`);
} else if (num < 80){
    console.log(`current number ${num} equals to letter 'C'`);
} else if (num < 90){
    console.log(`current number ${num} equals to letter 'B'`);
} else if (num < 100){
    console.log(`current number ${num} equals to letter 'A'`);
}else  {
    console.log(`current number ${num} not equals to any letters`);
}
