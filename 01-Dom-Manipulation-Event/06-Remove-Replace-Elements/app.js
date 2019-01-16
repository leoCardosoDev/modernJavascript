console.clear()

/**  REPLACE ELEMENT **/

// Create Element
const new_heading = document.createElement('h2')
// Add id
new_heading.id = 'task-title'
// New text node
const h_text = document.createTextNode('Task List Create')
new_heading.appendChild(h_text)

// Get the old heading
const old_heading = document.getElementById('task-title')
// Parent
const card_action = document.querySelector('.card-action')

// Replace
card_action.replaceChild(new_heading, old_heading)

console.log(new_heading)


/**  REMOVE ELEMENT **/

const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')

// Remove list item
lis[0].remove()
// Remove child element
list.removeChild(lis[3])


/**  CLASS & ATTR **/

const first_li = document.querySelector('li:first-child')
const link = first_li.children[0]

let val
// Class
val = link.className
val = link.classList

link.classList.add('test')
// Remove specific class
remv = link.classList[0]
link.classList.remove(remv)
val = link

// Attributes
link.setAttribute('href', 'https://reveweb.com.br')
link.setAttribute('target', '_blank')
link.setAttribute('title', 'Reveweb')

link.removeAttribute('title')
val = link.hasAttribute('target')
val = link.getAttribute('title')



console.clear()
console.log(val)

/**
lis.forEach((list, index) => {
    console.log(index, list)
})
**/


//console.log(lis)
