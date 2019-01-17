console.clear()
/**  EVENT LISTENERS **/
const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

// Click
clearBtn.addEventListener('click', runEvent)
// Double Click
clearBtn.addEventListener('dblclick', runEvent)
// Mouse Down
clearBtn.addEventListener('mousedown', runEvent)
// Mouse Up
clearBtn.addEventListener('mouseup', runEvent)

// Mouse Enter
card.addEventListener('mouseenter', runEvent)
// Mouse Leave
card.addEventListener('mouseleave', runEvent)
// Mouse Over
card.addEventListener('mouseover', runEvent)
// Mouser Out
card.addEventListener('mouseout', runEvent)
 
//Mouse Move
card.addEventListener('mousemove', runEvent)

// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`)

    heading.innerText = `MouseX: ${e.offsetX}   MouseY: ${e.offsetY}`
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.clientX})`
}

setInterval(function(){
    console.clear()
}, 4000)
