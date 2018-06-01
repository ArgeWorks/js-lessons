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
tasks.forEach(task => ul.insertAdjacentElement('afterbegin', listTemplate(task)));

function listTemplate(task) {
    // Create element
    const li = document.createElement('li');
    // Paste text to element
    li.textContent = task.text;
    // Set id
    li.setAttribute('data-id', task.id);
    // Set class
    li.classList.add('list-group-item');
    // Return element
    return li;
}

// Add task
function addTask(text) {
    // Create task object
    const newTask = {text, id: String(tasks.length + 1)}
    // Add object to tasks array
    tasks.unshift(newTask);
    // Add li to HTML markup
    ul.insertAdjacentElement('afterbegin', listTemplate(newTask))
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
        // Create element
        const divAlert = document.createElement('div');
        // Add classes
        divAlert.classList.add('alert', 'alert-info');
        // Add message
        divAlert.textContent = text;
        // Paste element to HTML markup
        document.querySelector('.container').insertAdjacentElement('afterbegin', divAlert);
    } else {
        // Or add message to existing elert
        divAlert.textContent = text;
    }
}