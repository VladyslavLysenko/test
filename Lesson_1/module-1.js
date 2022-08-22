//6

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line


// //массив.forEach(function callback(element, index, array) {
//   // Тело коллбек-функции
// //});


//   numbers.forEach(function callback(number) {
//     if (number > value) {
//     filteredNumbers.push(number)
//   }
// })

  
  
// console.log(filteredNumbers);

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
  
//   return filteredNumbers;
// }



// //Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив,
// //в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.
// //Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// filterArray([1, 2, 3, 4, 5], 4) // [5]
// // filterArray([1, 2, 3, 4, 5], 5) // []
// // filterArray([1, 2, 3, 4, 5], 3) // [4, 5]
// // filterArray([12, 24, 8, 41, 76], 38) // [41, 76]
// // filterArray([12, 24, 8, 41, 76], 20)  // [24, 41, 76]




//7

//Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray,
//и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
//Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  
//   firstArray.forEach(function callback(firstAr) {
//   if (secondArray.includes(firstAr)) {
//     commonElements.push(firstAr);
//   }
// })

//   console.log(commonElements);
//   return commonElements;
//   // Change code above this line
// }


// getCommonElements([1, 2, 3], [2, 4]) //[2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []




//№10
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
// Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;



// orderedItems.forEach((item) => {totalPrice+=item;});

// orderedItems.forEach(logMessage);
  // return totalPrice;
  // }

// Change code above this line


// №11
// ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

  // numbers.forEach(function (number) {
  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }
  // });

//   const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// filterArray([1, 2, 3, 4, 5], 3)   //возвращает [4, 5]
//  filterArray([1, 2, 3, 4, 5], 4) //возвращает [5]
//  filterArray([1, 2, 3, 4, 5], 5) //возвращает []



//№12

// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

// const getCommonElements = (firstArray, secondArray) => {
//    const commonElements = [];
//   firstArray.forEach((arr) => {
//   if (secondArray.includes(arr)) {
//  commonElements.push(arr); }
// })
  
//   // Change code above this line
//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// getCommonElements([1, 2, 3], [2, 4])


// №13

//function changeEven(numbers, value) {
  // Change code below this line
  //for (let i = 0; i < numbers.length; i += 1) {
    //if (numbers[i] % 2 === 0) {
      //numbers[i] = numbers[i] + value;
  //  }
//  }
  // Change code above this line
//}

//const changeEven = (numbers, value) => {

// function changeEven(numbers, value){
//   let newArray = [];

//   numbers.forEach((elm) => {
//    if (elm % 2 === 0) {
//       newArray.push(elm + value);
//     } else { newArray.push(elm) };
//  });
// //consol.log(numbers);
// //consol.log(newArray);
//   return newArray;
  
// }


// changeEven([1, 2, 3, 4, 5], 10)

//Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

//Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.



// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригинальный массив не изменился
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]


// №14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet=> planet.length);


// //Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// №15
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);
// const authors = books.map(book => book.author);
// console.log(authors);
// const ratings = books.map(book => book.rating);
// console.log(ratings);
// // Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.


// №16
// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// students.map(student => student.courses);
// // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book=> book.genres);
// console.log(genres);
// // Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// #17
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.


// Change code below this line




// const getUserNames = users => {
//   const name = users.map(user => user.name)
// return name
    
    

  
  // Change code above this line


  // #19
  // МЕТОДЫ FILTER И FIND
//   const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// // console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
// а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 ===0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

// №20

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.
//
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);

// const uniqueGenres = allGenres.filter(
//   (book, index, array) => array.indexOf(book) === index
// );
// console.log(allGenres);
// console.log(uniqueGenres);


// №21

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Mango и Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Ajax

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Poly и Houston


// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line
// // const best = students.filter(student => student.score >= HIGH_SCORE);
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);


// №22
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
 
//   // let userEyeColor =
//   return  users.filter(user => user.eyeColor === color);
 
// };



// // Change code above this line


// №23