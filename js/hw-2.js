// ========== Присваивание ========== //

//1) Записи в коротком виде
let a = b = c = 5,
    x = y = i = z = 10;

a += 10, 
b *= 18, 
c -= 10,
x += a,
y *= z,
i *= y * 5;

//2) Возмедение переменной в квадрат
let sourceNumb = 34;

console.log(`Исходное число: ${sourceNumb}, в квадрате: ${sourceNumb *= sourceNumb}`);

// ========== Арифметические операторы ========== //

//1) Сравнить записи
let a1 = a2 = 5;

console.log(`Выполняем a1++ и ++a2, на этой строке полчаем: a1 = ${a1++}, a2 = ${++a2}`);
console.log(`На следующей строке: a1 = ${a1}, a2 = ${a2}`);

//2) Узнаем четное или не четное с помощью оператора %
sourceNumb = 9;

if (sourceNumb % 2 == 1) 
    console.log(`Исходное число: ${sourceNumb} и оно не четное`);
else 
    console.log(`Исходное число: ${sourceNumb} и оно четное`);

// ========== Условные операторы ========== //

//1)
let overflow = 'hidden';

if (overflow == 'hidden') overflow = 'visible';
else overflow = 'hidden';

overflow = overflow == 'hidden' ? 'visible' : 'hidden';

//2)
let degrees1 = 0;

if (degrees1 == 0) degrees1 = 1;
else if (degrees1 < 0) degrees1 = 'меньше нуля';
else degrees1 *= 10;

console.log(`В холодильнике градусов: ${degrees1}`);

// Тернарный вариант
let degrees2 = -1;

degrees2 = degrees2 == 0 ? 1 : 
            degrees2 < 0 ? 'меньше нуля' : degrees2 *= 10;

console.log(`В морозильнике градусов: ${degrees2}`);

// ========== Switch Case ========== //

let display = 'none';

console.log(`Свойство display равно: ${CheckDisplay(display)}`);

function CheckDisplay(inputParam) {
    switch (inputParam) {
        case 'block': 
            return 'block';
        case 'none': 
            return 'none';
        case 'inline': 
            return 'inline';
        default: 
            return 'flex';
    }
};

// ========== Преобразование типов ========== //
//1)
let value;

// Оператор "ИЛИ ||" ищет правду и возвращает первое правдивое значение, если все значения ложные, возвращается последнее значение.
// Оператор "И &&" ищет ложь и возвращает первое ложное значение, если все значения правдивые, возвращается последнее значение.
value = 0 || 'string'; // value = string, 0 = false, не пустая строка = true.
value = 1 && 'string'; // value = string, оба значения = true, возвращается последнее.
value = null || 25; // value = 25, null = false, 25 = true.
value = null && 25; // value = null, null = false, 25 = true.
value = null || 0 || 25; // value = 25, null = false, 0 = false, 25 = true.
value = null && 0 && 25; // value = null, null = false, 0 = false, 25 = true.

//2)
// Сложение любого значения со строкой выполняет конкатенацию и конвертирование в строку без сложения.
// При любых других арифметических операциях строка будет пытаться сконвертироваться в число после чего будет выполнена арифметическая операция.
// При добавлении унарного +, строка пытается преобразоваться в цифру.
// true равен 1.
// null, false равны 0.
// undefined равен Not a Number (NaN).

12 + 14 + '12' // = '2612'
3 + 2 - '1' // = 4
'3' + 2 - 1 // = '31'
true + 2 // = 3
+'10' + 1 // = 11
undefined + 2 // = Nan
null + 5 // = 5
true + undefined // = NaN