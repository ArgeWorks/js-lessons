// ========== Задачи - функции ========== //

//1)
function multiply() {
    if (arguments.length < 2) return new Error('to perform multiply, need more than 1 number');
    let summ = 1;
  
    for (let i = 0; i < arguments.length; i++) {
        if (!isNaN(arguments[i])) summ *= arguments[i];
        else return new Error('all arguments must be a number');
    }

    return summ;
}

//3)
function reverseString(str) {
    if (!str) return new Error('string must not be empty');
    let reverseText = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseText += str[i];
    }

    return reverseText;
}

//4)
function getCodeStringFromText(str) {
    if (!str) return new Error('string must not be empty');
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
    if (typeof text !== 'string') return new Error('text is not a string');
    if (!text.length) return new Error('text empty');

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
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
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
    if (id !== 0 && !id && !text.length) return new Error('id and text required');
    if (isNaN(id)) return new Error('id must be a number');
    if (typeof text !== 'string') return new Error('text is not a string');

    for (let task of todos) {
        if (task.id === id) {
            task.text = text;
        }
    }
}