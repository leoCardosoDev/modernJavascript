console.clear()

let val
const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem
val = list

// Get Child nodes
val = list.childNodes // spaces count
val = list.childNodes[0]
val = list.childNodes[0].nodeName
val = list.childNodes[0].nodeValue

// .nodeType
/**
    **  1- Element
    **  2- Attribute (deprecated)
    **  3- Text Node
    **  8- Comment
    **  9- Document itself
    **  10- Doctype
**/
val = list.childNodes[0].nodeType
// .nodeType

// Get Children elements nodes
val = list.children
val = list.children[0]
list.children[1].textContent = 'Hello'
// Children of children
val = list.children[3].children[0].id = 'test-link'
val = list.children[3].children[0]
// First Child
val = list.firstChild
val = list.firstElementChild
// Last Child
val = list.lastChild
val = list.lastElementChild
// ChildElementCount
val = list.childElementCount

// Get Parent Node
val = listItem.parentNode
val = listItem.parentElement
val = listItem.parentElement.parentElement

// Get next sibling
val = listItem.nextSibling
val = listItem.nextElementSibling.nextElementSibling
// Get prev sibling
val = listItem.previousSibling
val = listItem.previousElementSibling

console.log(val)