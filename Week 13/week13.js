//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate)

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = new Date();
console.log(currentYear.getFullYear())

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = new Date();
console.log(currentMonth.getMonth())

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = new Date();
console.log(currentDay.getDay())

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date("2023-05-18");
console.log(birthday)

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date(Date.now() + 41 * 24 * 60 * 60 * 1000);
console.log(futureDate)
// !!! Сделала с помощью подсказки из интернета, но не очень поняла, почему эта часть "Date.now() + 41 * 24 * 60 * 60 * 1000" должна быть в скобках под "new Date(...)" т.к. new Date оборачивает миллисекунды в дату, верно?

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
console.log(currentDay.getDate() - futureDate.getDate());

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log(currentDay.getDate() - pastDate.getDate());

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = new Date(Date.now() + 5 * 365 * 24 * 60 * 60 * 1000);
console.log(futureYear.getFullYear());

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(birthday.getTime() + 366 * 24 * 60 * 60 * 1000);
console.log(`${futureDateInFutureYear.getDate()}.${futureDateInFutureYear.getMonth() + 1}.${futureDateInFutureYear.getFullYear()}`);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(futureYear.getFullYear() - new Date().getFullYear());

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const strDateNew = Date.parse(strDate);
// console.log(strDateNew.getDate()); //Почему здесь не работает?...

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(strDateNew);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';
const wrongDate = Date.parse(date);
console.log(wrongDate);
if (isNaN(wrongDate)) { console.log('Неправильный формат даты'); } else { console.log('Правильный формат даты'); }


//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 456;
if (number > 0) { console.log(number); }

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
const num2 = 7;
if (num2 % 2 === 0) { console.log('число чётное'); } else { console.log('число нечетное'); }

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
const num3 = 7;
if (num3 % 3 === 0) { console.log('число кратно 3'); } else { console.log('число не делится на 3 без остатка'); }

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
const num = 2;
if (num.length === 1) { console.log('число однозначное'); } else { console.log('число не однозначное'); }
//КОТ ПОДСКАЖИ, ПОЧЕМУ НЕ РАБОТАЕТ???

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
const num22 = 222;
if (num2.length === 2) { console.log('число двузначное'); } else { console.log('число не двузначное'); }
//ТА ЖЕ ПРОБЛЕМА...

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) { console.log(number); }

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 === 0 || number % 7 === 0) { console.log('число кратно 5 или 7'); } else { console.log('число некратно 5 или 7'); }

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) { console.log(number); }

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number.length === 3 && number >= 0) { console.log(number); }
//ОЩУЩЕНИЕ, ЧТО ТАКАЯ ЖЕ ПРОБЛЕМА КАК В 21 и 22.

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
switch (new Date().getDay()) {
    case 0: day = 'воскресенье'; break;
    case 1: day = 'понедельник'; break;
    case 2: day = 'вторник'; break;
    case 3: day = 'среда'; break;
    case 4: day = 'четверг'; break;
    case 5: day = 'пятница'; break;
    case 6: day = 'суббота'; break;
    default: day = 'такого дня не бывает'; break;
}
console.log(day);
//ПОДСКАЖИ ПОЖАЛУЙСТА, КАК ПРОВЕРИТЬ НА ДЕНЬ НЕДЕЛИ КОНКРЕТНУЮ ДАТУ ПО ЗАПРОСУ, НАПРИМЕР 2022-08-17? пОДСТАВЛЯЯ ЕЕ В СКОБКИ "new Date()" - почему-то всегда вылезает "четверг"...

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'N': fullName = 'Север'; break;
    case 'S': fullName = 'Юг'; break;
    case 'E': fullName = 'Восток'; break;
    case 'W': fullName = 'Запад'; break;
    default: fullName = 'error'; break;
}
console.log(fullName);