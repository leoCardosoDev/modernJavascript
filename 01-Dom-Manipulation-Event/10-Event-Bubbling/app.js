console.clear()
/**  EVENT Bubbling **/



document.body.addEventListener('click', deleteItem)
function deleteItem(e){
    //console.log('Delete item')
    //console.log(e.target.parentElement.className)
    //e.target.remove()

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log(e.target.parentElement.parentElement)
        e.target.parentElement.parentElement.remove()
    }
}



/* 
const delItem = document.querySelector('.delete-item')
delItem.addEventListener('click', deleteItem)
 */

/* 
document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card Title')
})

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('Card Content')
})

document.querySelector('.card').addEventListener('click', function(){
    console.log('Card Title')
})
 */