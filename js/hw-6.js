// Task model
let tasks = [
    {
        text: 'Learn JavaScript',
        id: '1'
    },
    {
        text: 'Learn Angular',
        id: '2'
    }
];

// Elements
const ul = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-btn');
const addBtn = document.querySelector('.add-task-btn');
const form = document.forms['addTodoItem'];
const input = document.forms.addTodoItem.todoText;

// Events
clearBtn.addEventListener('click', clearList);
ul.addEventListener('click', deleteTask);
form.addEventListener('submit', addTask);
input.addEventListener('keyup', e => {
    addBtn.disabled = !(input.value.length > 0);
});

// Clear list function
/** @param {Event} e **/
function clearList(e) {
    //Cancel default action
    e.preventDefault();
    //Clear tasks rray
    tasks = [];
    //Clear HTML markup
    ul.innerHTML = '';
    // Show info message
    messageInfo('Tasks list cleared!');
}

// Add all tasks to HTML markup
tasks.forEach(task => ul.insertAdjacentElement('afterbegin', createElement('li', ['list-group-item'], task.text, task.id)));

//Element template
function createElement(tag, classes, text, id) {
    // Create element
    const element = document.createElement(tag);
    // Paste text to element
    element.textContent = text;
    // Set classes
    element.classList.add(...classes);
    // Set id
    if (id) element.setAttribute('data-id', id);
    // Add trash icon for list-group-items
    if (tag === 'li') element.insertAdjacentHTML('beforeend', '<i class="fas fa-trash-alt delete-task-btn"></i>');
    // Return element
    return element;
}

// Add task
/** @param {Event} e **/
function addTask(e) {
    //Cancel default action
    e.preventDefault();
    // Get text from input
    let text = input.value;
    // Create task object
    const newTask = {text, id: String(tasks.length + 1)};
    // Add object to tasks array
    tasks.unshift(newTask);
    // Add li to HTML markup
    ul.insertAdjacentElement('afterbegin', createElement('li', ['list-group-item'], newTask.text, newTask.id));
    // Clear input
    input.value = '';
    // Disable add button
    addBtn.disabled = true;
    // Show info message
    messageInfo('Task successfully added!');
}

// Delete task
/** @param {Event} e **/
function deleteTask(e) {
    // Cancel default action
    e.preventDefault();
    // Check delete-task-btn class
    if (e.target.classList.contains('delete-task-btn')) {
        // Get parent
        const parent = e.target.parentElement;
        // Delete task on tasks array
        tasks = tasks.filter(task => task.id !== String(parent.dataset.id));
        // Delete task at HTML markup
        parent.remove();
        // Show info message
        messageInfo('Task successfully removed!');
    }
}

// Alert info
function messageInfo(text) {
    // Get alert element
    const divAlert = document.querySelector('.alert');
    // Check alert exists
    if (!divAlert) {
        // Create alert element and paste at HTML markup
        document.querySelector('.container').insertAdjacentElement('afterbegin', createElement('div', ['alert', 'alert-info'], text));
    } else {
        // Or add text to existing elert
        divAlert.textContent = text;
    }
}