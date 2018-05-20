// ========== Задачи - функции ========== //

//1)
function multiply() {
    if (arguments.length < 2) return new Error('to perform multiply, need more than 1 number');
    let summ = 1;
  
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i]) && arguments[i]) summ *= arguments[i];
        else return new Error('all arguments must be a number and more than 0');
    }

    return summ;
}

//3)
function reverseString(text) {
    if (!text) return new Error('argument must not be empty');
    if (typeof str !== 'string') return new Error('argument must be a string');
    let reverseText = '';

    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i];
    }

    return reverseText;
}

//4)
function getCodeStringFromText(str) {
    if (!str) return new Error('argument must not be empty');
    if (typeof str !== 'string') return new Error('argument must be a string');
    let formatStr = '';

    for (let i = 0; i < str.length; i++) {
        formatStr += i === str.length - 1 ? str.charCodeAt(i) : str.charCodeAt(i) + ' ';
    }

    return formatStr;
}

//Todos
let todos = [
    {
        text: 'Learn JavaScript',
        id: 0
    },
    {
        text: 'Learn Angular',
        id: 1
    }
];

function addTask(text) {
    if (!text) return new Error('text argument required'); // Проверка переменной text на значение undefined
    if (typeof text !== 'string') return new Error('text argument is not a string');
    if (!text.length) return new Error('text argument empty');

    // Create new task obj
    const newTask = {
        id: todos.length,
        text
    };

    // Add new task
    todos.push(newTask); // push, pop, unshift, shift

    return todos;
}

function deleteTask(id) {
    if (id !== 0 && !id) return new Error('id argument required');
    if (isNaN(id)) return new Error('id argument must be a number');
    id = Number(id);

    let todo;

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todo = todos[i];
            todos.splice(i, 1);
            break;
        }
    }

    return todo || 'task not found';
}

function editTask(id, text) {
    if (id !== 0 && !id && !text) return new Error('id and text arguments required'); // Проверка переменных id и text на значение undefined
    if (isNaN(id)) return new Error('id argument must be a number'); // Проверка переменной id на значение NaN
    if (typeof text !== 'string') return new Error('text argument is not a string'); // Проверка переменной text на тип string
    if (!text.length) return new Error('text argument empty'); // Проверка переменной text на пустую строку.

    let todo;

    for (let task of todos) {
        if (task.id === id) {
            task.text = text;
            todo = task;
        }
    }

    return todo || 'task not found';
}