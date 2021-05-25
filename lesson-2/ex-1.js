console.log("apple" > "pineapple");
console.log('2' > '12');
console.log(2 > false);

console.log(Number(false));
console.log(undefined === null);

console.log(Number(undefined))
console.log(Number(null))

console.log(null == '/n0/'); 
console.log(null === +'/n0/');

// let x = 10;
// let y = (x > 5) && (x < 15); 

// console.log(y)

// let x = 5; 
// x += 3;
// x = 5 + 3;

// console.log(x);

// let x = 10; 

// let y = x--; 
// console.log(y)
// console.log(x)
// let z = x++; 
// console.log(z)
// z = y + 1
// console.log(x);
// console.log(x);
// console.log(x);
// console.log(y);
// console.log(y);

let x = 1; 
let y = x !== 2;

console.log(y)

// let a = 1, b = 1;

// let c = ++a; 
// let d = b++;

// console.log(a); //  
// console.log(b); // 
// console.log(c); // 
// console.log(d); //

if (undefined) {
    console.log( 'Hello' );
  }

// const ternarCondition = "some condition" ? true : false


// let result;
// if (a + b < 10) {
//   result = 'Few';
// } else {
//   result = 'Many';
// }

// let result;
const a = 1;
const b = 2;
const condition = (a + b < 10);
const few = 'Few';
const ternarCondition = condition ? few : 'Many';

console.log(ternarCondition);