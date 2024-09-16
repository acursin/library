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

function createBookNode(book) {
    const bookNode = document.createElement('article');
    bookNode.classList.add('book');
    bookNode.setAttribute('data-index', myLibrary.indexOf(book))

    const bookTitle = document.createElement('p');
    bookTitle.textContent = book.title;
    bookNode.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    bookNode.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = book.pages;
    bookNode.appendChild(bookPages);

    const bookReadStatus = document.createElement('p');
    bookReadStatus.textContent = book.read ? 'Read' : 'Not read yet';
    bookNode.appendChild(bookReadStatus);

    return bookNode;
}

function createLibraryDisplay() {
    const libraryDisplay = document.getElementById('library');
    for (const book of myLibrary) {
        libraryDisplay.appendChild(createBookNode(book));
    }
}

const showBookModalButton = document.getElementById('show-book-modal-button');
const bookModal = document.getElementById('book-modal');

showBookModalButton.addEventListener('click', () => {
    bookModal.showModal();
});

const newBookForm = document.getElementById('new-book-form')

newBookForm.addEventListener('submit', () => {
    const newBookTitle = newBookForm.getElementById('new-book-title').value;
    const newBookAuthor = newBookForm.getElementById('new-book-author').value;
    const newBookPages = newBookForm.getElementById('new-book-pages').value;
    const newBookRead = newBookForm.getElementById('new-book-read').value;

    const newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.value);
    addBookToLibrary(newBook);
});

// Sample Books (To be removed)
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBookToLibrary(theHobbit);
const philosophersStone = new Book("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 223, true);
addBookToLibrary(philosophersStone);
const dune = new Book('Dune', 'Frank Herbert', 412, false);
addBookToLibrary(dune);

createLibraryDisplay();