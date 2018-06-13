// ========== Задачи - Лексическое окружение ========== //
// Задача №1
// Нам вернется строка 'UNDEFINED', так как переменные var всплывают, но до присвоения значения равны undefined, + undefined мы преобразовали в строку.

// Задача №2
// Нам вернется строка 'IVAN', так как при вызове функции getBigName(userName) значение переменной userName берется из глобального окружения (так как в локальном getBigName ее нет), а внутри функции getBigName есть аргумент name в который передается переменная userName. Так же, если бы функция test() вызывалась до присвоения значения переменной userName, тогда нам вернулось бы 'UNDEFINED'.

// Задача №3
// В консоль выведется cucumber, так как getFood объявлена в глобальном окружении то и значение переменной food берется из глобала.


// ========== Задачи - Замыкание ========== //
// Задача №1
// Нам вернется 0, так как getDollar был объявлен в окружении самовызывающейся функции, и при вызове искал переменную dollar сначала в своем окружении, потом в окружении самовызывающейся функции и там ее нашел.

// Задача №2
// Сначала выведется 'Hello World' а потом Uncaught ReferenceError: text is not defined, так как в глобальном окружении нет переменной text.

// Задача №3
function minus(firstNumber = 0) {
    return function (secondNumber = 0) {
        return firstNumber != 0 ? firstNumber - secondNumber : secondNumber;
    };
}

// Задача №4
function multiplyMaker(firstNumber) {
    return function (secondNumber) {
        return firstNumber * secondNumber;
    }
}

const multiply = multiplyMaker(2);

multiply(5); // 10

// Задача №5
const StringControl = (function () {
    let newString;

    function createString(str) {
        newString = str != undefined ? String(str) : '';
        return newString;
    }

    function getString() {
        return newString;
    }

    function getStringLenght() {
        return newString.length;
    }

    function reverseString() {
        newString = newString.split('').reverse().join('');
        return newString;
    }

    return {
        createString,
        getString,
        getStringLenght,
        reverseString
    }
}());

// Задача №6
const Calculator = (function () {
    let result = 0,
        prevResult;

    // Установить значение первой цифры
    function setFirstNumber(number) {
        console.log('FirstNumber = ' + number);
        result = number;
        return this;
    }

    // Узнать результат
    function getResult() {
        console.log('Result = ' + result);
        return this;
    }

    // Сложение
    function plus(secondNumber) {
        prevResult = result;
        result += secondNumber;
        toConsole('+', prevResult, secondNumber, result)
        return this;
    }

    // Вычитание
    function minus(secondNumber) {
        prevResult = result;
        result -= secondNumber;
        toConsole('-', prevResult, secondNumber, result)
        return this;
    }

    // Умножение
    function multiply(secondNumber) {
        prevResult = result;
        result *= secondNumber;
        toConsole('*', prevResult, secondNumber, result)
        return this;
    }

    // Деление
    function divide(secondNumber) {
        prevResult = result;
        result /= secondNumber;
        toConsole('/', prevResult, secondNumber, result)
        return this;
    }

    // Возведение в степень
    function exponentiation(secondNumber) {
        prevResult = result;
        result = Math.pow(prevResult, secondNumber);
        toConsole('exp', prevResult, secondNumber, result)
        return this;
    }

    // Выводим информацию об операции в консоль
    function toConsole(type, prevResult, secondNumber, result) {
        console.log(`${prevResult} ${type === 'exp' ? 'exponentiation to' : type} ${secondNumber} = ${result}`);
    }

    // Публичные методы
    return {
        setFirstNumber,
        getResult,
        plus,
        minus,
        multiply,
        divide,
        exponentiation
    }
}());