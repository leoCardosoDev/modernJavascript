class Book{
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI{

    addBookToList(book){
        const list = document.getElementById('book-list')
        // Create Element tr
        const row = document.createElement('tr')
        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `
        // Add in table tbody
        list.appendChild(row)
    }

    showAlert(msg, className){
        // Create Element div 
        const div = document.createElement('div')
        // Add class alert in div
        div.className = `alert ${className}`
        // Add Message in div
        div.appendChild(document.createTextNode(msg))
        // Add div in .container
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div, form)
        // Set timeout for div remove
        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 2000)
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove()
        }
    }

    clearFields(){
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }
}

// Local Storage class
class Store{

    static getBooks(){
        let books;
        if(localStorage.getItem('books') == null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books
    }

    static displayBooks(){
        const books = Store.getBooks()
        books.forEach( book => {
            const ui = new UI;
            ui.addBookToList(book)
        })
    }

    static addBook(book){
        const books = Store.getBooks()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(isbn){
        const books = Store.getBooks()
        books.forEach((book, index)=> {
            if(book.isbn === isbn){
                books.splice(index, 1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books))
    }
}

// Dom Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks)

// Event Listerner for Submit
document.getElementById('book-form').addEventListener('submit', e => {
    // Get form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // Instanciate Book
    const book = new Book(title, author, isbn)
    // Instanciate UI
    const ui = new UI()

    // Validate 
    if(title === '' || author === '' || isbn === ''){
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error')
    }else{
        // Add book to list
        ui.addBookToList(book)
        // Add to Local Storage
        Store.addBook(book)
        // Clear Fields
        ui.clearFields()
        // Show alert success
        ui.showAlert('Book add with success', 'success')
    }

    // Prevent event default
    e.preventDefault()
})

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', e => {

    // Instanciate UI
    const ui = new UI()
    // Call methode delete book
    ui.deleteBook(e.target)
    // Remove from Local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
    // Show alert Sucess
    ui.showAlert('Book Removed', 'success')

    e.preventDefault()
})