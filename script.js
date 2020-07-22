"use strict"

// Практика 1.12

// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', 'Уже не вспомню');
// console.log(numberOfFilms);

// const questionName = prompt('Какой ваш последний просмотренный фильм?', '');
// const questionRating = +prompt('На сколько от 0 до 10 Вы бы его оценили?', '');
// const questionName2 = prompt('Какой ваш последний просмотренный фильм?', '');
// const questionRating2 = +prompt('На сколько от 0 до 10 Вы бы его оценили?', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// }
// personalMovieDB.movies[questionName] = questionRating;
// personalMovieDB.movies[questionName2] = questionRating2;


// console.log(questionName);
// console.log(questionName2);
// console.log(personalMovieDB);


// Условия урок 13

//Циклы

// if (4 == 9){
//     console.log('ok!!');
// }else{
//     console.log('nihua');
// }

// let num = 50;
// if(num < 49){
//     console.log('error1');
// }else if(num > 51){
//     console.log('error2');
// }else{
//     console.log('num = 50!');
// }

// Тернарный оператор

// let num2 = 20;
// (num2 === 10 ? console.log('num=10') : console.log('неверно!'));

// switch

// switch(let num3 = 20){
//     case 20: console.log('yes');
//     break;
//     case 19: console.log('no');
//     break;
//     case 21: console.log('no2');
//     break;
//     default: console.log('не в этот раз!');
//     break;
// }

// Циклы

// let num = 20

// while( num < 55){
//     console.log('num < 55');
//     num ++;
// }

// do{
//     console.log('num < 55');
//     num ++;
// }
// while(num < 55 )

// for(let i = 0;i<10;i++){
//     if(i === 4){
//         break;
//     }
//     console.log(i);
// }

// 15 урок

// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', 'Уже не вспомню');
// console.log(numberOfFilms);

// const questionName = prompt('Какой ваш последний просмотренный фильм?', '');
// const questionRating = +prompt('На сколько от 0 до 10 Вы бы его оценили?', '');
// const questionName2 = prompt('Какой ваш последний просмотренный фильм?', '');
// const questionRating2 = +prompt('На сколько от 0 до 10 Вы бы его оценили?', '');

// const numberOfFilms = +prompt('Сколько фильмов вы просмотрели за год?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// for(let i = 0;i < 2; i++){
//     const questionName = prompt('Какой ваш последний просмотренный фильм?', ''),
//             questionRating = prompt('На сколько от 0 до 10 Вы бы его оценили?', '');

//     if(questionName != null && questionRating != null && questionRating != '' && questionName != '' && questionName.length < 50){
//         personalMovieDB.movies[questionName] = questionRating;
//     } else{
//         console.log('error');
//         i--;
//     }
// }
// if(personalMovieDB.count < 10){
//     console.log('Слшком мало фильмов!');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log('Вы киноман!!!');
// }else if (personalMovieDB.count >= 30){
//     console.log('Вы кинокритик!!!!!');
// }else{
//     console.log('Произошла ошибка!!!!');
// }


// switch (personalMovieDB.count){
//     case 10:
//         console.log('вы любите кино');
//         break;
//     case 20:
//         console.log('вы очень!! любите кино');
//         break;
//     case 30: 
//         console.log('Вам можно позавидовать!');
//         break;
//         default:
//             console.log('неплохо');
//             break;
// }

// console.log(questionName);
// console.log(questionName2);
// console.log(personalMovieDB);

// Функции, стрелочные ES6

// showMessage();

// console.log(showMessage);
// var showMessage = function(){
//     alert('bttttt')
// }

// function showMessage (){
//     alert('byyyyyyy')
// }

// let func =(a,b) =>{
//     return a+b;
// }

// func()

// методы и свойства чисел/строк

// let str = 'eEEErrrRRRr';
// // console.log(str.length);
// let arr = [1,2,3,4,5,6,7,62,35,33,42,13,22,45,47];
// console.log(arr.length);

// console.log(str.toLowerCase()); 
// console.log(str.toUpperCase()); 
// console.log(str);

// const fruit = 'some fruit'
// console.log(fruit.indexOf('fr'));
// console.log(fruit.lastIndexOf('u'));

// const logg = 'Hello world';
// console.log(logg.slice(2,5));//с начала
// // console.log(logg.slice(-2,-5));// с конца
// console.log(logg.substring(2,5));
// console.log(logg.substr(4,6));

// let num = 12.7;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));

// let num2 = '12.8px';
// // обрезаем лишнее. как и точку  на конце.
// console.log(parseInt(num2));
// //с палавающей точкой
// console.log(parseFloat(num2));

// let numberOfFilms ;

// function start() {
//     numberOfFilms = +prompt('Сколько ильмов Вы уже посмотрели?','');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)  ){
//         numberOfFilms = +prompt('Сколько ильмов Вы уже посмотрели?', '');
//     }
// }
// start();
// const personalMovieDB = {
//     count : numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     private: false
// }

// console.log(personalMovieDB);

// function rememberMyFilms(){
//     for(let i=0;i<2;i++){
//         const a = prompt('Один из просмотренных Вами фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && b != '' && a != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         } else{
//         console.log('error');
//         i--;
//     }    
//     }
    
// }

// rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log('Слшком мало фильмов!');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы киноман!!!');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы кинокритик!!!!!');
//     } else {
//         console.log('Произошла ошибка!!!!');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.private);

// function writeYourGenres() {
//     for(let i = 1;i<=3;i++){
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`, '')
//         personalMovieDB.genres[i-1] = genre;
        
//     }
    
// }

// writeYourGenres();


// callback


// function first(){
//     setTimeout(() => {
//         console.log(1);
//     }, 500);
// }
// function second(){
//     console.log(2);
// }
// // first();
// // second();

// function learnJS(lang, callback){
//     console.log(`I learn ${lang}`);
//     callback();
// }

// learnJS('Javascript', function(){
//     console.log('Я прошел JS');
// });

// learnJS('Javascript', second);

// object

// const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 300,
//     zIndex: 3,
//     colors: {
//         border: 'black',
//         background: 'white'
//     },
//     makeTest: function(){
//         console.log('Test!');
//     }
// };
// const {border,background} = options.colors
// // Перебрать ключи объекта можно методом Object.keys
// console.log(border);
// options.makeTest();
// console.log(Object.keys(options).length); 
// console.log(options.name);
// delete options.width;
// console.log(options);

// console.log(options['colors']['border']);

// let counter=0;
// for(let key in options){
//     if(typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i}: имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else{
//         console.log(`Свойство ${key}: имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }

// МАССИВЫ И ПСЕВДОМАССИВЫ

// const arr = [1,32,44,9,18,47];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a,b){
//     return a - b ;
// }
// arr.pop() // удалли последний элемент
// arr.push(14);
// arr.shift();
// arr.unshift(90);
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let key of arr){
//     console.log(key);
// }

// arr.forEach((item,i,arr) => {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// split

// let q = prompt('Введите товары через ,', '');
// let products = q.split(', ');
// console.log(products.join('; '));


// Передача по ссылке/по значению

// по значению. тк это примитив
// let a = 5;
// let b = a;
// console.log(b);
// по ссылке. тк это объект. имеет не сам объект в себе, атольк ссылается на него. потому он изменяется
// let obj2 = {
//     a: 1,
//     b: 5
// }
// let a1 = obj2;

// a1.a = 10;

// console.log(obj2);
// console.log(a1);



// сделаем уникальный объект, без изменения копиями.
// Скопировали при помощи ЦИКЛА.

// function copy(mainObj){
//     let objCopy = {};
//     let key;

//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     };
//     return objCopy;
// }

// const numbers = {
//     a:5,
//     b:10,
//     c:102,
//     d:12,
//     f:{
//         x:-40,
//         y:-20
//     }
// }


// const newNumbers = copy(numbers);
// newNumbers.a = 50;

// console.log(numbers);
// console.log(newNumbers);




// Скопируем ОБЪЕКТ с помощью Object.assign


// const numbers2 = {
//     h:60,
//     k:503
// }

// console.log(Object.assign(numbers, numbers2));

// const numb = {
//     g: 'text',
//     r: 'text2',
//     v: 'text3',
// };

// const numbAdd = Object.assign({},numb);
// console.log(numbAdd);



// Копируем массив SLICE

// const oldArr = [
//     'a','b','c','d'
// ]
// const newArr = oldArr.slice();

// newArr[0] = 'Z';
// console.log(oldArr);
// console.log(newArr);




// Копируем элемент с помощью REST опeратора


// const videos = ['youtube', 'youtube2', 'youtube3', 'youtube4'];
// const cms = ['wordpress', 'joomla', 'bitrix']
// const videosNew = [...videos, ...cms, 'html' , 'css'];
// console.log(videosNew);



// function log(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const numBlock = [1,2,3];
// log(...numBlock);



// склонируем массив с помощью ...REST оператора


// const array0 = ['1','b', 'bggg'];
// const newArray0 = [...array0];
// console.log(newArray0);



// Клонируем объект с помощью REST оператора 

// const obj1 = {
//     q1: '111',
//     q2: '1w1',
//     q3: '115',
// }

// const obj20 = {...obj1};
// console.log(obj20);


// ООП 

// const animal = {
//     nouse: true,
//     tail: true,
//     lapi: 4,
//     eyes: 2,
//     mouth: 1,
//     voice: function(){
//         alert('uauauaua')
//     }
// }
// Устаревший формат.
// cat.__proto__ = animal;

//  Создать объект с нуля, и дсделать прототипом другой элемент
// const cat = Object.create(animal);
// const cat = {};
//  в динамике, при существующем элементе к которому необходимо применить свойства
//  Object.setPrototypeOf(cat, animal)
// console.log(cat.voice());

//24 УРОК ПРАКТИКА 

// const personalMovieDB = {
//     count : 0,
//     movies:{},
//     actors:{},
//     genres:[],
//     private: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько Фильмов Вы уже посмотрели?','');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//             personalMovieDB.count = +prompt('Сколько Фильмов Вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function(){
//         for(let i=0;i<2;i++){
//             const a = prompt('Один из просмотренных Вами фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');
//             if (a != null && b != null && b != '' && a != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             } else{
//             console.log('error');
//             i--;
//             }    
//         }
//     },
//     detectPersonalLevel: function(){
//         if (personalMovieDB.count < 10) {
//             console.log('Слишком мало фильмов!');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы киноман!!!');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы кинокритик!!!!!');
//         } else {
//             console.log('Произошла ошибка!!!!');
//         }
//     },
//     showMyDB: function (hidden){
//         if(!hidden){
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function(){
//         for(let i = 1;i<=3;i++){
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
//             // if(genre != null || genre != ''){
//             //     personalMovieDB.genres[i-1] = genre;
//             // }else{
//             //     genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
//             //     i--;
//             // }   
//             // console.log(genre);
//         }

//         let genre = prompt('Введите Ваши любимые жанры через ,', '').toLowerCase();
//             if(genre != null || genre != ''){
//                 personalMovieDB.genres= genre.split(', ');
//                 personalMovieDB.genres.sort();
//             }else{
//                 console.log('Вы ввели некоректные данные или не ввели их вовсе');
//                 i--;
//             }   
//             console.log(genre);

//         personalMovieDB.genres.forEach((element,index) => {
//             console.log(`Любимый жанр # ${index+1} - это ${element}`);
//             });
//     },
//     toggleVisibleMyDB: function(){
//         if(this.private){
//             this.private = false;
//         }else{
//             this.private = true;
//         }
//     }
// }
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();