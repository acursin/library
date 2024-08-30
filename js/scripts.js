const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readMessage = this.read ? 'read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBookDisplay(book) {
    const bookDisplay = document.createElement('article');
    bookDisplay.classList.add('book');

    const bookTitle = document.createElement('p');
    bookTitle.textContent = book.title;
    bookDisplay.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    bookDisplay.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = book.pages;
    bookDisplay.appendChild(bookPages);

    const bookReadStatus = document.createElement('p');
    bookReadStatus.textContent = book.read ? 'Read' : 'Not read yet';
    bookDisplay.appendChild(bookReadStatus);

    return bookDisplay;
}

function createLibraryDisplay() {
    const libraryDisplay = document.getElementById('library');
    for (const book of myLibrary) {
        libraryDisplay.appendChild(createBookDisplay(book));
    }
}

const showBookModalButton = document.getElementById('show-book-modal-button');
const bookModal = document.getElementById('book-modal');
const createBookButton = document.getElementById('create-book-button');

showBookModalButton.addEventListener('click', function () {
    bookModal.showModal();
});

createBookButton.addEventListener('click', function (event) {
    event.preventDefault();
    const newBookForm = document.getElementById('new-book-form');
    console.log(newBookForm.elements);
});

// Sample Books (To be removed)
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBookToLibrary(theHobbit);
const philosophersStone = new Book("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 223, true);
addBookToLibrary(philosophersStone);
const dune = new Book('Dune', 'Frank Herbert', 412, false);
addBookToLibrary(dune);

createLibraryDisplay();