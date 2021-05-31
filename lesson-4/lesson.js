const helloColleagues = (company = 'amazon', team = 'AWS') => { // set default param
    return `I am working in ${company} company in amazing team ${team}`
}

console.log(helloColleagues(undefined, "Google cloud"));

let a = 'primitive type';

let b = a;
b = 'change type';

console.log(a)
console.log(b)

let obj = {a: 'referance type'};

let obj1 = obj;

obj1.a = 'another value'

console.log(obj)
console.log(obj1)


let post = [
    1,
    true,
    "Apple",
    undefined,
    function someFunc() {
        return `my function works ${let}`;    
    },
    [{ name: "Karl", age: 5, happy: true }, {}, {a: []}]
];

console.log(post.slice(0, 1), post.slice(-1)); // [b,c]

console.log(post[0]);

console.log(post[post.length - 1]);

console.log(post[4]());

console.log(post[post.length - 1][0])


// Object Destructuring - extract object properties OR array elements and store them in variables
const obj = {name: 'Mykola', age: 27}
console.log(obj.name);
console.log(obj.age);

const {name, age} = obj;
console.log(name); // Mykola
console.log(age); // age is not defined



// Array destructuring
// Destructuring assignment allows for instantly mapping an object or array onto many variables.
// we have an array with the name and surname
let arr = ["Mykola", "Solopii", "lol"]

// destructuring assignment
let [firstName, surname, lol] = arr;

console.log(firstName); // Mykola
console.log(surname);  // Solopii
console.log(lol)
// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.
// It’s just a shorter way to write
// sets firstName = arr[0]
// and surname = arr[1]

let cat = "cat";
let dog = "dog";

[cat, dog] = [dog, cat];

console.log(cat);
console.log(dog);