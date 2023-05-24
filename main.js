function addBook() {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;

    if (title === "" || author === "") {
        alert("Введите название и автора книги");
        return;
    }

    let book = { title: title, author: author };
    let books = localStorage.getItem("books");
    if (books) {
        books = JSON.parse(books);
    } else {
        books = [];
    }
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));

    displayBooks();
}
function displayBooks() {
    let books = localStorage.getItem("books");
    if (books) {
        books = JSON.parse(books);
    } else {
        books = [];
    }
}

