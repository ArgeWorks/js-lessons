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

//С помощью функции parseInt()
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
// FUNCTION DECLARATION
// обычная функция. Приемущество: такие функции всплывают и мы можем получить доступ к ним в любом месте кода.

function Test() {
}

//--------------------------
// FUNCTION EXPRESSION
// запись функции в переменную, чаще всего записывают в константы, так как функции не меняются, вывоз функции осуществляется точно так же как и у обычной //функции. Примечание: Такие функции не всплывают, и мы можем получить к ним доступ только после объявления функции. Так же им можно присваивать имя //const myFunc = function someFunc () для работы с ней внутри самой функции (рекурсия).

const myFunc = function () {
};

//--------------------------
// IMMEDIATELY-INVOKED FUNCTION EXPRESSION (SELF-INVOKING FUNCTION EXPRESSION)
// Cамовызывающаяся функция, выполняется автоматически, когда до нее доходит интерпритатор.

(function (str) {
    console.log('str =' + str); // будет: str = 10
    ;
}(10)); // Можно передавать аргунменты

// или

(function () {
    // Code goes here
})();

//--------------------------
// ARROW FUNCTION
// Стрелочные функции

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
// ФУНКЦИИ ВЫСШЕГО ПОРЯДКА

function mainFunc(firstName) {
    return function (secondName) {
        return 'Hello ' + firstnName + ' ' + secondName; 
    }
}

// Если вызвать ее так:

mainFunc('Igor');   // нам вернется тело вложенной функции - function (secondName).

// Если вызвать так:

mainFunc('Igor')('Argunov');   // нам вернется строка - 'Hello Igor Argunov'

// Так же можно записать результат возврата в переменную:

const secondFunc = mainFunc('Igor');   // В переменную secondFunc будет записано тело внутренней функции, так же туда передаются значениее аргунментов.

// Теперь если мы вызовем:
secondFunc('Argunov');    // То нам вернется строка - 'Hello Igor Argunov'

//--------------------------
// ПЕРЕДАЧА ФУНКЦИИ ЧЕРЕЗ АРГУМЕНТЫ ВЫЗОВА

function myFunc(str, someFunc) {
    console.log(str + ' ', someFunc());      // выдаст строку: Wow! This is good!
}

myFunc('Wow! ', function () { return 'This is good!' });


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

// Конвертируем и копируем псевдомассив в обычный массив
element = Array.prototype.slice.call(body.children);

//---------

// В DOM есть такие типы как живая(HTMLCollection) и не живая коллекция(NodeList):
// HTMLCollection - реагирует на изменений DOM-а, если на странице появится новый объект, то он так же появится и в коллекции.
// NodeList - статичный снимок, который больше не изменяется, если после этого на странице удалить\добавить какой-то объект, коллекция останется такой же как и была ранее.

// Что-бы пользоваться всеми методами обычныйх массивов в живых или не живых коллекциях, их нужно сконвертировать - let arr = Array.prototype.slice.call(document.body.children)

const section;

// Живые коллекции - HTMLCollection, для перебора можно использовать только цикл for.
section = document.getElementById('section');             // Получить один элемент (самый первый) с классом section.
section = document.getElementsByClassName('section');     // Получить все элементы с классом section.
section = document.getElementsByName('MyName');           // Получить все элементы у которых аттрибут name равен 'MyName'.
section = document.getElementsByTagName('div');           // Получить все элементы с тегами div.

// Не живые коллекции (селекторы нужно писать как в css) - NodeList, для перебора можно использовать обычные циклы и цикл forEach.
section = document.querySelector('.section');             // Получить один элемент (самый первый) с классом section.
section = document.querySelectorAll('#section');          // Получить все элементы с айди section.

//---------

const links = document.links;    // Получить все ссылки на странице.
const forms = document.forms;    // Получить все формы на странице.

// Получить определенную форму
const myForm = forms.myForm;    // Получить форму у которой атрибут name равен myForm.
// или
const myForm = forms[myForm];

// Получить все элементы формы (инпуты, чекбоксы и т.д)
const myFormElements = myForm.elements;

// Получить определенный элемент формы
// Если у элементов форм есть id, то можно осуществлять доступ к ним по содержимому id: myFormElements.thisIsIdValue или myFormElements[thisIsIdValue],
// если id нет, тогда можно осуществлять доступ по номеру: myFormElements[1]
const myFormInput = myFormElements.myInput;  // Получить инпут у которого есть атрибут id равный myInput.

// Получить значение input-а
const myFormInputValue = myFormInput.value;  // Получаем весь текст который есть в инпуте.
// Так же можно получать значение инпута чарез собитие, см. раздел СОБЫТИЯ.

// Отключить инпут
myFormInput.disabled = true;  // Что-бы включить нужно присвоить false

//---------

// Проверка селектора
// <div class="card mb-3 list-card">
// const card = document.querySelector('.card')
const result = card.matches('div');           // Результат : true, так как элемент с классом .card является div-ом.
const result = card.matches('#button');       // Результат : false, так как у элемента с классом .card нет айдишника #button.

//---------

const parent = card.closest('.container')    // closest найдет ближайшего вышестоящего родителя с указанным селектором.
const parent = card.parentElement;           // Показывает прямого родителя.


//======================== МЕТОДЫ ДЛЯ ПОЛУЧЕНИЯ/ИЗМЕНЕНИЯ/ДОБАВЛЕНИЯ СОДЕРЖИМОГО ========================//

// Получение содержимого
// <div class="card">Some text <span>Good!</span></div>
// const someDiv = document.querySelector('.card');
const someDivContent = someDiv.innerHTML;  // Получаем внутреннее html содержимое тега div. Результат: 'Some text <span>Good!</span>'
const someDivContent = someDiv.outerHTML;  // Получаем все html содержимое тега div. Результат: '<div class="card">Some text <span>Good!</span></div>'
const someDivContent = someDiv.innerText;  // Получаем текстовое содержимое тега div. Результат: 'Some text'

const someDivContent = someDiv.firstChild.data;  // Получаем текстовое содержимое тега div. Результат: 'Some text'

//--------- Классы:

// Добавление и удаление классов
someDiv.classList.add('card', 'card-item');      // Добавить элементу классы card и card-item.
someDiv.classList.remove('card');                // Удалить элементу класс card.

// Переключатель классов
someDiv.classList.toggle('card');    // Добавляет или удаляет класс card, возвращает true(если класс есть) или false(если класса нету).

// Проверка есть ли у елемента нужный нам класс
let result = someDiv.classList.contains('card');   // Если такой класс есть, вернется true, если нет тогда false.

//--------- Аттрибуты:

// Получить список всех атрибутов
let attributes = someDiv.attributes;

// Получение значений атрибутов
let id = someDiv.id;                  // Получить айдишник
let className = someDiv.className;    // Получить классы элемента
let className = someDiv.href;         // Получить url

// Получить значение любого атрибута
let attributValue = someDiv.getAttribute('class');  // Результат: 'card'

// Добавить\изменить атрибут и значение
someDiv.setAttribute('style', 'display: flex; color: red');   // Результат: <div class="card" style="display: flex; color: red">...</div>

// Удалить указанный атрибут
someDiv.removeAttribute('style');

// Проверить есть ли нужный нам атрибут у элемента
let result = someDiv.hasAttribute('class');   // Результат: true или false

// Обращение к кастомным атрибутам data
// <div class="card" data-contact='12345'>...</div>
let result = someDiv.dataset;          // Вернет нам список всех атрибутов data, в списке имена атриботв отображаются без приставки data.
let result = someDiv.dataset.contact;  // Вернет нам сразу значение атрибута data-contact.

//--------- Элементы:

// Создание DOM элемента
let div = document.createElement('div')

// Получить имя элемента
div.tagName;  //Результат: 'div'

// Добавление одного DOM элемента в другой элемент.
// appendChild - добавляет все элементы в конец
// let ul = document.createElement('ul')
// let li = document.createElement('li')
ul.appendChild(li); //Добавление элемента

// Альтернативный способ добавления DOM элемента в другой элемент.
// insertAdjacentElement - принимает 2 значения, первое - позиция, куда добавлять элемент: beforebegin, afterbegin, beforeend и afterend. Второе значение - добавляемый объект.
ul.insertAdjacentElement('afterbegin', li);

// Добавление разметки в DOM элемент
// insertAdjacentHTML - принимает 2 значения, первое - позиция, куда добавлять элемент: beforebegin, afterbegin, beforeend и afterend. Второе значение - добавляемая разметка.
ul.insertAdjacentHTML('afterbegin', '<li>Some Text</li>');

// Удаление текущего DOM элемента
ul.remove();       // Удаляет ul

// Удаление DOM элемента из дргого элемента
ul.removeChild(li);    // Удаляет li внутри ul

// Проверить есть ли DOM элемент в другом элементе
// <div><span>Some text</span></div>
// let div = querySelector('div');
// let span = querySelector('span');
div.contains(span);     // Результат: true или false




//==================================================== СОБЫТИЯ ====================================================//

// Вешаем слушатель собития. 1-й Вариант (Не удобный)
div.onclick = function() { console.log('Hello!') };

// Вешаем слушатель собития. 2-й Вариант (Универсальный)
// addEventListener принимает 3 аргумента: 
// 1-й собитие - 'click', 'scroll' и т.д. 
// 2-й обработчик события - функция, которя принимает один параметр, через который передается объект события(В нем находятся данные: где произошло событие, координаты, тип события и т.д). 
// 3-й ...
div.addEventListener('click', myFunc);
// Или удаляем слушатель
div.removeEventListener('click', myFunc);
// Обработчик события, e - это объект события.
function myFunc(e) {
    e.preventDefault();           // Отменяем стандартные действия объекта.
    let value = e.target.value;   // Получить значение элемента (к примеру инпута).
}