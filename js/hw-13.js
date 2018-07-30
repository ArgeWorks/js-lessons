// Get elements
let usersList = document.querySelector('.users-list'),
    btnGetUsers = document.querySelector('.btn-get-users'),
    btnSortUsers = document.querySelector('.btn-sort-users'),
    usersArr = [];

// UI class
class UI {
    addUserToList(user) {
        // Create markup
        const userCard = `
            <div class="user-card" data-id="${user.id}">
                ${user.name}
                <div class="user-info">
                    <span class="user-full-name">Name: ${user.name}</span>
                    <span class="user-name">Username: ${user.username}</span>
                    <span class="user-email">Email: ${user.email}</span>
                    <i class="material-icons icon-close-info">close</i>
                </div>
            </div>
        `;

        usersList.insertAdjacentHTML('beforeend', userCard);
    }

    addInfoToList(msg) {
        // Create markup
        const infoCard = `
            <div class="info-card">
                ${msg}
            </div>
        `;

        usersList.insertAdjacentHTML('beforeend', infoCard);
    }

    clearUsersList() {
        if (document.querySelector('.info-card')) document.querySelector('.info-card').remove();
        document.querySelectorAll('.user-card').forEach(item => item.remove());
    }

    changeBtnGetUsersState(state) {
        btnGetUsers.textContent = (state === 'load') ? btnGetUsers.dataset.loadingText : btnGetUsers.dataset.defaultText;
        btnGetUsers.disabled = (state === 'load') ? true : false;
    }
}

// Add users to markup
btnGetUsers.addEventListener('click', function (e) {
    // Create HTTP
    const http = new Http();
    // Create UI
    const ui = new UI();
    // Change get users button state
    ui.changeBtnGetUsersState('load');
    // Send get request
    http.get("https://jsonplaceholder.typicode.com/users", function (err, res) {
        // Check error
        if (err) {
            // Clear users list
            ui.clearUsersList();
            // Show status info
            ui.addInfoToList(err);
            // Change get users button state
            ui.changeBtnGetUsersState();
            // Disable sort button
            btnSortUsers.disabled = true;
            return;
        }
        
        usersArr = res;

        // Users count
        if (usersArr.length) {
            // Clear users list
            ui.clearUsersList();
            // Sort users by alphabet
            usersArr.sort((prev, next) => prev.name > next.name);
            // Check isArray and add all users to markup
            if (Array.isArray(usersArr)) usersArr.forEach(user => ui.addUserToList(user));
            // Change get users button state
            ui.changeBtnGetUsersState();
            // Enable sort button
            btnSortUsers.disabled = false;
        } else {
            // Clear users list
            ui.clearUsersList();
            // Show status info
            ui.addInfoToList('Users list is empty');
            // Disable sort button
            btnSortUsers.disabled = true;
        }
    });
});

// Show or hide user info
usersList.addEventListener('click', e => {
    // Show user info
    if (e.target.classList.contains('user-card')) {
        // Get all users info elements
        let allUsersInfo = document.querySelectorAll('.user-info');
        // Hide other info element before open new user info
        allUsersInfo.forEach(item => {
            if (item.classList.contains('d-block')) item.classList.remove('d-block'); 
        });
        // Show user info
        e.target.children[0].classList.toggle('d-block');
    }
    // Hide user info
    if (e.target.classList.contains('icon-close-info')) {
        e.target.parentElement.classList.remove('d-block');
    }
});

// Sort users
btnSortUsers.addEventListener('click', () => {
    if (usersArr.length) {
        // Reverse users array
        usersArr.reverse();
        // Create UI
        const ui = new UI();
        // Clear users list
        ui.clearUsersList();
        // Add all users to markup
        usersArr.forEach(user => ui.addUserToList(user));
    }
});