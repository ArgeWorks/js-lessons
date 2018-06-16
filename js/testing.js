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

//console.log(newStr);

//или

charArray = rawStr.split('').reverse().join('');

//console.log(charArray);
//-------------------------



