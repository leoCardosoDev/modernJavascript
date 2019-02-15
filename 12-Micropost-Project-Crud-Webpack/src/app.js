import {
    http
} from './http'
import {
    ui
} from './ui'

// Get post on DOM load
document.addEventListener('DOMContentLoaded', getPost)
// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost)
// Listen for delete post
document.querySelector('#posts').addEventListener('click', deletePost)
// Listen for Edit State
document.querySelector('#posts').addEventListener('click', enableEdit)
// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit)

// Get Post
function getPost() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPost(data))
        .catch(err => console.log(err))
}

// Submit Post
function submitPost() {
    const title = document.querySelector('#title').value
    const body = document.querySelector('#body').value
    const id = document.querySelector('#id').value

    const data = {
        title,
        body
    }

    // Validate input
    if (title === '' || body === '') {
        ui.showAlert('Please fill in all fields', 'alert alert-danger')
    } else {
        // Check for ID
        if (id === '') {
            // Create Post
            http.post('http://localhost:3000/posts/', data)
                .then(data => {
                    ui.showAlert('Post added!', 'alert alert-success')
                    ui.clearFields()
                    getPost()
                })
                .catch(err => console.log(err))
        } else {
            // Update Post
            http.put(`http://localhost:3000/posts/${id}`, data)
                .then(data => {
                    ui.showAlert('Post updated!', 'alert alert-success')
                    ui.changeFormState('add')
                    getPost()
                })
                .catch(err => console.log(err))
        }
    }

}

// Delete Post
function deletePost(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id
        if (confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post removed!', 'alert alert-success')
                    getPost()
                })
                .catch(err => console.log(err))
        }
    }

    e.preventDefault()
}

// Enable Edit State
function enableEdit(e) {
    //console.log(e.target.parentElement.classList)
    if (e.target.parentElement.classList.contains('edit')) {
        //console.log(e.target.parentElement.dataset.id)
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        const id = e.target.parentElement.dataset.id
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        const body = e.target.parentElement.previousElementSibling.textContent

        const data = {
            id,
            title,
            body
        }
        // Fill form with current post
        ui.fillForm(data)
    }

    e.preventDefault()
}

// Cancel edit State
function cancelEdit(e) {
    if (e.target.classList.contains('post-cancel')) {
        //console.log(e.target.classList.contains('post-cancel'))
        ui.changeFormState('add')
    }
    e.preventDefault()
}