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

const ul = document.querySelector('.list-group');

// Add all tasks to HTML markup
tasks.forEach(task => ul.insertAdjacentElement('afterbegin', createElement('li', ['list-group-item'], task.text, task.id)));

//Elements template
function createElement(tag, classes, text, id) {
    // Create element
    const element = document.createElement(tag);
    // Set classes
    for (let elementClass of classes) {
        element.classList.add(elementClass);
    }
    // Set id
    if (id !== undefined) element.setAttribute('data-id', id);
    // Paste text to element
    element.textContent = text;
    // Return element
    return element;
}

// Add task
function addTask(text) {
    // Create task object
    const newTask = {text, id: String(tasks.length + 1)}
    // Add object to tasks array
    tasks.unshift(newTask);
    // Add li to HTML markup
    ul.insertAdjacentElement('afterbegin', createElement('li', ['list-group-item'], newTask.text, newTask.id))
    // Show info message
    messageInfo('Task successfully added!');
}

// Delete task
function deleteTask(id) {
    // Delete task on tasks array
    tasks.forEach((task, i) => {
        if (task.id === String(id))
            tasks.splice(i, 1);
    });
    // Delete task at HTML markup
    for (let task of document.getElementsByClassName('list-group-item')) {
        if (task.dataset.id === String(id)) ul.removeChild(task);
    }
    // Show info message
    messageInfo('Task successfully removed!');
}

// Alert info
function messageInfo(text) {
    // Get alert element
    const divAlert = document.querySelector('.alert');
    // Create alert element and add text existing alert
    if (divAlert === null) {
        document.querySelector('.container').insertAdjacentElement('afterbegin', createElement('div', ['alert', 'alert-info'], text));
    } else {
        // Or add message to existing elert
        divAlert.textContent = text;
    }
}