console.clear()
// Create Element
const li = document.createElement('li')

// Add Class
li.className = 'collection-item'
// Add id
li.id = 'new-item'
// Add Attribute
li.setAttribute('title', 'New Item')

// Create text node an append
const liText = document.createTextNode('Hello World')
li.appendChild(liText)

// Create new link element
const link = document.createElement('a')
// Add class link
link.className = 'delete-item secondary-content'
// Create text node for link
const fa_link = document.createElement('i')
fa_link.className = 'fa fa-remove'
link.appendChild(fa_link)

// Append link to li
li.appendChild(link)

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li)

console.log(li)