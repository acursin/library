const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    let readMessage = this.read ? 'read' : 'not read yet';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`;
}

Book.prototype.createElement = function() {
    const element = document.createElement('article');
    element.classList.add('book');
    element.setAttribute('data-index', myLibrary.indexOf(this))

    const elementTitle = document.createElement('p');
    elementTitle.textContent = this.title;
    element.appendChild(elementTitle);

    const elementAuthor = document.createElement('p');
    elementAuthor.textContent = this.author;
    element.appendChild(elementAuthor);

    const elementPages = document.createElement('p');
    elementPages.textContent = this.pages;
    element.appendChild(elementPages);

    const elementReadStatus = document.createElement('p');
    elementReadStatus.textContent = this.read ? 'Read' : 'Not read yet';
    element.appendChild(elementReadStatus);

    return element;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function createLibraryDisplay() {
    const libraryDisplay = document.getElementById('library');
    for (const book of myLibrary) {
        libraryDisplay.appendChild(book.createElement());
    }
}

const showBookModalButton = document.getElementById('show-book-modal-button');
const bookModal = document.getElementById('book-modal');

showBookModalButton.addEventListener('click', () => {
    bookModal.showModal();
});

const newBookForm = document.getElementById('new-book-form');

newBookForm.addEventListener('submit', () => {
    const newBookTitle = newBookForm.getElementById('new-book-title').value;
    const newBookAuthor = newBookForm.getElementById('new-book-author').value;
    const newBookPages = newBookForm.getElementById('new-book-pages').value;
    const newBookRead = newBookForm.getElementById('new-book-read').value;

    const newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value);
    addBookToLibrary(newBook);
});

// Sample Books (To be removed)
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBookToLibrary("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 223, true);
addBookToLibrary('Dune', 'Frank Herbert', 412, false);

createLibraryDisplay();