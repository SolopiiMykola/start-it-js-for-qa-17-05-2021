// 1.2 Отримайте довжину об'єкта post і напишіть скрипт, який повинен повернути список значень ключів об'єкта "post"
const keys1 = Object.keys(post);
console.log(keys1.length);

for (let keys in post){
    console.log(post[keys])
}
// OR

console.log(Object.values(post))


