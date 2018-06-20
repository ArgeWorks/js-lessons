//////////////////////////////////////////////////////////// JS ////////////////////////////////////////////////////////////

// Операторы: +, -, *, /, =, !, и т.д

// Операнд:
5 + 5  // обе цифры 5 это операнды (или аргументы оператора) а + это оператор.

    // Унарные операторы:
    + i
    - 10    // меняет число на противоположное, если было 10 становится -10.
    + '1'   // преобразовывает строку в число
// и т.д

// Бинарные операторы:
// (2 + 2)  //бинарный плюс
// (2 - 2)  //бинарный минус

// Бинарный + всегда склеивает строковые операнды в одну строку (без вычесления)
// остальные операторы всегда пытаются преобразовать строку в число и выполнить математические действия.

// Если сравнивать undefined то undefined равен лишь null или себе и ничему другому, так же undefined возвращает false.

//--------------------------

// В JavaScript есть три преобразования:

// Строковое: String(value) – в строковом контексте или при сложении со строкой. Работает очевидным образом.
// Численное: Number(value) – в численном контексте, включая унарный плюс +value. Происходит при сравнении разных типов, кроме строгого равенства.
// Логическое: Boolean(value) – в логическом контексте, можно также сделать двойным НЕ: !!value.

//--------------------------

// Если переменная не равна нулю И она является undefined (если переменная равна undefined то она преобразовывается в NaN, NaN преобразовывается в false, 
// а оператор if запинается на правде, значит нам нужно подставить ! к переменной, что-бы false стало true)
// undefined = NaN = false
function test(id) {
    //  if id=undefined (undefined = NaN = false, а нам нужно true, подставляем логический оператор НЕ !)
    //  (id !== 0 && !id) = (true && true)
    //  if id=10
    //  (id !== 0 && !id) = (true && false)
    if (id !== 0 && !id) console.log('if ' + id);
    else console.log('else ' + id);
}


//////////////////////////////////////////////////////////// РАЗНЫЕ ФИШКИ :) ////////////////////////////////////////////////////////////

// СДЕЛАТЬ ПЕРВУЮ БУКВУ СТРОКИ ЗАГЛАВНОЙ
someStr.charAt(0).toUpperCase() + someStr.substr(1);

// ПОЛУЧЕНИЕ КЛЮЧЕЙ И ЗНАЧЕНИЙ С ОБЪЕКТОВ, У КОТОРЫХ КЛЮЧИ ЯВЛЯЮТСЯ СТРОКАМИ
let obj = { 'Лето': 'Одень футболку и шорты' };
Object.keys(obj)     // Получаем ключ: 'Лето'
Object.values(obj)   // Получаем значение: 'Одень футболку и шорты'

// ИТЕРВАЛ
// что-бы иметь возможность контрольировать интервал, нужно записывать его в переменную
// первый аргумент это функция которую нужно выполнять и повторять, второй аргумент промежуток между повторениями в милисекундах
let interval = setInterval(interFunc, 1000);
function interFunc() { console.log('Some text') }
// остановка интервала
clearInterval(interval);

// ОКРУГЛЕНИЕ
Math.floor(7.1) //7
Math.floor(7.8) //7
Math.round(7.4) //7
Math.round(7.5) //8
Math.ceil(7.1) //8
Math.ceil(7.1) //8

// РАЗНЫЕ ПРОВЕРКИ
// Лучше всего сразу проверять на НЕ, пример:
function test(id) {
    if (typeof id !== 'number') return new Error('id is not a number');
}

// УЗНАТЬ НАИБОЛЬШЕЕ ИЛИ НАИМЕНЬШЕЕ ЧИСЛО
Math.max(1, 2, 10, 5);
Math.min(1, 2, 10, 5);
Math.max.apply(null, [1, 2, 10, 5]);


// TRY/CATCH/FINALLY RETURN STATEMENT
function example() {
    var returnState = false; // initialisation value
    try {
        returnState = true;
    }
    catch {
        returnState = false;
    }
    finally {
        return returnState;
    }
} 

//////////////////////////////////////////////////////////// ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ ////////////////////////////////////////////////////////////

//  |Оригинальное значение|        |Преобразовано в Number|        |Преобразовано в String|        |Преобразовано в Boolean|
//          false                             0                            'false'                           false
//          true                              1                            'true'                            true
//          0                                 0                            '0'                               false
//          1                                 1                            '1'                               true
//          '0'                               0                            '0'                               true
//          '1'                               1                            '1'                               true
//          NaN                               NaN                          'NaN'                             false
//          Infinity                          Infinity                     'Infinity'                        true
//          ''                                0                            ''                                false
//          '17'                              17                           '17'                              true
//          'Text'                            NaN                          'Text'                            true
//          []                                0                            ''                                true
//          [17]                              17                           '17'                              true
//          [17, 18]                          NaN                          '17,18'                           true
//          ['Text']                          NaN                          'Text'                            true
//          {}                                NaN                          '[object Object]'                 true
//          {key: 'test'}                     NaN                          '[object Object]'                 true
//          function(){}                      NaN                          'function(){}'                    true
//          null                              0                            'null'                            false
//          undefined                         NaN                          'undefined'                       false


//======================== ПРЕОБРАЗОВАНИЕ К СТРОКЕ: ========================//

//--------- В ручную:

//С помощью функции String():
var a = String(15);         // "15"
var b = String(true);       // "true"
var c = String(null);       // "null"
var d = String(undefined);  // "undefined"

//С помощью метода toString(), только для Number и Boolean:
var a = (15).toString();    // "15"
var b = (true).toString();  // "true"

//--------- Автоматически:

//При выводе в консоль или alert, а так же при innerHTML:
var status = true;
console.log(status); // "true"
document.getElementById("container").innerHTML = status; // "true"

//При сложении через бинарный плюс:
//Если хотя бы один операнд(элемент) выражения является строкой, то и второй будет преобразован к строке:
"test" + 15          //"test15"
"test" + true        //"testtrue"
"test" + null        //"testnull"
"test" + undefined   //"testundefined"
"" + 15              //"15"
"" + true            //"true"
"" + null            //"null"
"" + undefined       //"undefined"

//======================== ПРЕОБРАЗОВАНИЕ К ЧИСЛУ: ========================//

//--------- В ручную:

//С помощью функции Number()
Number("5")        // 5
Number("a5")       // NaN (не удалось распарсить число)
Number("5a")       // NaN (не удалось распарсить число)
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN

//С помощью оператора унарный +
5 + "5"      // "55" (произошло приведение к строке)
5 + +"5"     // 10
+ "true"     // NaN
+ true       // 1
+ false      // 0
+ "test"     // NaN
+ null       // 0
+ undefined  // NaN

//С помощью функции parseInt(), вторым аргументом указывается система исчисления, 10 - десятичная.
parseInt("test", 10)     // NaN
parseInt(true, 10)       // NaN
parseInt(null, 10)       // NaN
parseInt(undefined, 10)  // NaN
parseInt("12a34", 10)    // 12
parseInt("1234", 10)     // 1234
parseInt("a1234", 10)    // NaN

//--------- Автоматически:

//При математических операциях(кроме случая сложения со строкой и строгое равенство ===, !==)
"2" < 5         // true
"2" > 5         // false
"2" * 5         // 10
true > 0        // true (true преобразуется к 1)
true * 5        // 5
false * 5       // 0 (false преобразуется к 0)// обратите внимание
"2" + 5         // "25"
"2" === 2       // false (разные типы данных)// undefined приводится к NaN (не число) по этому все сравнения не срабатывают
undefined > 0   // false
undefined < 0   // false
undefined <= 0  // false
undefined >= 0  // false

//Null стоит рассмотреть отдельно.При сравнении больше / меньше кажется что null равен нулю.Но прямое сравнение показывает что null нулю НЕ равен.Этот случай является исключением, и его надо учитывать при сравнении различных величин с null.
null < 2    // true
null > 2    // false
null < 0    //
null > 0    // false
null == 0   // false (как это возможно???)
null <= 0   //true null >= 0 //true

//При операциях не строгого равенства(через двойное равно)
true == 1        // true
true == 2        // false
"a" == 2         // false
"2" == 2         // true
"2a" == 2        // false
"a2" == 2        // false
undefined == 0   // false
null == 0        // false (это исключение было рассмотрено выше)
// обратите внимание
"2" === 2        // false (разные типы данных)

//======================== ПРЕОБРАЗОВАНИЕ К ЛОГИЧЕСКОМУ ТИПУ: ========================//

//--------- В ручную:

//С помощью функции Boolean()
Boolean("text") // true
Boolean("false") // true
Boolean("0") // true
Boolean("1") // true
Boolean("") // false
Boolean(1) // true
Boolean(0) // false
Boolean(-5) // true
Boolean(5) // true
Boolean(null) // false
Boolean(undefined) // false

//С помощью оператора!!
!!"test" // true
!!"false" // true
!!"0" // true
!!"" // false
!!0 // false
!!1 // true
!!-15 // true
!!null // false
!!undefined // false

//--------- Автоматически:

//Все выражения, находящиеся внутри оператора if, всегда приводятся к логическому типу.

//Причем выражение может состоять как с одного элемента так и из многих.
//Если выражение состоит из одного элемента, то следует помнить что в false интерпретируются следующие значения:
//пустая строка
//число 0
//null
//undefined
//NaN

if ("") { console.log("True"); } else { console.log("False"); }            // False

if (0) { console.log("True"); } else { console.log("False"); }             // False

if (null) { console.log("True"); } else { console.log("False"); }          // False

if (false) { console.log("True"); } else { console.log("False"); }         // False

if (NaN) { console.log("True"); } else { console.log("False"); }           // False

if (undefined) { console.log("True"); } else { console.log("False"); }     // False

if ("test") { console.log("True"); } else { console.log("False"); }        // True

if (452) { console.log("True"); } else { console.log("False"); }           // True

var status = true;
if (status) { console.log("True"); } else { console.log("False"); }        // True


//Если выражение составное, то работают все правила записанные выше.Здесь рассмотрим только несколько примеров.

var a = "test", b = 4;
if (a && b) { console.log("True"); } else { console.log("False"); }                                // True

var a = { prop: 1 }, b = false;
if (a && b) { console.log("True"); } else { console.log("False"); }                                // False

var a = { prop: 1 }, b = false;
if (a || b) { console.log("True"); } else { console.log("False"); }                                // True

var a = 25, b = false;
if (a > b) { console.log("True"); } else { console.log("False"); }                                 // True

var msg = "done";
if (status == "done") { console.log("True"); } else { console.log("False"); }                      // True

var result = false;
if (result) { console.log("True"); } else { console.log("False"); }                                // False

var statusCode = 115;
if (statusCode != 0 && statusCode == 115) { console.log("True"); } else { console.log("False"); }  // True

// Преобразование объектов https://learn.javascript.ru/object-conversion

//////////////////////////////////////////////////////////// ЦИКЛЫ ////////////////////////////////////////////////////////////

// while, do while, for, for of, for in.

// for in для объектов
// for of для массивов

//--------------------------

// FOR

// Проверка условия, если правда - сразу же выполняется код.
//    
for (let i; i < 10; i++)
    //              //
    // Инициал.      // Повышение итерации происходит после выполнения кода в фигурных скобках.

    //--------------------------

    // WHILE

    let i = 0;

while (i++ < 10) {   // цикл проверяет условие, i++ дает 0 на текущей строке и 1 на следующей, в конце будет 9 на этой строке и 10 на следующей, цикл отработает 10 раз.
    // Some code (тут при первом проходе i уже равна 1)
}

//---

i = 0;

while (++i < 10) {  // цикл проверяет условие, ++i сразу дает 1 на текущей и последующих строках, цикл отработает 9 раз.
    // Some code
}


//////////////////////////////////////////////////////////// ФУНКЦИИ ////////////////////////////////////////////////////////////

// Если функция по умолчанию не принимает аргументы, но при вызове их все таки передать, 
// то эти аргументы будут доступны внутри функции по ключевому свойству arguments (псевдомассив)

// Если в функции есть return то после него она прекращает свою работу, к примеру, если return возвращает функцию и мы ее запускаем двойными скобками someFunc()(); то функция после retur выполняется после того как первая функция завершила свою работу.

// Запись такого вида 
let someVar = mainFunc('Some Text');
// Выполнит mainFunc и вернет то что указано в return в переменную someVar.

//--------------------------
// SPREAD используется для разделения коллекций на отдельные элементы
// REST наоборот, для соединения отдельных значений в массив.

// SPEAD
var arr = ['will', 'love'];
var data = ['You', ...arr, 'spread', 'operator'];
console.log(data); // ['You', 'will', 'love', 'spread', 'operator']

// REST
// преобразовывает все входящие аргументу функции в один массив
var log = function (...args) {
    conole.log(args);
};

log(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

//--------------------------
// ОБЫЧНАЯ ФУНКЦИЯ - FUNCTION DECLARATION
// Приемущество: такие функции всплывают и мы можем получить доступ к ним в любом месте кода.

function Test() {
}

//--------------------------
// FUNCTION EXPRESSION (АНОНИМНЫЕ ФУНКЦИИ)
// если строка не начинается со слова function , то это считается function expression т.е когда функция является частью какого то выражения.
// объявление функции в контексте какого-либо выражения, например присваивания.
// функции у которых нет имени, такими могут быть к примеру - возврат функции в return или запись функции в переменную, чаще всего записывают в константы, так как функции не меняются, вывоз функции осуществляется точно так же как и у обычной //функции. Примечание: Такие функции не всплывают, и мы можем получить к ним доступ только после объявления функции. 

//              Анонимная функция
//                  /
const myFunc = function () { }; // Тут мы записываем тело функции в переменную myFunc, но не вызываем ее.

// Другой пример:
function mainFunc(firstName) {
    console.log('mainFunc is working!')
    return function () { console.log('anonymous function is waiting to start!') }
}

const secondFunc = mainFunc();  // Этой записью мы вызываем функцию mainFunc (в консоль выведится 'mainFunc is working!'), она отрабатывает, и все что указано в return записывается в переменную secondFunc, в данном случае тело анонимной функции: secondFunc = function () { console.log('anonymous function is waiting to start!') }

// NAMED FUNCTION EXPRESSION (NFE)
// Тоже самое что и Function Expression но с присвоением имени, для работы с ней внутри самой функции (рекурсия).
// Имя функционального выражения (someFunc) имеет особый смысл. Оно доступно только изнутри самой функции (myFunc).

const myFunc = function someFunc () {
    console.log(someFunc); // Выведет код функции someFunc
}


//--------------------------
// САМОВЫЗЫВАЮЩАЯСЯ ФУНКЦИЯ - IMMEDIATELY-INVOKED FUNCTION EXPRESSION (IIFE) или SELF-INVOKING FUNCTION EXPRESSION.
// выполняется автоматически, когда до нее доходит интерпритатор.

(function (str) {
    // Private region:               // Этот код не доступен из вне
    let someNub = 22;
    console.log('str = ' + str);     // Выведет в консоль: str = test args
    // Для вывода переменной в глобальную область видимости
    // используется подобная конструкция:
    window.someNub = someNub;

    return {
        // Public region:            // Этот код будет доступен из вне.
    }
}('test args'));                     // Можно передавать аргунменты внутрь функции

// или

(function () {
    // Private region:
    console.log(arguments);
})('test args');  // Можно передавать аргунменты внутрь функции

//--------------------------
// СТРЕЛОЧНЫЕ ФУНКЦИИ - ARROW FUNCTION

let sum = (a, b) => {
    return a + b;
}

// или 

sum = (a, b) => a + b;

// или

sum = a => a + 10;

// или

sum = () => console.log(10 + 5);

// что-бы вернуть объект нужно завернуть его в круглые скобки
let obj = someValue => ({ name: someValue });

// Стрелочные функции не имеют своего this, то есть следующие вызовы отработают по разному:
const name = 'Alisa';
const obj = {
    name: 'John',
    getArrowName: () => `Hello, ${this.name}`,
    getName: function () { return `Hello, ${this.name}`; }
};

obj.getArrowName(); //"Hello, Alisa"
obj.getName(); //"Hello, John"
// getName() работает как надо. А при вызове getArrowName(), this будет ссылаться не на obj, а на окружающее лексическое окружение.

//--------------------------
// ПЕРЕДАЧА ФУНКЦИИ ЧЕРЕЗ АРГУМЕНТЫ ВЫЗОВА

function myFunc(str, someFunc) {
    console.log(str + ' ', someFunc());      // выдаст строку: Wow! This is good!
}

myFunc('Wow! ', function () { return 'This is good!' });

//--------------------------
// ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
// - это функция, удовлетворяющая хотя бы одному из условий:
// 1) Принимает другую функцию в качестве аргумента
// 2) Возвращает функцию при вызове

function mainFunc(firstName) {
    return function (secondName) {
        return 'Hello ' + firstnName + ' ' + secondName; 
    }
}

// или 
function mainFunc(incomingFunc) { // Основная функция может принимать другую функцию в качестве аргумента.
    incomingFunc();
}
function someFunc() {
    // Some code
}
mainFunc(someFunc); // Передаем функцию someFunc в качестве аргумента при вызове.

//////////////////////////////////////////////////////////// МОДУЛИ ////////////////////////////////////////////////////////////

// Пример модуля:
const counter = (function () {
    // Private region:
    let i = 0;

    function getCurrentCounter() {
        return i;
    }

    function setCurrentCounter(value) {
        return i = value;
    }

    function counterPlusOne() {
        return ++i;
    }

    return {
        // Public region:
        getCurrentCounter: getCurrentCounter,
        setCurrentCounter: setCurrentCounter,
        counterPlusOne: counterPlusOne
    }
}());

//////////////////////////////////////////////////////////// ЗАМЫКАНИЕ - ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ (LEXICAL ENVIRONMENT) ////////////////////////////////////////////////////////////

// Замыкание - это функция со всеми внешними переменными которые ей доступны.

// При каждом запуске функции создается новый контекст вызова. Все переменные, аргументы вызова, именованные аргументы (те что записаны в скобках), внутренние функции и ссылка scope образуют лексическое окружение функции (что-то типо скрытого объекта)
// Scope - это ссылка на предыдущее (выше стоящее) лексическое окружение.
// Все данные хранятся в реальном времени, их можно изменять, и при последующих чтениях переменной мы всегда будем получать актуальные данные хранящиеся в ней.

// Лексическое окружение зависит от места где была создана функция.

// Если мы обращаемся к определенной переменной, то интерпритатор сначала ищет переменную в локальном (текущем) лексическом окружении, если ее не находит то идет по ссылке scope на уровень вверх и там ищет эту переменную, если же и там не на ходит то продолжает подыматься по ссылкам scope в плоть до глобального лексического окружения.

// Все функции вложенные в другие функции помнять лексические окружения родительских функций, даже если они (родительские функции) уже завершили работу.
// Если родительская функция возвращает или вызывает другую функцию в return то во время вызова или при создании функции им достпно окружение родительской функции.

// Так же для создания нового лексического окружения достаточно обернуть код в фигурные скобки:
var a = 10;

{
    let a = 20;
    console.log(a); // 20
}

console.log(a); // 10
// Скорее всего, вы никогда не будете использовать конструкцию, показанную выше, но, тем не менее, она является абсолютно валидной и позволяет наглядно продемонстрировать создание нового лексического окружения.
//---------

// Глобальное лексическое окружение
// globalLexicalEnvironment {
//     firstName: 'Igor',
//     secondName: 'Argunov'
//     mainFunc: function,         - Тело функции mainFunc.
//     scope: null                 - Так как выше ничего нет.
// }

let firstName = 'Igor';
let secondName = 'Argunov';

function mainFunc(fName) {
    // Тут создается свое лексическое окружение с переменными и функциями которые есть внутри этой функции.
    // mainFuncLexicalEnvironment {
    //     fName: undefined,
    //     arguments,            - Псевдомассив со входящими аргументами, по умолчанию есть у любой функции.
    //     function(sName),
    //     scope: globalLexicalEnvironment      - ссылка на глобальное лексическое окружение со всеми хранящимися там данными.
    // }
    
    return function (sName) {          // Тут функция mainFunc уже завершила свою работу, но ее лексическое окружение все равно будет доступно в функции function (sName).
        // И тут так же создается свое лексическое окружение.
        // functionLexicalEnvironment {
        //     sName: undefined,
        //     arguments,
        //     scope: mainFuncLexicalEnvironment    - ссылка лексическое окружение mainFunc со всеми хранящимися там данными а так же ссылкой на глобальное лексиечкое окружение.
        // }
        return 'Hello ' + fName + ' ' + sName;
    }
}

// Если mainFunc вызвать так:
mainFunc('Igor');   // нам вернется тело вложенной функции - function (sName), так как мы ее не вызываем.

// Если вызвать так:
mainFunc('Igor')('Argunov');   // То выполняется сначала функция mainFunc а затем выполнится анонимная функция из return-а, и будет возвращена строка - 'Hello Igor Argunov'

// Так же можно записать результат возврата в переменную:
const secondFunc = mainFunc('Igor');   // В переменную secondFunc будет записано тело анонимной функции из return-а mainFunc, так же в переменную попадет и ее лексическое окружение
// вместе со всеми вышестоящими лексическими окружениями по ссылке scope. Так же там хранятся окружения тех функций которе уже прекратили работу.

// Теперь если мы вызовем:
secondFunc('Argunov');    // Нам вернется - 'Hello Igor Argunov'. 
//Код функции: return 'Hello ' + fName + ' ' + sName; Пременной fName нет в этой функции но импрепритатор находит ее по ссылке scope в лексическом окружении mainFunc, так как оно тоже хранится в переменной secondFunc.

// Примеры:

//---------1)
const secondFunc1 = mainFunc('Igor');
const secondFunc2 = mainFunc('Ivan');   // Тут создается новое лексическое окружение.
secondFunc1('Argunov');    // Нам вернется - 'Hello Igor Argunov'.
secondFunc2('Argunov');    // Нам вернется - 'Hello Ivan Argunov'.

//---------2)
function mainFunc() {
    // LexicalEnvironment = { someValue: undefined }
    let someValue = 'Vasya';
    // LexicalEnvironment = { someValue: 'Vasya' }
}

//---------3)
let phrase = 'Привет';

function sayHi(name) {
    alert(phrase + ', ' + name);
}

sayHi('Вася');  // Привет, Вася (*)

phrase = 'Пока';

sayHi('Вася'); // Пока, Вася (**)

//---------4)
let phrase = 'Привет';

function sayHi(name) {
    alert(phrase + ', ' + name);
    phrase = 'Пока';
}

sayHi('Вася');  // Привет, Вася (*)
sayHi('Вася'); // Пока, Вася (**)

//---------5)
function makeCounter() {
    let currentCount = 1;

    return function () {
        return currentCount++;
    };
}

let counter1 = makeCounter(); // [[Scope]] -> {currentCount: 1}   // В этой переменной будет свое окружение
let counter2 = makeCounter(); // [[Scope]] -> {currentCount: 1}   // А в этой переменной свое, никак не пересекающееся с предыдущим

alert(counter1()); // 1, [[Scope]] -> {currentCount: 1}
alert(counter1()); // 2, [[Scope]] -> {currentCount: 2}
alert(counter1()); // 3, [[Scope]] -> {currentCount: 3}

alert(counter2()); // 1, [[Scope]] -> {currentCount: 1}  // Cчётчики независимы

//---------6)
function test() {
    let name = 'Vasiliy';
    return getBigName(userName);  // Переменная userName сначала ищется в окружении test(), а потом уже в вышестоящем окружении (в данном случае глобал).
}   // То есть вызов getBigName() находится все еще в лексическом окружении test(), не смотря на то что функция test() уже завершила свою работу после оператора return.

function getBigName(name) {    // Во время работы у getBigName вышестоящее лексическое окружение это глобал, так как функция объявлена (создана) именно в глобале.
    return name.toUpperCase(); // Здесь значение name равно входящему аргументу name, при вызове getBigName(userName) он равен переменной userName.
}

let userName = 'Vanya';
test(); // Результат: 'Vanya', так как при вызове getBigName переменная userName равна 'Vanya'.

//---------7)
let userName = 'Text'
                          //3) Если переменная userName не была найдена и в окружении firstFunc(), она будет искаться в глобальном лексическом окружении.
function firstFunc() {
                          //2) Когда переменная userName не была найдена внутри функции function (), она будет искаться в окружении firstFunc()
    return function () {

        return userName;  //1) Переменная userName сначала будет скаться окружении function (), то есть проверяются объявленные переменные, потом входящие аргументы
    }
}


//---------
// СВОЙСТВА ФУНКЦИИ
// Функция в JavaScript является объектом, поэтому можно присваивать свойства прямо к ней, вот так:
function f() { }
f.test = 5;
alert(f.test);
// Свойства функции не стоит путать с переменными и параметрами.
// Они совершенно никак не связаны. Переменные доступны только внутри функции, они создаются в процессе её выполнения.Это – использование функции «как функции».
// А свойство у функции – доступно отовсюду и всегда.Это – использование функции «как объекта».
// Если хочется привязать значение к функции, то можно им воспользоваться вместо внешних переменных.
// В качестве демонстрации, перепишем пример со счётчиком:

function makeCounter() {
    function counter() {
        return counter.currentCount++;
    };
    counter.currentCount = 1;

    return counter;
}

var counter = makeCounter();
alert(counter()); // 1
alert(counter()); // 2
// При запуске пример работает также.

// Принципиальная разница – во внутренней механике и в том, что свойство функции, в отличие от переменной из замыкания – общедоступно, к нему имеет доступ любой, у кого есть объект функции.

// Например, можно взять и поменять счётчик из внешнего кода:
var counter = makeCounter();
alert(counter()); // 1

counter.currentCount = 5;

alert(counter()); // 5


//////////////////////////////////////////////////////////// МАССИВЫ ////////////////////////////////////////////////////////////

// К псевдомассивам нельзя применять методы обычных массивов, можно только FOREACH.

// У нас есть массив:

let strArr = ['some', 'string'];

// Если мы попытаемся его скопировать в другую переменную таким образом:

let newStrArr = strArr;

// То он не будет скопирован, в newStrArr будет записана ссылка на исходный массив strArr
// если мы попытаемся изменить newStrArr то и strArr тоже будет изменяться.


//======================== МЕТОДЫ НЕ ИЗМЕНЯЮЩИЕ ИСХОДНЫЙ МАССИВ\СТРОКУ ========================//

// SPLIT
// Метод для строк, который возвращает строку в виде массива, в качестве аргумента принимается разделитель. Исходная строка не изменятся.

let str = 'some string';

let strArr = str.split()      // Преобразует всю строку в один элемент массива strArr
let strArr = str.split('')    // Преобразует каждую букву в один элемент массива strArr
let strArr = str.split(' ')   // Разделитель пробел, каждое слово будет преоборазовано в один элемент массива strArr

//---------

// JOIN
// Преобразует массив в строку, в качестве аргумента принимается разделитель. Исходный массив не изменятся.

let strArr = ['some', 'string'];

let str = strArr.join()       // Результат: "some,string"
let str = strArr.join('')     // Результат: "somestring"
let str = strArr.join(' ')    // Результат: "some string"

//---------

// SLICE
// Копирует весь массив или его определенный участок. 
// Аргументы: (с какого индекса начать (включительно), на каком индексе закончить(включительно)). 
// Если аргументы оставить пустыми копируется полностью массив. Не влияет на исходный массив.

let strArr = ['some', 'cool', 'string'];

let newStrArr = strArr.slice();       // Результат: newStrArr = ['some', 'cool', 'string']
let newStrArr = strArr.slice(0, 1);   // Результат: newStrArr = ['some']
let newStrArr = strArr.slice(0, 2);   // Результат: newStrArr = ['some', 'cool']
let newStrArr = strArr.slice(1, 3);   // Результат: newStrArr = ['cool', 'string']

//---------

// CONCAT
// Склеивает несколько массивов в один, не влияет на исходные массивы

let strArr1 = ['some', 'cool', 'string'];
let strArr2 = ['other', 'char'];
let newArr = strArr1.concat(strArr2);

// или

let newArr = [].concat(strArr1, strArr2);     // тот же результат

// Результат: newArr = ["some", "cool", "string", "other", "char"]

// Так же можно делать копии массивов:
let newArr = [].concat(strArr1);              // strArr1 будет полностью скопирован в newArr


//======================== МЕТОДЫ ИЗМЕНЯЮЩИЕ ИСХОДНЫЙ МАССИВ ========================//

// PUSH
// добавляет элемент в конец массива.

arr.push('some string');

// POP
// удаляет последний элемент массива, при этом возвращает тот элемент окторый он удалил.

arr.pop();

//---------

// UNSHIFT
// добавляет элемент в начало массива.

arr.unshift('some string');

// SHIFT
// удаляет первый элемент массива, при этом возвращает тот элемент который он удалил.

arr.shift();

//---------

// REVERSE
// метод инвертирует массив, первый элемент становится последним и наоборот. Изменяется исходный массив.

let strArr = ['some', 'string'];

strArr.reverse()      // Результат: ['string', 'some']

//---------

// DELETE
// удаляет значение элемента в массиве, сам элемент становится undefined, длина массива остается прежней.

delete strArr[1]      // Результат: ['some', empty]

//---------

// SPLICE
// Универсальный метод, можно как удалять элементы так и добавлять новые. 
// Так же возвращает удаленные объекты в виде массива или пустой массив, если ничего не удалялось.

// ПРИМЕР: .splice(с какого индекса начать, сколько элементов удалить, добавляемый элемент, добавляемый элемент 2, и т.д.)

strArr.splice(0, 0, 'new text');     // Результат: ['new text', 'some', 'string']
strArr.splice(0, 1);                 // Результат: ['some', 'string'] и вернет удаленный элемент: ['new text']

//---------

// SORT
// Сортировка массива, если сортировать без определенных аргументов то сортировка может быть немного не правильной: 0, 1, 15, 2, 25
// это происходит из-за того, что индексы при сравнении преобразовываются в строки '0', '1', '15', '2', '25'.
// Что-бы этого избешать нужно в аргумент передать стрелочную функцию: (prev, next) => prev - next

let numArr = [0, 15, 5, 25, 1, 20, 10];

numArr.sort();                              // Результат: [0, 1, 10, 15, 20, 25, 5]
numArr.sort((prev, next) => prev - next);   // Результат: [0, 1, 5, 10, 15, 20, 25]

let objArr = [
    {
        name: 'Igor',
        age: 28
    },
    {
        name: 'Vasya',
        age: 25
    },
    {
        name: 'Kolya',
        age: 14
    }
]

// Сортировка массива с объектами по возрасту:
objArr.sort((prev, next) => prev.age - next.age);

// Сортировка массива с объектами по алфавиту имен:
objArr.sort((prev, next) => prev.name > next.name)


//======================== МЕТОДЫ ДЛЯ ПЕРЕБОРА МАССИВОВ ========================//

let someArr = [{ name: 'One', age: 1 }, { name: 'Two', age: 2 }, { name: 'Three', age: 3 }, { name: 'Four', age: 4 }, { name: 'Five', age: 5 }];

//---------

// FOREACH
// Перебор массива. Принимает аргумент в виде функции, которая принимает 3 параметра - элемент массива, индекс и весь массив.

someArr.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

//---------

// FILTER
// Фильтрация массива, возвращает новый массив с теми элементами которые будут отфильтрованы. Принимает такой же аргумент как и в forEach

let filterResult = someArr.filter(user => user.age <= 3);

// Результат: filterResult = [{name: 'One', age: 1}, {name: 'Two', age: 2}, {name: 'Three', age: 3}]

//---------

// MAP
// Модификация массива, возвращает новый массив. Не изменяет исходный массив. Принимает такой же аргумент как и в forEach

let mapResult = someArr.map(user => {
    if (user.age >= 4) user.info = "This is old";
    else user.info = "This is new"
    return user;
});

// Результат: каждому скопированному объекту в новом массиве mapResult будет добавлено поле info = "This is old" или info = "This is new".

//---------

// EVERY
// Метод проверит все элементы, если колбек при переборе всех элементов вернет true от каждого элемента, тогда метод every вернет true, 
// если хоть один элемент вернет false, тогда every тоже вернет false.

// Пример: у всех ли элементов поле age больше 2 ? Если да тогда возврат будет true, в противном случае будет false.

let everyResult = someArr.every(user => user.age > 2);

// Результат: everyResult = false

//---------

// SOME
// Метод проверит все элементы, если хоть один элемент вернет true тогда some тоже вернет true. 
// Пример: Есть ли хоть один элемент в массиве у которого поле age равно 1 ? Если есть, тогда возврат будет true, в противном случае будет false.

let someResult = someArr.some(user => user.age > 1);

// Результат: someResult = true

//---------

// REDUCE
// Подсчет суммарного значения элементов массива, к примеру баланс пользователя.
// Метод принимает 2 аргумента, первый это функция колбек, второй это стартовое значение для предыдущего значения, к примеру 0. 
// Функция колбек может принимать 4 параметра - предыдущее значение, текущий элемент, индекс и весь массив целиком. 
// В предыдущее значение сохраняется промежуточный результат вычисления. Что-бы сохранить предыдущее значение нужно его указать в return.

let reduceResult = someArr.reduce((prevItem, currentItem, index, arr) => prevItem + currentItem.age, 0);

// Результат: reduceResult = 15


//////////////////////////////////////////////////////////// РАБОТА С DOM и BOM ////////////////////////////////////////////////////////////

// JS скрипты подключают в конце тега body, если подключить выше, то может быть ошибка, так как нуэные нам элементы еще не существуют.

// DOM - document object model (Объектная модель документа)
// BOM - browser object model (Объектная модель браузера) - использовать геолокацию, работа с адресной строкой и т.д.

// В DOM-е все элементы считаются узлами (nodes), переносы строк так же являются узлами.
// Элементы дома чаще всего записываются в const
// При вызове любого DOM элемента через консоль, он возвращается в виде разметки, что-бы увидеть его в виде объекта, нужно вызвать его через console.dir
// Пример:
console.dir(document.body);

document;                  // Глобальный объект, возвращает все что есть на странице.
document.documentElement;  // Возвращает все что есть в теге html
document.head;             // Возвращает все что есть в теге head
document.body;             // Возвращает все что есть в теге body


//======================== МЕТОДЫ ДЛЯ ПОЛУЧЕНИЯ ЭЛЕМЕНТОВ ========================//

const body = document.body;
const element;

element = body.previousSibling;           // Получить предыдущий соседний узел
element = body.nextSibling;               // Получить следующий соседний узел
element = body.previousElementSibling;    // Получить предыдущий элемент
element = body.nextElementSibling;        // Получить следующий элемент

element = body.firstChild;                // Получить первый дочерний узел
element = body.lastChild;                 // Получить последний дочерний узел
element = body.firstElementChild;         // Получить первый дочерний элемент
element = body.lastElementChild;          // Получить последний дочерний элемент

element = body.childNodes;                // Получить все дочерние узлы в виде псевдомассива
element = body.children;                  // Получить все дочерние элементы в виде псевдомассива

//---------

// КОНВЕРТИРУЕМ И КОПИРУЕМ ПСЕВДОМАССИВ В ОБЫЧНЫЙ МАССИВ:
element = Array.prototype.slice.call(body.children);

//---------

// В DOM есть такие типы как живая(HTMLCollection) и не живая коллекция(NodeList):
// HTMLCollection - реагирует на изменений DOM-а, если на странице появится новый объект, то он так же появится и в коллекции.
// NodeList - статичный снимок, который больше не изменяется, если после этого на странице удалить\добавить какой-то объект, коллекция останется такой же как и была ранее.

// Что-бы пользоваться всеми методами обычных массивов в живых или не живых коллекциях, нужно выполнить конвертацию Array.prototype.slice.call(document.body.children)

const section;

// ЖИВЫЕ КОЛЛЕКЦИИ - HTMLCollection, для перебора можно использовать только цикл for.
section = document.getElementById('section');             // Получить один элемент (самый первый) с классом section.
section = document.getElementsByClassName('section');     // Получить все элементы с классом section.
section = document.getElementsByName('MyName');           // Получить все элементы у которых аттрибут name равен 'MyName'.
section = document.getElementsByTagName('div');           // Получить все элементы с тегами div.

// НЕ ЖИВЫЕ КОЛЛЕКЦИИ (селекторы нужно писать как в css) - NodeList, для перебора можно использовать обычные циклы и цикл forEach.
section = document.querySelector('.section');             // Получить один элемент (самый первый) с классом section.
section = document.querySelectorAll('#section');          // Получить все элементы с айди section.

//---------

// ПОЛУЧИТЬ ВСЕ ССЫЛКИ НА СТРАНИЦЕ:
const links = document.links;  

// ПОЛУЧИТЬ ВСЕ ФОРМЫ НА СТРАНИЦЕ:
const forms = document.forms;    

// ПОЛУЧИТЬ ОПРЕДЕЛЕННУЮ ФОРМУ:
const myForm = forms.myForm;    // Получить форму у которой атрибут name равен myForm.
// или
const myForm = forms['myForm'];

// ПОЛУЧИТЬ ПСЕВДОМАССИВ СО ВСЕМИ ЭЛЕМЕНТАМИ ФОРМ (инпуты, чекбоксы и т.д):
const myFormElements = myForm.elements;

// ПОЛУЧИТЬ ОПРЕДЕЛЕННЫЙ ЭЛЕМЕНТ ФОРМЫ:
// Если у элементов форм есть аттрибут id или name, то можно осуществлять доступ к ним по содержимому этих аттрибутов: myFormElements.attributeValue или myFormElements[attributeValue],
// если этих аттрибутов нет, тогда можно осуществлять доступ по номеру: myFormElements[1]
const myFormInput = myFormElements.myInput;  // Получить инпут у которого есть атрибут id или name равный myInput.
// или 
const myFormInput = myFormElements['myInput'];

// ПОЛУЧИТЬ ЗНАЧЕНИЕ ТЕГА INPUT (Или другого элемента формы):
const myFormInputValue = myFormInput.value;  // Получаем весь текст который есть в инпуте.
// Так же можно получать значение инпута чарез собитие, см. раздел СОБЫТИЯ.

// ОТКЛЮЧИТЬ ЭЛЕМЕНТ ФОРМЫ (Атрибут disabled):
myFormInput.disabled = true;  // Что-бы включить нужно присвоить false

//---------

// ПРОВЕРКА СЕЛЕКТОРА:
// <div class="card mb-3 list-card">
// const card = document.querySelector('.card')
const result = card.matches('div');           // Результат : true, так как элемент с классом .card является div-ом.
const result = card.matches('#button');       // Результат : false, так как у элемента с классом .card нет айдишника #button.

//---------

const parent = card.closest('.container')    // closest найдет ближайшего вышестоящего родителя с указанным селектором.
const parent = card.parentElement;           // Показывает прямого родителя.


//======================== МЕТОДЫ ДЛЯ ПОЛУЧЕНИЯ/ИЗМЕНЕНИЯ/ДОБАВЛЕНИЯ СОДЕРЖИМОГО ========================//

// ПОЛУЧЕНИЕ СОДЕРЖИМОГО:
// <div class="card">Some text <span>Good!</span></div>
// const someDiv = document.querySelector('.card');
const someDivContent = someDiv.innerHTML;  // Получаем внутреннее html содержимое тега div. Результат: 'Some text <span>Good!</span>'
const someDivContent = someDiv.outerHTML;  // Получаем все html содержимое тега div. Результат: '<div class="card">Some text <span>Good!</span></div>'
const someDivContent = someDiv.innerText;  // Получаем текстовое содержимое тега div. Результат: 'Some text'

const someDivContent = someDiv.firstChild.data;  // Получаем текстовое содержимое тега div. Результат: 'Some text'

//--------- КЛАССЫ:

// ДОБАВЛЕНИЕ И УДАЛЕНИЕ КЛАССОВ:
someDiv.classList.add('card', 'card-item');      // Добавить элементу классы card и card-item.
someDiv.classList.remove('card');                // Удалить элементу класс card.

// ПЕРЕКЛЮЧАТЕЛЬ КЛАССОВ:
someDiv.classList.toggle('card');    // Добавляет или удаляет класс card, возвращает true(если класс есть) или false(если класса нету).

// ПРОВЕРКА ЕСТЬ ЛИ У ЕЛЕМЕНТА НУЖНЫЙ НАМ КЛАСС:
let result = someDiv.classList.contains('card');   // Если такой класс есть, вернется true, если нет тогда false.

//--------- АТТРИБУТЫ:

// ПОЛУЧИТЬ СПИСОК ВСЕХ АТРИБУТОВ:
let attributes = someDiv.attributes;

// ПОЛУЧЕНИЕ ЗНАЧЕНИЙ АТРИБУТОВ:
let id = someDiv.id;                  // Получить айдишник
let className = someDiv.className;    // Получить классы элемента
let className = someDiv.href;         // Получить url

// ПОЛУЧИТЬ ЗНАЧЕНИЕ ЛЮБОГО АТРИБУТА:
let attributValue = someDiv.getAttribute('class');  // Результат: 'card'

// ДОБАВИТЬ\ИЗМЕНИТЬ АТРИБУТ И ЗНАЧЕНИЕ:
someDiv.setAttribute('style', 'display: flex; color: red');   // Результат: <div class="card" style="display: flex; color: red">...</div>

// УДАЛИТЬ УКАЗАННЫЙ АТРИБУТ:
someDiv.removeAttribute('style');

// ПРОВЕРИТЬ ЕСТЬ ЛИ НУЖНЫЙ НАМ АТРИБУТ У ЭЛЕМЕНТА:
let result = someDiv.hasAttribute('class');   // Результат: true или false

// ОБРАЩЕНИЕ К КАСТОМНЫМ АТРИБУТАМ DATA:
// <div class="card" data-contact='12345'>...</div>
let result = someDiv.dataset;          // Вернет нам список всех атрибутов data, в списке имена атриботв отображаются без приставки data.
let result = someDiv.dataset.contact;  // Вернет нам сразу значение атрибута data-contact.

//--------- ЭЛЕМЕНТЫ:

// СОЗДАНИЕ DOM ЭЛЕМЕНТА:
let div = document.createElement('div')

// ПОЛУЧИТЬ ИМЯ ЭЛЕМЕНТА:
div.tagName;  //Результат: 'div'

// ДОБАВЛЕНИЕ ОДНОГО DOM ЭЛЕМЕНТА В ДРУГОЙ ЭЛЕМЕНТ:
// appendChild - добавляет все элементы в конец
// let ul = document.createElement('ul')
// let li = document.createElement('li')
ul.appendChild(li); //Добавление элемента

// АЛЬТЕРНАТИВНЫЙ СПОСОБ ДОБАВЛЕНИЯ DOM ЭЛЕМЕНТА В ДРУГОЙ ЭЛЕМЕНТ:
// insertAdjacentElement - принимает 2 значения, первое - позиция, куда добавлять элемент: beforeBegin, afterBegin, beforeEnd и afterEnd. Второе значение - добавляемый объект.
ul.insertAdjacentElement('afterbegin', li);

// ДОБАВЛЕНИЕ РАЗМЕТКИ В DOM ЭЛЕМЕНТ:
// insertAdjacentHTML - принимает 2 значения, первое - позиция, куда добавлять элемент: beforeBegin, afterBegin, beforeEnd и afterEnd. Второе значение - добавляемая разметка.
ul.insertAdjacentHTML('afterbegin', '<li>Some Text</li>');

// УДАЛЕНИЕ ТЕКУЩЕГО DOM ЭЛЕМЕНТА:
ul.remove();       // Удаляет ul

// УДАЛЕНИЕ DOM ЭЛЕМЕНТА ИЗ ДРГОГО ЭЛЕМЕНТА:
ul.removeChild(li);    // Удаляет li внутри ul

// ПРОВЕРИТЬ ЕСТЬ ЛИ DOM ЭЛЕМЕНТ В ДРУГОМ ЭЛЕМЕНТЕ:
// <div><span>Some text</span></div>
// let div = querySelector('div');
// let span = querySelector('span');
div.contains(span);     // Результат: true или false


//======================== СОБЫТИЯ ========================//

// ВСПЛЫТИЕ
// Если определенное событие назначено некоторому элементу, а собитие произошло на дочернем элементе, то такое событие всплывает и на родительский элемент.
// Что-бы остановить всплытие, нужны вызвать метод у объекта события:
e.stopPropagation();

// ОСНОВНЫЕ ЭЛЕМЕНТЫ ОБЪЕКТА СОБЫТИЯ:
// type - тип события (click, scroll, mouseover...).
// target - элемент на котором произошло событие.
// currentTarget - элемент на котором висит обработчик события.
// clientX/clientY - координаты крусора в момент события (относительно окна браузера).

// НАИБОЛЕЕ ЧАСТО ИСПОЛЬЗУЕМЫЕ СОБЫТИЯ:
// onchange - элемент был изменен (применимо к элементам форм).
// onclick - на элемент кликнули левой кнопкой мышки.
// onmouseover - пользователь навел курсор мыши на элемент.
// onmouseout - пользователь убрал курсор мыши с элемента.
// onkeydown - пользователь нажал на кнопку клавиатуры.
// onketup - пользователь отпустил кнопку клавиатуры.
// onload - браузер завершил загрузку страницы (картинки, скрипта).

// ДЕЛЕГИРОВАНИЕ СОБЫТИЙ:
// Всплытие событий позволяет реализовать один из самых важных приёмов разработки – делегирование.
// Он заключается в том, что если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому – мы ставим один обработчик на их общего предка. Из него можно получить целевой элемент event.target, понять на каком именно потомке произошло событие и обработать его.

// СЛУШАТЕЛЬ СОБИТИЯ. 1-Й ВАРИАНТ (СВОЙСТВО DOM-ОБЪЕКТА).
// Не удобен тем, что на один элемент можно повесить только одно определенное событие (к примеру, два разных onclick не получится повесить).
div.onclick = function() { console.log('Hello!') };
div.onclick = function() { console.log('World!') }; // Перезапишет предыдущее назначение.

// СЛУШАТЕЛЬ СОБИТИЯ. 2-Й ВАРИАНТ (АТТРИБУТ HTML). Нелья передавать объект события. Так же можно вешать только одно определенное событие как и в вариенте №1.
// В разметке к тегу добавляем атрибут с именем события, а в значении вызываем функцию обработчик
// <button onclick="myFunction()">Click me</button>
function myFunction() {
    //Some code
}
// или так 
// <button onclick="alert('Клик!')">Click me</button> - Обратите внимание, для содержимого атрибута onclick используются одинарные кавычки, так как сам атрибут находится в двойных.

// СЛУШАТЕЛЬ СОБИТИЯ. 3-Й ВАРИАНТ (ADDEVENTLISTENER).
// addEventListener принимает 3 аргумента: 
// 1-й собитие - 'click', 'scroll' и т.д. 
// 2-й обработчик события - функция, которя принимает один параметр, через который передается объект события(В нем находятся данные: где произошло событие, координаты, тип события и т.д). 
// 3-й ...
div.addEventListener('click', myFunc);
// Или удаляем слушатель
div.removeEventListener('click', myFunc);  //Обратим внимание – если функцию не сохранить где-либо, а просто передать в addEventListener, то снять обработчик будет невозможно.
// Обработчик события, e - это объект события.
/** @param {Event} e **/
function myFunc(e) {
    e.preventDefault();           // Отменяем стандартные действия объекта.
    let value = e.target.value;   // Получить значение элемента (к примеру инпута).
}

// ВСПЛЫТИЕ И ПОГРУЖЕНИЕ СОБЫТИЙ
// По умолчанию слушатель отлавшивает только всплытие. Что-бы отслеживать погружение, нужно третим аргументом в addEventListener добавить флаг true. Отлавливать и погружение и всплытие одним слушателем нельзя.
// Всплывают и погружаются только одинаковые события.

/* Пример:
<main class="main">
    <section class="header">
        <div class="welcome-text">
        </div>
    </section>
</main> 
*/

const mainElement = document.querySelector('.main');
const headerElement = document.querySelector('.header');
const welcomeTextElement = document.querySelector('.welcome-text');

// Погружение - Если включено отслеживание, то при клике на main событие так же отловится и на header и на welcome-text в порядке углубления по коду - сначала на main потом на header и в конце на welcome-text.
mainElement.addEventListener('click', (e) => console.log(this), true);
headerElement.addEventListener('click', (e) => console.log(this), true);
welcomeTextElement.addEventListener('click', (e) => console.log(this), true);

// Всплытие - При клиеке на элемент welcome-text событие так же сработает и на header и main в порядке возвышения кода - сначала на welcome-text потом на header и дальше на main
mainElement.addEventListener('click', (e) => console.log(this));
headerElement.addEventListener('click', (e) => console.log(this));
welcomeTextElement.addEventListener('click', (e) => console.log(this));

// Что-бы собитие не всплывало, нужно добавлять метод e.stopPropagation()
welcomeTextElement.addEventListener('click', (e) => e.stopPropagation());

// Хороший пример: http://jsbin.com/valasomeli/edit?html,js,output

//---------

// Если нам надо повесить событие на несколько элементов, и мы заранее не знаем сколько этих элементов будет, можно использовать делегирование
/* Пример:
<main class="main">
    <section class="header">
        <ul class="nav">
            <li>home</li>
            <li>about</li>
            <li>contacts</li>
        </ul>
    </section>
</main> 
*/

// Вешаем слушатель на список с нужными нам элементами
const navElement = document.querySelector('.nav');

navElement.addEventListener('click', (e) => {
    // Когда происходит клик - определяем на каком он был элементе
    if (e.target.innerText.contains('home')) { 
        console.log('You clicked on home')
    }
});


//////////////////////////////////////////////////////////// THIS - ОБЪЕКТ КОНТЕКСТА ////////////////////////////////////////////////////////////

// this - это ссылка на то окружение, в котором запущена (вызвана) функия.
// this всегда некоторый объект (или null)
// В строгом режиме работы функции ('use strict') при запуске функции в глобальном окружении this равен undefined.

// ФУНКЦИИ ЗАПУЩЕННЫЕ В ГЛОБАЛЬНОМ ПРОСТРАНСТВЕ
getPrice();  // this будет равен глобальному объекту window

// THIS
function getPrice() { return this.price; };
const object = { name: 'Intel', price: 200, getPrice };
object.getPrice();

// ПРИМЕРЫ THIS:
// Изменяем значение в объекте:
function changePrice(value) {
    this.price = value;
    return this;
}

const product = {
    price: 100,
    changePrice: changePrice
}

product.changePrice(200);

//---------


// ОДДАЛЖИВАНИЕ МЕТОДА
const object1 = { 
    price: 200, 
    getPrice: function () { return this.price } 
};
const object2 = { price: 300 };

object2.getPrice = object1.getPrice; // теперь у object2 так же есть метод getPrice
object2.getPrice(); // Вернет price объекта object2.
//---------

// ПРИНУДИТЕЛЬНАЯ ПЕРЕДАЧА КОНТЕКСТА В THIS С ПОМОЩЬЮ .CALL()
// someFunc.call(context, arg1, arg2...)
const product = { price: 200 };

// Метод .call() вызывает вункцию с указанным значением this.
function getPrice() { return this.price; };
getPrice.call(product); // Передаем в функцию getPrice объект product, который внутри функции будет доступен в this.

// Так же метод .call() может принимать различные аргументы.
getPriceWithDiscount.call(product, 10) // Передаем в функцию getPrice объект product, который внутри функции будет доступен в this, и вторым аргументом передаем скидку.

function getPriceWithDiscount(discount) { 
    return this.price * (100 - discount) / 100; 
};

// Так же можно принудительно передать контекст в метод объекта:
object1.getPrice.call(object2);
// или так
object1.getPrice.call({ price: 150 });
//---------

// ПРИНУДИТЕЛЬНАЯ ПЕРЕДАЧА КОНТЕКСТА В THIS С ПОМОЩЬЮ .APPLY()
// Работает точно так же как и .call, только аргументы передаются в виде массива.
function getPriceWithDiscount(discount, currency) { 
    return this.price * (100 - discount) / 100 + currency; 
};

getPriceWithDiscount.apply(product, [10, '$']);  // Результат: '180$'

// Так же можно передать аргументы без передачи контекста multyplt.apply(null, [1, 2, 3])
// Примеры:
// Math.max(1, 2, 10, 5);
Math.max.apply(null, [1, 2, 10, 5]);
//---------

// ПОТЕРЯ КОНТЕКСТА
const object = { 
    price: 200, 
    getPrice: function () { return this.price } 
};

const myFunc = object.getPrice;
myFunc.getPrice(); // Ошибка, this будет равен глобальному объекту window так как функция была запущена в глобальном окружении.
//---------

// ПРИВЯЗКА КОНТЕКСТА
// bind привязывает навсегда.
const object = { 
    price: 200, 
    getPrice: function () { return this.price } 
};

object.getPrice(); // Вернет: 200

let newFunc = object.getPrice; // Передаем тело функции в новую переменную.
newFunc(); // Вернет: undefined так вызван в глобальном окружении.

let newFunc = object.getPrice.bind(object); // Передаем тело функции и контекст в виде объекта object в новую переменную.
newFunc(); // Вернет: 200 и всегда будет возвращать 200, так как привязан к конкретному объекту.

// или так
object.getPrice = object.getPrice.bind(object);  // Делаем привязку метода в объекте к этому же объекту.
let newFunc = object.getPrice; // Передаем тело функции в новую переменную.
newFunc(); // Вернет: 200 так как уже была выполнена привязка.

// Если попробовать вызвать .call
newFunc.call({ price: 150 });  // Вернет все так же: 200 так как привязан к объекту object.

// СОЗДАЕМ BIND ВРУЧНУЮ
function bind(someFunc, context) {
    return function () {
        return someFunc.call(context);
    };
}

function getPrice() { return this.price }
getPrice = bind(getPrice, { price: 350 });
getPrice(); // Вернет: 350


//////////////////////////////////////////////////////////// DATE - РАБОТА С ДАТОЙ ////////////////////////////////////////////////////////////
// В JS Первый месяц в году (январь) соответствует 0, второй месяц (февраль) = 1, март = 2 ... декабрь = 11.
// Воскресенье = 0, понедельник = 1 ... суббота = 6.
// Числа как обычно от 1 до 31.

// Если от даты отнять дрругую дату\число (и другие арифметические операции кроме сложения) то объект будет автоматически преобразовываться к числу миллисекунд.

// ЧТО-БЫ ПОЛУЧИТЬ ТЕКУЩУЮ ДАТУ В МИЛЛИСЕКУНДАХ - TIMESTAMP (прошедших с полуночи 01.01.1970)
let timeStamp = Date.now();
// или
let date = new Date();
let timeStamp = +date;
// или
let date = new Date();
let timeStamp = date.getTime();

// Определение времени последнего захода в сеть
// Записываем последнее время когда человек был в сети
let lastOnline = Date.now();
// Узнаем сколько прошло времени (в милисекундах)
let miliseconds = Date.now() - lastOnline;
// Милисекунды можно преобразовать в секунды
let seconds = result / 1000;
// Секунды в минуты и так далее
let minutes = seconds / 60;

// Таймер
// Определяем когда закончится таймер
let now = Date.now();
// seconds - сколько должно пройти секунд в таймере
let endTime = now + seconds*1000;
// Получаем полноценную дату того времени когда закончится таймер
let date = new Date(endTime)


// ПОЛУЧИТЬ ПОЛНУЮ ТЕКУЩУЮ ДАТУ В ВИДЕ ОБЪЕКТА (у него есть собственные методы).
let date = new Date();  // Wed Jun 13 2018 22:28:08 GMT+0300 (Финляндия (лето))

// ПОЛУЧИТЬ ДАТУ ОПРЕДЕЛЕННОГО ГОДА\ДНЯ\МЕСЯЦА
let date = new Date(2000, 3, 5); // 2000 год, 3 месяц, 5 число. = Wed Apr 05 2000 00:00:00 GMT+0300 (Финляндия (лето))
// или из timestamp
let date = new Date(timeStamp)

date.getDay(); // Получить день недели в виде числа

// ПРЕОБРАЗОВАТЬ ОБЪЕКТ С ДАТОЙ В ТАЙМШТАМП (количество миллисекунду прошедших с 01.01.1970)
let pastTimeStamp = +date;

// ПРЕОБРАЗОВАТЬ ДАТУ В СТРОКУ
date.toString();      // "Wed Jun 13 2018 22:51:47 GMT+0300 (Финляндия (лето))"
date.toDateString();  // "Wed Jun 13 2018"

// ЧТО-БЫ ПОЛУЧИТЬ ДАТУ В ВИДЕ СТРОКИ В СООТВЕТСТВИИ С ТЕКУЩЕЙ ЯЗЫКОВОЙ ЛОКАЛЬЮ (КАК ПРИНЯТО В ДАННОМ РЕГИОНЕ)
// toLocaleString принимает 2 аргумента, первый это текущий язык (ru, ru-RU, en-US и т.д.) и второй аргумент объект опции, там мы можем определить, какие именно части даты показывать (часы, месяц, год…) и в каком формате:

// Свойство          Описание                                       Возможные значения                                      По умолчанию
// localeMatcher	 Алгоритм подбора локали	                    lookup, best fit	                                    best fit
// formatMatcher	 Алгоритм подбора формата	                    basic, best fit	                                        best fit
// hour12	         Включать ли время в 12 - часовом формате	    true -- 12 - часовой формат, false -- 24 - часовой
// timeZone	         Временная зона	                                Временная зона, например Europe/Moscow	                UTC
// weekday	         День недели	                                narrow, short, long
// era	             Эра	                                        narrow, short, long
// year	             Год	                                        2-digit, numeric	                                    undefined или numeric
// month	         Месяц	                                        2-digit, numeric, narrow, short, long	                undefined или numeric
// day	             День	                                        2-digit, numeric	                                    undefined или numeric
// hour	             Час	                                        2-digit, numeric
// minute	         Минуты	                                        2-digit, numeric
// second	         Секунды	                                    2-digit, numeric
// timeZoneName	     Название таймзоны(нет в IE11)	                short, long

// Пример:
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

date.toLocaleString('ru', options);  // "среда, 13 июня 2018 г., 23:49:49"

date.toLocaleString();      // Полная дата и время - "6/13/2018, 10:51:47 PM"
date.toLocaleDateString();  // Только дата         - "6/13/2018"
date.toLocaleTimeString();  // Только время        - "10:51:47 PM"

// Получить имя текущего дня недели.
let currentDayName = new Date().toLocaleDateString('ru', { weekday: 'long' });  // среда


// Получение имени дня недели в ручную
function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}

var date = new Date(2014, 0, 3); // 3 января 2014
alert(getWeekDay(date)); // 'пт'

//---------

// КАК ИЗМЕРЯТЬ ПРОИЗВОДИТЕЛЬНОСТЬ (КАК БЫСТРО ВЫПОЛНЯЕТСЯ КОД)
let startDate = new Date();
// выполняем тестируемый код
let timeLeft = new Date() - startDate;  // в timeLeft будет то время, которое прошло при выполнения кода.

// Альтернативный способ
console.time('result')  // result это просто текст, идентификатор, по которому timeEnd определит с какого именно console.time прошло время
// выполняем тестируемый код
console.timeEnd('result') // тут выведется количество прошедших миллисекунд с того времени как был вызван console.time('result')



//////////////////////////////////////////////////////////// ОБЛАСТИ ВИДИМОСТИ ////////////////////////////////////////////////////////////

// ПРОСТРАНСТВО ИМЕН
// *********************************************
// Все мы использовали jQuery. Как только мы пишем:
jQuery('.myClass');
// мы получаем доступ к jQuery в глобальной ОВ, и мы можем назвать этот доступ пространством имён. Иногда термин «пространство имён» используют вместо термина ОВ, однако обычно им обозначают ОВ самого уровня. В нашем случае jQuery находится в глобальной ОВ, и является нашим пространством имён.
// *********************************************


// ГЛОБАЛЬНАЯ ОБЛАСТЬ ВИДИМОСТИ (ГОВ) и ГЛОБАЛЬНАЯ ОБЛАСТЬ ВИДИМОСТИ (ЛОВ)
// *********************************************
// не написав ни строчки кода, мы уже находимся в глобальной ОВ. Если мы сразу определяем переменную, она находится в глобальной ОВ.

// глобальная ОВ
var name = 'Todd';
var myFunction = function () {
    // локальная ОВ
};

// Глобальная ОВ – ваш лучший друг и худший кошмар. Обучаясь работе с разными ОВ, вы не встретите проблем с глобальной ОВ, разве что вы увидите пересечения имён. Часто можно услышать «глобальная ОВ – это плохо», но нечасто можно получить объяснение – почему. ГОВ – не плохо, вам нужно её использовать при создании модулей и API, которые будут доступны из разных ОВ, просто нужно использовать её на пользу и аккуратно.

// Локальной ОВ называют любую ОВ, определённую после глобальной.Обычно у нас есть одна ГОВ, и каждая определяемая функция несёт в себе локальную ОВ. Каждая функция, определённая внутри другой функции, имеет своё локальное ОВ, связанное с ОВ внешней функции.
// *********************************************


// ФУНКЦИОНАЛЬНАЯ ОБЛАСТЬ ВИДИМОСТИ
// ********************************************
// Все локальные ОВ создаются только в функциональных ОВ, они не создаются циклами типа for или while или директивами типа if или switch. Новая функция – новая область видимости.
// Пример:

// ОВ A
var myFunction = function () {
    // ОВ B
    var myOtherFunction = function () {
        // ОВ C
    };
};

// Так просто можно создать новую ОВ и локальные переменные, функции и объекты.
// *********************************************


// ЛЕКСИЧЕСКАЯ ОБЛАСТЬ ВИДИМОСТИ (ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ)
// *********************************************
// Если одна функция определена внутри другой, внутренняя имеет доступ к ОВ внешней. Это называется «лексической ОВ», или «замыканием», или ещё «статической ОВ». 

// С лексической ОВ довольно просто работать – всё, что определено в ОВ родителя, доступно в ОВ ребенка. К примеру:
var name = 'Todd';

var scope1 = function () {
    // name доступно здесь
    var scope2 = function () {
        // name и здесь
        var scope3 = function () {
            // name и даже здесь!
        };
    };
};

// В обратную сторону это не работает:

// name = undefined
var scope1 = function () {
    // name = undefined
    var scope2 = function () {
        // name = undefined
        var scope3 = function () {
            var name = 'Todd'; // локальная ОВ
        };
    };
};
// *********************************************


// ПОСЛЕДОВАТЕЛЬНОСТИ ОВ
// *********************************************
//Последовательности ОВ определяют ОВ любой выбранной функции.У каждой определяемой функции есть своя ОВ, и каждая функция, определяемая внутри другой, имеет свой ОВ, связанный с ОВ внешней – это и есть последовательность, или цепочка.Позиция в коде определяет ОВ.Определяя значение переменной, JS идёт от самой глубоко вложенной ОВ наружу, пока не найдёт искомую функцию, объект или переменную.
// *********************************************


// ЗАМЫКАНИЯ
// *********************************************
// Живут в тесном союзе с лексическими ОВ. Хорошим примером использования является возврат ссылки на функцию. Мы можем возвращать наружу разные ссылки, которые делают возможным доступ к тому, что было определено внутри.

var sayHello = function (name) {
    var text = 'Hello, ' + name;
    return function () {
        console.log(text);
    };
};

// Чтобы вывести на экран текст, недостаточно просто вызвать функцию sayHello:
sayHello('Todd'); // тишина

// Функция возвращает функцию, поэтому её надо сначала присвоить, а потом вызвать:
var helloTodd = sayHello('Todd');
helloTodd(); // вызывает замыкание и выводит 'Hello, Todd'

// Можно конечно вызвать замыкание и напрямую:
sayHello('Bob')(); // вызывает замыкание без присваивания
// *********************************************


// ОВ И THIS
// *********************************************
// Каждая ОВ назначает своё значение переменной “this”, в зависимости от способа вызова функции. Мы все использовали ключевое слово this, но не все понимают, как оно работает и какие есть отличия при вызовах. По умолчанию, оно относится к объекту самой внешней ОВ, текущему окну. 

//Пример того, как разные вызовы меняют значения this:
// 1)
var myFunction = function () {
    console.log(this); // this = глобальное, [объект Window]
};
myFunction();

// 2)
var myObject = {};
myObject.myMethod = function () {
    console.log(this); // this = текущий объект { myObject }
};

// 3)
var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
    console.log(this); // this = элемент <nav> 
};
nav.addEventListener('click', toggleNav, false);

//---------

// Встречаются и проблемы со значением this.В следующем примере внутри одной и той же функции значение и ОВ могут меняться:
var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
    console.log(this); // <nav> element
    setTimeout(function () {
        console.log(this); // [объект Window]
    }, 1000);
};
nav.addEventListener('click', toggleNav, false);
// Здесь мы создали новую ОВ, которая вызывается не из обработчика событий, а значит, относится к объекту window.

// Можно, например, запоминать значение this в другой переменной, чтобы не возникало путаницы:
var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
    var that = this;
    console.log(that); // элемент <nav> 
    setTimeout(function () {
        console.log(that); // элемент <nav> 
    }, 1000);
};
nav.addEventListener('click', toggleNav, false);

//---------

// Меняем ОВ при помощи .call(), .apply() и .bind()

// Иногда есть необходимость менять ОВ в зависимости от того, что вам нужно.
// В примере:
var links = document.querySelectorAll('nav li');
for (var i = 0; i < links.length; i++) {
    console.log(this); // [объект Window]
}
// Значение this не относится к перебираемым элементам, мы ничего не вызываем и не меняем ОВ. Давайте посмотрим, как мы можем менять ОВ (точнее, мы меняем контекст вызова функций).

// Методы .call() и .apply() позволяют передавать ОВ в функцию:
var links = document.querySelectorAll('nav li');
for (var i = 0; i < links.length; i++) {
    (function () {
        console.log(this);
    }).call(links[i]);
}
// В результате в this передаются значения перебираемых элементов. Метод.call(scope, arg1, arg2, arg3) принимает список аргументов, разделённых запятыми, а метод.apply(scope, [arg1, arg2]) принимает массив аргументов.

// Важно помнить, что методы.call() или.apply() вызывают функции, поэтому вместо
myFunction(); // вызывает myFunction

//позвольте.call() вызвать функцию и передать параметр:
myFunction.call(scope);


// .bind() не вызывает функцию, а просто привязывает значения переменных (контекст) перед её вызовом. Как вы знаете, мы не можем передавать параметры в ссылки на функции:

// работает
nav.addEventListener('click', toggleNav, false);
// приводит к немедленному вызову функции
nav.addEventListener('click', toggleNav(arg1, arg2), false);

// Это можно исправить, создав новую вложенную функцию:
nav.addEventListener('click', function () {
    toggleNav(arg1, arg2);
}, false);

// Но тут опять происходит изменение ОВ, создание лишней функции, что негативно отразится на быстродействии.Поэтому мы используем.bind(), в результате мы можем передавать аргументы так, чтобы не происходило вызова функции:
nav.addEventListener('click', toggleNav.bind(scope, arg1, arg2), false);
// *********************************************


// ПРИВАТНЫЕ И ПУБЛИЧНЫЕ ОВ
// *********************************************
// В JavaScript, в отличии от многих других языков, нет понятий публичных и приватных ОВ, но мы можем их эмулировать при помощи замыканий. Для создания приватной ОВ мы можем обернуть наши функции в другие функции.

(function () {
    // здесь приватная ОВ
})();


// Добавим функциональности:
(function () {
    var myFunction = function () {
        // делаем здесь, что нужно
    };
})();

//Но вызвать эту функцию напрямую нельзя:
(function () {
    var myFunction = function () {
        // делаем здесь, что нужно
    };
})();
myFunction(); // Uncaught ReferenceError: myFunction is not defined


// Вот вам и приватная ОВ. Если вам нужна публичная ОВ, воспользуемся следующим трюком. Создаём пространство имён Module, которое содержит всё, относящееся к данному модулю:

// определяем модуль
var Module = (function () {
    return {
        myMethod: function () {
            console.log('myMethod has been called.');
        }
    };
})();

// вызов методов модуля
Module.myMethod();

// Директива return возвращает методы, доступные публично, в глобальной ОВ. При этом они относятся к нужному пространству имён. Модуль Module может содержать столько методов, сколько нужно.

// определяем модуль
var Module = (function () {
    return {
        myMethod: function () {

        },
        someOtherMethod: function () {

        }
    };
})();

// вызов методов модуля
Module.myMethod();
Module.someOtherMethod();


// Не нужно стараться вываливать все методы в глобальную ОВ и загрязнять её. Вот так можно организовать приватную ОВ, не возвращая функции:
var Module = (function () {
    var privateMethod = function () {

    };
    return {
        publicMethod: function () {

        }
    };
})();


// Мы можем вызвать publicMethod, но не можем privateMethod – он относится к приватной ОВ. В эти функции можно засунуть всё что угодно — addClass, removeClass, вызовы Ajax / XHR, Array, Object, и т.п.

// Интересный поворот в том, что внутри одной ОВ все функции имеют доступ к любым другим, поэтому из публичных методов мы можем вызывать приватные, которые в глобальной ОВ недоступны:
var Module = (function () {
    var privateMethod = function () {

    };
    return {
        publicMethod: function () {
            // есть доступ к методу `privateMethod`:
            // privateMethod();
        }
    };
})();

// Это повышает интерактивность и безопасность кода. Ради безопасности не стоит вываливать все функции в глобальную ОВ, чтобы функции, которые вызывать не нужно, не вызвали бы ненароком.

// Пример возврата объекта с использованием приватных и публичных методов:
var Module = (function () {
    var myModule = {};
    var privateMethod = function () {

    };
    myModule.publicMethod = function () {

    };
    myModule.anotherPublicMethod = function () {

    };
    return myModule; // returns the Object with public methods
})();

// использование
Module.publicMethod();

// Удобно начинать название приватных методов с подчёркивания, чтобы визуально отличать их от публичных:
var Module = (function () {
    var _privateMethod = function () {

    };
    var publicMethod = function () {

    };
})();


// Удобно также возвращать методы списком, возвращая ссылки на функции:
var Module = (function () {
    var _privateMethod = function () {

    };
    var publicMethod = function () {

    };
    return {
        publicMethod: publicMethod,
        anotherPublicMethod: anotherPublicMethod
    }
})();
// *********************************************


//////////////////////////////////////////////////////////// КОНСТРУКТОРЫ И КЛАССЫ ////////////////////////////////////////////////////////////
// ECMAScript 5(ES5)
// Конструктор - это функция, которая учавствует в построениее каких любо объектов. Любая функция вызваная с помощью оператора new превращается в конструктор.
// Функции конструкторы принято называть с большой буквы.
// Оператор inctanceof определяет, создан ли экземпляр данным классом:   person inctanceof User // true   |   someArr inctanceof Array // true

// Функция вызваная с помощью new выполняет следующие действия:
// 1 - Внутри функции создается пустой объект
// 2 - Этот объект устанавливается в качестве this для функции
// 3 - Функция запускается
// 4 - Функция возвращает this (даже если нет return), но, если в return указать другой объект, то будет возвращен он, если же в return будет другой тип данных, то он будет проигнорирован.

function User(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

let person = new User('Igor');
person.getName(); // 'Igor'

//---------

function UserItems(name, items) {
    this.name = name;
    this.items = items;
    this.getItems = function () {
        for (let item of items) {
            console.log(this.name + ' have a ' + this.item);
        }
    }
}

let personItems = new UserItems('Igor', ['Googles', 'Ford Mustang', 'Umbrella']);
personItems.getItems(); // Igor have a Googles, Igor have a Ford Mustang, Igor have a Umbrella.



// ECMAScript 6 (ES6)
// Классы определяются в ECMAScript 6(ES6) следующим образом:

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

var p = new Point(25, 8);
p.toString() // '(25, 8)'

// По факту, результатом создания такого класса будет функция:

//> typeof Point
//'function'

//Однако, вы можете вызывать класс только через new:

Point()
// TypeError: Classes can’t be function-called

//В отличие от функций, определения классов не поднимаются. Таким образом, класс существует только после того, как его определение было достигнуто и выполнено. Попытка создания класса до этого момента приведет к «ReferenceError»:

new Foo(); // ReferenceError
class Foo { }
















