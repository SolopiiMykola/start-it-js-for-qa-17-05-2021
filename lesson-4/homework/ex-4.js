// Завдання 4
//
// Завдання складається з 3 частин
// 1. На основі масиву movies потрібно повернути усі фільми, які були випущені в 2021 році з рейтингом більше 4
// 2. Потім відсортуйте відфільтровані раніше фільми за рейтингом у порядку спадання
// 3. В кінці поверніть тільки назви відсортованих фільмів по тайтлу в форматі масиву. Результат скрипта має бути ось таким - ["a", "c"]

let movies = [
    {title: 'c', year: 2021, rating: 4.3},
    {title: 'a', year: 2021, rating: 4.7},
    {title: 'b', year: 2020, rating: 4.4},
    {title: 'd', year: 2021, rating: 3.9},
]

let filteredArr = movies.filter(val => val.rating >= 4 && val.year === 2021);
console.log(filteredArr)
//----
let sortedArr = filteredArr.sort((a,b)=> b.rating - a.rating);
console.log(sortedArr)
//----
let res = [];
let filmNames = sortedArr.forEach(val => res.push(val["title"]));
console.log(res)

// or 
let movieTitle = movies2021.map(a => a.title);
console.log(movieTitle);


function newGoodMovies (arr){
    // 1
    let newGoodMovies = arr.filter(function (item){
        return item.year == 2021 && item.rating >4.0;
    });
    // 2
    newGoodMovies.sort(function (a,b){
        return b.rating - a.rating;
    });
    // 3
    let moviesTitle = newGoodMovies.map(function(item, index, array) {
        return item.title;
    });

    return moviesTitle;
}
console.log(newGoodMovies(movies));






const result = movies
    .filter((movie) => movie.year === year && movie.rating >= rating) // filtered array
    .sort((a, b) => b.rating - a.rating ) // sorted array
    .map((movie) => movie.title) // ['a', 'c']

console.log('result = ', result)