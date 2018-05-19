// ========== Задачи - циклы ========== //

//1)
let ecText = 'i am in the easycode',
    ecTextNew = '';

for (let i = 0; i < ecText.length; i++) {
    ecTextNew += (i === 0) ? ecText[i].toUpperCase() :
        (ecText[i] === ' ') ? ecText[i] + ecText[++i].toUpperCase() : ecText[i];
}

console.log(`Преобразовать первые буквы в большие:`);
console.log(`исходный текст - ${ecText}`);
console.log(`обработанный текст - ${ecTextNew}`);

//2)
let reverseText = 'tseb eht ma i',
    directText = '';

for (let i = reverseText.length - 1; i >= 0; i--) {
    directText += reverseText[i];
}

console.log(`Развернуть текст:`);
console.log(`исходный текст - ${reverseText}`);
console.log(`обработанный текст - ${directText}`);

//3)
let factorialNumb = i = d = 10;

while (--i) {
    factorialNumb *= i;
}

console.log(`Факториал числа ${d}: ${factorialNumb}`);

//4)
let countNumb = 10,
    countStr = '';

for (let i = 1; i <= countNumb; i++) {
    countStr += i === countNumb ? i : i + ', ';
}

console.log(`Считаем до ${countNumb}: ${countStr}`);

//5)
let jsText = 'JavaScript is a pretty good language',
    jsTextNew = '';

for (let i = 0; i < jsText.length; i++) {
    jsTextNew += (i === 0) ? jsText[i].toUpperCase() :
        (jsText[i] === ' ') ? jsText[++i].toUpperCase() : jsText[i];
}

console.log(`Преобразовать первые буквы в большие и убрать пробелы:`);
console.log(`исходный текст - ${jsText}`);
console.log(`обработанный текст - ${jsTextNew}`);

//6)
let minNumb = 1,
    maxNumb = 15;

console.log(`Найти все нечетные числа от ${minNumb} до ${maxNumb}:`);

for (let i = minNumb; i <= maxNumb; i++) {
    if (i % 2 === 1) console.log(i);
}

