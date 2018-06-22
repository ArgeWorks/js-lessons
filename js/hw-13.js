// UI class
class UI {
    addUserToList(user) {
        // Get users list
        const usersList = document.querySelector('.users-list');
        // Create markup
        const userCard = `
            <div class="user-card">
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

    clearUsersList() {
        if (document.querySelector('.info-card')) document.querySelector('.info-card').remove();
        document.querySelectorAll('.user-card').forEach(item => item.remove());
    }

    changeBtnState(state) {
        if (state === 'load') {
            btnGetUsers.textContent = 'Loading...';
            btnGetUsers.disabled = true;
        } else {
            btnGetUsers.textContent = 'Get Users';
            btnGetUsers.disabled = false;
        }
    }
}

let usersList = document.querySelector('.users-list'),
    btnGetUsers = document.querySelector('.btn-get-users');

// Add users to markup
btnGetUsers.addEventListener('click', function (e) {
    // Create HTTP
    const http = new Http();
    // Create UI
    const ui = new UI();
    // Change button state
    ui.changeBtnState('load');

    // Send get request
    http.get("https://jsonplaceholder.typicode.com/users", function (err, res) {
        // Check error
        if (err) {
            document.querySelector('.info-card').textContent = err;
            // Change button state
            ui.changeBtnState();
            return;
        }
        // Clear users list
        ui.clearUsersList();
        // Parse result
        let usersArr = JSON.parse(res);
        // Check isArray and add all users to markup
        if (Array.isArray(usersArr)) usersArr.forEach(user => ui.addUserToList(user));
        // Change button state
        ui.changeBtnState();
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