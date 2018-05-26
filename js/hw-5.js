// ========== Задачи - функции ========== //

//6) Создать две функции, основную и функцию обработчкик, основная возвращает New value: + результат обработки.
let strArr = ['my', 'name', 'is', 'Trinity'],
    numArr = [10, 20, 30],
    objArr = [
    {
        name: 'John',
        age: 45
    },
    {
        name: 'Aaron',
        age: 20
    }
];

function formatData(arr, handler) {
    let result = 'New value: ';

    for (let item of arr) {
        result += handler(item);
    }
    
    return result;
}

function toUpperFirstLetter(item) {
    return item[0].toUpperCase() + item.slice(1);
}

function calcMultiply(item) {
    return `${item * 10}, `;
}

function objInfo(item) {
    return `${item.name} is ${item.age}, `;
}

function reverseString(item) {
    return `${item.split('').reverse().join('')}, `;
}

console.log(formatData(strArr, toUpperFirstLetter));
console.log(formatData(numArr, calcMultiply));
console.log(formatData(objArr, objInfo));
console.log(formatData(strArr, reverseString));
console.log(formatData(numArr, item => `${item + 5}, `));

// ========== Задачи - Переписать Every\Some ========== //

let clientsArr = [
    {
        name: 'Igor',
        age: 28,
    },
    {
        name: 'Vasya',
        age: 25,
    },
    {
        name: 'Kolya',
        age: 20,
    }
]

function customEvery(arr, handler) {
    let result = true;

    for (let item of arr) {
        if (!handler(item)) result = false;
    }

    return result;
}

function customSome(arr, handler) {
    for (let item of arr) {
        if (handler(item)) return true;
        else return false;
    }
}

let everyResult = customEvery(clientsArr, (item) => item.age > 19);
let someResult = customSome(clientsArr, (item) => item.age > 30);

console.log('everyResult: ' + everyResult);
console.log('someResult: ' + someResult);

// ========== Задачи - массивы ========== //

//2) Отсортировать массив в обратном порядке
let sortNumArr = [2, 4, 7, 1, -2, 10, -9];

function reverseSortArr(arr) {
    return arr.sort((prev, next) => prev - next).reverse();
}

console.log('reverseSort: ' + reverseSortArr(sortNumArr));

//3) Написать функцию которая копирует часть исходного массива в новый массив
let sourceArr = ['a', 'b', 'c', 'd', 'e', 'f'];

function filtrateArr(arr, start, stop) {
    return arr.slice(start, stop);
}

let filteredArr = filtrateArr(sourceArr, 2, 4);

console.log(filteredArr);

//8) Отсортировать массив массивов так, что-бы массивы били от меньшего к большему
let jaggedArr  = [[14, 45], [1], ['a', 'c', 'd']];

function sortArr(arr) {
    return arr.sort((prev, next) => prev.length - next.length);
}

console.log(sortArr(jaggedArr));

//10) Отсортировать массив с процессорами по возрастающему количеству ядер
let processorsArr = [
    { cpu: 'intel', info: { cores: 2, cache: 3 } },
    { cpu: 'intel', info: { cores: 4, cache: 4 } },
    { cpu: 'amd', info: { cores: 1, cache: 1 } },
    { cpu: 'intel', info: { cores: 3, cache: 2 } },
    { cpu: 'amd', info: { cores: 4, cache: 2 } },
];

processorsArr.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(processorsArr);

//11) Вернуть массив с продуктами, цена которых находится в указанном диапазоне, и отсортировать от дешевых к дорогим.
const productsArr = [
    { title: 'prod1', price: 5.2 },
    { title: 'prod2', price: 0.18 },
    { title: 'prod3', price: 15 },
    { title: 'prod4', price: 25 },
    { title: 'prod5', price: 18.9 },
    { title: 'prod6', price: 8 },
    { title: 'prod7', price: 19 },
    { title: 'prod8', price: 63 }
];

function filtrateProducts(arr, min, max, sortType) {
    return arr.filter(item => item.price >= min && item.price <= max).sort((prev, next) => { 
        if (sortType === 'MinToMax') return prev.price - next.price;
        else if (sortType === 'MaxToMin') return next.price - min.price;
    });
}

//Вариант function expression:
//let filtrateProducts = (arr, min, max) => arr.filter(item => item.price >= min && item.price <= max).sort((prev, next) => prev.price - next.price);

console.log(filtrateProducts(productsArr, 5, 19, 'MinToMax'));

// ========== Задачи - массивы ES5 ========== //

//2) Собрать массив с информацией о числе и его четности.
let someArr = [1, 2, 3, 5, 8, 9, 10];

function makeInfoArr(arr) {
    let result = [];

    for (let item of arr) {
        result.push({
            digit: item,
            odd: !(item % 2)
        });
    }

    return result;
}

console.log(makeInfoArr(someArr));

//5) Собрать и вернуть строку, основываясь на index каждой буквы.
let lettersInfo = [
    { char: "w", index: 8 },
    { char: "a", index: 12 },
    { char: "Y", index: 10 },
    { char: "p", index: 3 },
    { char: "p", index: 2 },
    { char: "N", index: 6 },
    { char: " ", index: 5 },
    { char: "y", index: 4 },
    { char: "r", index: 13 },
    { char: "H", index: 0 },
    { char: "e", index: 11 },
    { char: "a", index: 1 },
    { char: " ", index: 9 },
    { char: "!", index: 14 },
    { char: "e", index: 7 }
];

function makeString(arr) {
    return arr.sort((prev, next) => prev.index - next.index).reduce((prevItem, currentItem, index, arr) => prevItem + currentItem.char, '');
}

console.log(makeString(lettersInfo));
