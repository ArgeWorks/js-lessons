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

//---------6) Доделать
// function test() {
//     let name = 'Vasiliy';
//     return getBigName();
// }

// function getBigName() {
//     return name.toUpperCase();
// }
// let name = 'Vanya';


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
