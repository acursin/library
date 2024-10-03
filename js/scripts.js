// Memory to store books
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// For easily checking book properties
Book.prototype.info = function() {
    let readMessage = this.read ? 'read' : 'not read yet';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`;
}

Book.prototype.changeReadStatus = function() {
    this.read = !this.read;
}

// Create display element based on book in memory
Book.prototype.createElement = function() {
    // Create all the pieces of the book element
    const element = document.createElement('article');
    element.classList.add('book');

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

    const removeBookButton = document.createElement('button');
    removeBookButton.textContent = 'Remove';
    removeBookButton.setAttribute('data-value', 'remove');
    element.appendChild(removeBookButton);

    const toggleReadButton = document.createElement('button');
    toggleReadButton.textContent = 'Toggle';
    toggleReadButton.setAttribute('data-value', 'toggle-read');
    element.appendChild(toggleReadButton);

    element.addEventListener('click', (event) => {
        if (!event.target.matches('button')) return;
        const value = event.target.dataset.value;

        if (value === 'remove') {
            myLibrary.splice(myLibrary.indexOf(this), 1);
            updateLibraryDisplay();
        }

        if (value === 'toggle-read') {
            this.changeReadStatus();
            event.currentTarget.replaceWith(this.createElement());
        }
    });

    return element;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

// Recreates the entire display every time there's an update, works at this scale but not very efficient
function updateLibraryDisplay() {
    const libraryDisplay = document.getElementById('library');
    const bookElements = [];
    for (const book of myLibrary) {
        bookElements.push(book.createElement());
    }

    libraryDisplay.replaceChildren(...bookElements);
}

const showBookModalButton = document.getElementById('show-book-modal-button');
showBookModalButton.addEventListener('click', () => {
    const bookModal = document.getElementById('book-modal');
    bookModal.showModal();
});

const newBookForm = document.getElementById('new-book-form');
newBookForm.addEventListener('submit', () => {
    const newBookTitle = document.getElementById('new-book-title').value;
    const newBookAuthor = document.getElementById('new-book-author').value;
    const newBookPages = document.getElementById('new-book-pages').value;
    const newBookRead = document.getElementById('new-book-read').checked;

    addBookToLibrary(newBookTitle, newBookAuthor, newBookPages, newBookRead);
    updateLibraryDisplay();
});

// Sample Books (To be removed)
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBookToLibrary("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 223, true);
addBookToLibrary('Dune', 'Frank Herbert', 412, false);

updateLibraryDisplay();