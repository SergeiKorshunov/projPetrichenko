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

let numberOfFilms ;

function start() {
    numberOfFilms = +prompt('Сколько ильмов Вы уже посмотрели?','');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)  ){
        numberOfFilms = +prompt('Сколько ильмов Вы уже посмотрели?', '');
    }
}
start();
const personalMovieDB = {
    count : numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
}

console.log(personalMovieDB);

function rememberMyFilms(){
    for(let i=0;i<2;i++){
        const a = prompt('Один из просмотренных Вами фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && b != '' && a != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        } else{
        console.log('error');
        i--;
    }    
    }
    
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Слшком мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы киноман!!!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы кинокритик!!!!!');
    } else {
        console.log('Произошла ошибка!!!!');
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for(let i = 1;i<=3;i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, '')
        personalMovieDB.genres[i-1] = genre;
        
    }
    
}

writeYourGenres();