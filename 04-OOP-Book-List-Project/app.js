// Book Constructor
function Book(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
}

// UI Constructor
function UI(){
    // Add Book to list
    UI.prototype.addBooktoList = function(book){
        const list = document.getElementById('book-list')
        // Create Element
        const row = document.createElement('tr')
        // Insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `
        
        list.appendChild(row)
    }

    // Clear Fields
    UI.prototype.clearFields = function(){
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }

    UI.prototype.showAlert = function(msg, className){
        const div = document.createElement('div')
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(msg))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')

        container.insertBefore(div, form)

        setTimeout(function(){
            document.querySelector('.alert').remove()
        },2000)
    }

    // Delete Book
    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove()
        }
    }
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', e => {
    // Get Form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    // Instanciate Book
    const book = new Book(title, author, isbn)

    // Instanciate UI
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === ''){
        // Erro Alert
        ui.showAlert('Please fill in all fields', 'error')
    }else{
        // Add Book to List
        ui.addBooktoList(book)
        ui.clearFields()
        ui.showAlert('Book add with success!', 'success')
    }

    e.preventDefault()
})

// Event listener for Delete
document.getElementById('book-list').addEventListener('click', e => {
    const ui = new UI()
    ui.deleteBook(e.target)
    ui.showAlert('Book Removed!', 'success')
    e.preventDefault()
})