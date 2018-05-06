// ========== Задачи - var ========== //

//1)
let price;
const maxNumber = 10;
const userName = 'Igor';
let userInfo;

//2) Результат - undefined

//3) Результат - string 2

// ========== Задачи let и const ========== //

//1) Результат - test is not defined

//2) Результат - Assignment to constant variable.

//3) Результат - Identifier 'Somevariable' has already been declared

// ========== Задачи string ========== //

let str = 'some test string';
console.log(`Исходный текст: ${str}`);

//1)
console.log(`Первая буква: ${str[0]}, последняя буква: ${str[str.length-1]}`);

//2)
console.log(`Первая буква в верхнем регистре: ${str[0].toUpperCase()}, последняя буква в верхнем регистре: ${str[str.length - 1].toUpperCase()}`);

//3)
console.log(`Положение(индекс) слова strange: ${str.indexOf('string')}`);

//4) Сомниваюсь в этом варианте, если пробелов будет больше 2-х то будет возвращен индекс последнего пробела.
console.log(`Положение второго пробела : ${str.lastIndexOf(' ')}`);

//5)
console.log(`Получить строку с 5-го символа длиной 4 буквы: ${str.substr(5, 4)}`);

//6)
console.log(`Получить строку с 5-го по 9-й символ: ${str.substring(5, 9)}`);

//7)
console.log(`Строка без последних 6 символов: ${str.slice(0, -6)}`);

//8)
let a = 20,
    b = 18;

console.log(`Док, в какой год мы попали ? - В ${a + '' + b}, Марти.`);

// ========== Задачи int ========== //

//1)
console.log(`Получить число Пи из Math и округлить его до 2 знаков после точки: ${Math.PI.toFixed(2)}`);

//2)
console.log('Найти максимальные и минимальные числа из набора (15, 11, 16, 12, 51, 12, 13, 51)');
console.log(`Максимальное число: ${Math.max(15, 11, 16, 12, 51, 12, 13, 51)}`);
console.log(`Минимальное число: ${Math.min(15, 11, 16, 12, 51, 12, 13, 51)}`);

//3)
console.log(`Получить случайное число и округлить его до двух цифр после запятой: ${Math.random().toFixed(2)}`);

let maxNumb = 100;
console.log(`Получить случайное число от 0 до ${maxNumb}: ${(Math.random() * maxNumb).toFixed()}`);

//4)
console.log(`Результат вычисления 0.6 + 0.7 = ${(0.6 + 0.7).toFixed(1)}`);

//5)
let myMoney = '100$';
console.log(`Получить число из строки ${myMoney} = ${parseInt(myMoney)}`);

// ========== Задачи objects ========== //

//1)
let marketItem = {
    product: 'iPhone'
}

//2)
marketItem.price = 1000;
marketItem.currency = 'dollar';

//3)
marketItem.details = {
    model: 'iPhone X',
    color: 'Black'
}