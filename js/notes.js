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


//============================================== Testing Area ==============================================//

function modifyString(str, func) {
    let result = '';

    for (let char of str) {
        result += func(char);
    }

    return result;
}

function handlerUpperCase(char) {
    return char.toUpperCase();
}

function handlerCharCode(char) {
    return char.charCodeAt(0);
}

//modifyString("Hello JavaScript!", handlerUpperCase);
//modifyString("Hello JavaScript!", handlerCharCode);

//-------------------------

let rawStr = "Some string!";

let charArray = rawStr.split('');  //Разбиваем строку на массив, каждая буква отдельный элемент
charArray.reverse(); //Разворачиваем массив

let newStr = charArray.join(''); //Преобразовываем массив в строку, разделителя нет.

console.log(newStr);

//или

charArray = rawStr.split('').reverse().join('');

console.log(charArray);
//-------------------------