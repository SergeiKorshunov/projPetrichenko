// Практика 1.1

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', 'Уже не вспомню');
console.log(numberOfFilms);

const questionName = prompt('Какой ваш последний просмотренный фильм?', '');
const questionRating = +prompt('На сколько от 0 до 10 Вы бы его оценили?', '');
const questionName2 = prompt('Какой ваш последний просмотренный фильм?', '');
const questionRating2 = +prompt('На сколько от 0 до 10 Вы бы его оценили?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
personalMovieDB.movies[questionName] = questionRating;
personalMovieDB.movies[questionName2] = questionRating2;


console.log(questionName);
console.log(questionName2);
console.log(personalMovieDB);