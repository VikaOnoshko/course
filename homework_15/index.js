// 1. Создайте переменные, затем сложите их и выведите результат в консоль разработчика.

//     let x = 20
//     let y = 58
//     let z = 42

let x = 20;
let y = 58;
let z = 42;

let sumVariables = x + y + z;

console.log(sumVariables);

// 2. Создайте переменные:

// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году

// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds2.

const milisecodnsInSecond = 1000;
const secondsInMininute = 60;
const mininutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

const myAgeInSeconds2 =
  20 * daysInYear * hoursInDay * mininutesInHour * secondsInMininute;

console.log(myAgeInSeconds2);

// Task 3 💻
//     let count = 42
//     let userName = '42'
// Создайте две переменные. Поместите в них переменную count и превратите в строку, а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.

let count = 42;
let userName = "42";

console.log(`${count}`, String(count), "" + count, count.toString());

console.log(+userName, Number(userName), parseInt(userName));

// Task 4
// Имеется три переменные:

//   let a = 1
//   let b = 2
//   let c = "белых медведей"
// Сложите переменные так, чтобы в результате получилось выражение: 12 белых медведей и результат выведите в консоль.

let a = 1;
let b = 2;
let c = "белых медведей";

let stringA = String(a);
let stringB = String(b);
console.log(stringA + stringB + " " + c);
console.log(`${String(a)}${String(b)} ${c}`);

// Task 5 💻
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:

// - доступ
// - морпех
// - наледь
// - попрек
// - рубило

let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";
let lengthWords = (word1 + word2 + word3 + word4 + word5).length;
console.log(lengthWords);

// Task 6 💻
// Запросить у пользователя имя и возраст и вывести их в консоль.

const name = prompt("Имя");
const age = +prompt("Возраст");

console.log(`Имя:${name},Возраст:${age}`);

// Task 1 👨‍🏫
// Поменяйте значение переменных местами не создавая дополнительной переменной:

//     let a = 4
//     let b = 3

let f = 4;
let m = 3;

console.log(`f=${f}; m=${m}`);
f = f + m;
m = f - m;
f = f - m;
console.log(`f=${f}; m=${m}`);

// Task 2 👨‍🏫
// В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!

//     let codeWord1 = "обернись";
//     let codeWord2 = "неужели";
//     let codeWord3 = "огурцы";
//     let codeWord4 = "липкие";
//     let codeWord5 = "?!";
// Создайте переменную cipher и поместите туда необходимые символы

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

console.log(codeWord1[1]);
console.log(codeWord2[1]);
console.log(codeWord3[1]);
console.log(codeWord4[1]);
console.log(codeWord5[1]);

const cipher =
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher);
