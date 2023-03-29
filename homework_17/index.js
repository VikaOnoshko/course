// // #### Task 1 💻

// // Создайте переменные и присвойте им значения:
// //     'true'
// //     false
// //     17
// //     undefined
// //     null
// // > Затем с помощью оператора **`typeof`** выведите в консоль все типы созданных значений переменных.

let task_1_1 = "true";
console.log(typeof task_1_1);

let task_1_2 = false;
console.log(typeof task_1_2);

let task_1_3 = 17;
console.log(typeof task_1_3);

let task_1_4 = undefined;
console.log(typeof task_1_4);

let task_1_5 = null;
console.log(typeof task_1_5);

// // Task 2 💻
// // Даны две переменные:

// //     let height = 15
// //     let width = 20
// // С помощью условий выведите в консоль разработчика наибольшее число.

let height = 15;
let width = 20;

if (height > width) {
  console.log(height);
} else {
  width > height;
  console.log(width);
}

// // Task 3 💻
// // Написать перебор от 1 до 20, где выведутся все числа кратные трём.

// // Для вычисления кратности обратите внимание на оператор %

for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// // Task 4 💻
// // Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. Для решения этой задачи нам помогут логические операторы || &&.
// //     let key = true
// //     let documents = true
// //     let pen = true
// //     let apple = false
// //     let orange = true
// // Ответ поместите в переменную shouldGoToWork

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

// // Task 5 💻
// // Запросить у пользователя число:

// // 1. Если число делится без остатка на 5 выводим сообщение Fiz
// // 2. Если число делится без остатка на 3 выводим сообшение Buz
// // 3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

let number = prompt("Введите число", "");
if (number % 3 == 0 && number % 5 == 0) {
  console.log("FizBuz");
} else if (number % 3 == 0) {
  console.log("Buz");
} else if (number % 5 == 0) {
  console.log("Fiz");
}

// // Task 6 💻
// // Написать программу, которая выполняет следующие операции:

// // Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей пивка.
// // Если меньше, то выводит сообщение - Пей колу.
// // Добавить условие, что если возраст от 16-18, выводим сообщение - Можешь выкурить сигаретку, только маме не говори.

let age = prompt("Введите ваш возраст", "");
if (age > 18) {
  console.log("Попей пивка");
} else if (age < 18) {
  console.log("Пей колу");
} else if (16 < age < 18) {
  console.log("Можешь выкурить сигаретку, только маме не говори");
}

// // Task 7 💻
// // Напишем программу для туристического терминала. Запросите у пользователя в какую сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в консоль чтобы он попробовал еще раз.

// юг на юг пойдешь счастье найдешь
// север на север пойдешь много денег найдешь
// запад на запад пойдешь верного друга найдешь
// восток на восток пойдешь разработчиком станешь
// Используйте конструкцию switch

let cardinalPoints = prompt("В какую сторону света вы хотите отправиться?", "");

switch (cardinalPoints) {
  case "юг":
    console.log("на юг пойдешь счастье найдешь");
    break;

  case "север":
    console.log("на север пойдешь много денег найдешь");
    break;

  case "запад":
    console.log("на запад пойдешь верного друга найдешь");
    break;

  case "восток":
    console.log("на восток пойдешь разработчиком станешь");
    break;

  default:
    console.log("введите данные еще раз");
}

// // ADVANCED level
// // Task 1 👨‍🏫
// // Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'

// Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через alert

// Привет, Полина Набережная!

let welcome = prompt("Введите ваше имя", "");

function capitalize(str) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

// «Взять все символы без пробелов (\ S), стоящие в начале строки (^) или после любого символа пробела (\ s) и преобразовать их в верхний регистр (toUpperCase)».

welcome = capitalize(welcome.toLowerCase());

alert(`Привет, ${welcome}`);

// // Task 2 👨‍🏫
// // Написать программу, которая выполняет следующие операции:

// // Запрашивает у пользователя число.
// // Последовательно задает вопрос: cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// // По окончании вывести пользователю alert, содержащий формулу и результат например:
// // ((((6 - 10) + 5) * 20) / 2 = 110)

let expression = +prompt("Введите число", "");
let subtraction = +prompt("Сколько отнять?", "");
let deduction = expression - subtraction;
let summ = +prompt("Сколько прибавить?", "");
let deductionSumm = deduction + summ;
let multiplication = +prompt("На сколько умножить?", "");
let deductionSummMult = deductionSumm * multiplication;
let division = +prompt("На сколько разделить", "");
let deductionSummMultdiv = deductionSummMult / division;
alert(
  `(((${expression}-${subtraction})+${summ})*${multiplication})/${division}=${deductionSummMultdiv}`
);
alert(deductionSummMultdiv);

// Task 3 👨‍🏫
// Написать программу, которая будет выводить в консоль лесенку.

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// Не забудьте вопспользоваться циклами

for (let stair = ""; stair.length < 6; ) {
  console.log((stair += "#"));
}
