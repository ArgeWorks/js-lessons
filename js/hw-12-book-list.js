// Class Book
class Book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
}

// Class UI
class UI {
    addBookToList(book) {
        // Get book list
        const list = document.querySelector('.book-list tbody');
        // Create markup
        const tr = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.id}</td>
                <td>
                    <button class="waves-effect waves-light btn red right btn-delete-book">Delete <i class="material-icons right">close</i></button>
                </td>
            </tr>
        `;

        list.insertAdjacentHTML('beforeend', tr);
    }

    deleteBookFromList(element) {
        element.remove();
    }

    resetForm() {
        document.forms['addBookForm'].reset();
        Materialize.updateTextFields();
    }

    showAlert(message, type) {

        // Create markup
        const alert = `
            <div class="card alert ${type === 'error' ? 'red' : 'green'}">
                <div class="card-content white-text">
                <span class="card-title">${type === 'error' ? 'Error' : 'Success'}</span>
                <p>${message}</p>
                </div>
            </div>
        `;

        // Get title
        const cardTitle = document.querySelector('.card-title');
        // Get button
        const btn = document.querySelector('form button');
        // Disabled btn
        btn.disabled = true;

        // Insert alert
        cardTitle.insertAdjacentHTML('afterend', alert);

        setTimeout(function () {
            document.querySelector('.alert').remove();
            btn.disabled = false;
        }, 3000);
    }
}

// Class Local Storage
class Store {
    getBooks() {
        let books;
        if (!localStorage.getItem('books')) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books')); // Перегоняем их из json в обычный массив
        }

        return books;
    }

    addBook(book) {
        // Get books from localstorage
        const books = this.getBooks();
        // Add new book
        books.unshift(book);
        // Save localstorage
        localStorage.setItem('books', JSON.stringify(books));
    }

    deleteBook(id) {
        // Get books from localstorage
        const books = this.getBooks();
        // Delete book from localstorage
        books.forEach((item, i) => { if (item.id === id) books.splice(i, 1) });
        // Save localstorage
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Add books to markup
document.addEventListener('DOMContentLoaded', function (e) {
    // Создаем экземпляр класса Store
    const store = new Store();
    // Create ui
    const ui = new UI();
    // Получаем все книги из хранилища
    const books = store.getBooks();
    // Добавляем книги из хранилища в разметку
    books.forEach(book => ui.addBookToList(book));
});

// Submit book
document.forms['addBookForm'].addEventListener('submit', function (e) {
    e.preventDefault();

    // Create ui
    const ui = new UI();
    // Get Store
    const store = new Store();

    // Get form values
    const title = this.elements['book_title'].value,
        author = this.elements['book_author'].value,
        id = this.elements['book_id'].value;


    // Check unique id
    if (store.getBooks().map(item => item.id).includes(id)) {
        ui.showAlert('This id is already in use! Please enter another id.', 'error');
        return;
    }

    // Create book
    const book = new Book(title, author, id);

    // Validate
    if (title === '' || author === '' || id === '') {
        // Show error
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to localstorage
        store.addBook(book);
        // Add book to ui
        ui.addBookToList(book);
        // Reset form inputs
        ui.resetForm();
        // Show success message
        ui.showAlert('Book added!', 'success');
    }
});

// Delete book
document.querySelector('.book-list').addEventListener('click', function (e) {
    e.preventDefault();

    // Check btn-delete-book class
    if (e.target.classList.contains('btn-delete-book')) {
        // Create ui
        const ui = new UI();
        // Get Store
        const store = new Store();
        // Get all td
        const td = e.target.closest('tr').querySelectorAll('td');
        // Delete book from localstorage
        store.deleteBook(td[2].textContent);
        // Delete book from markup
        ui.deleteBookFromList(e.target.closest('tr'));
        // Show success message
        ui.showAlert('Book deleted!', 'success');
    }
});
