const dragBox = document.querySelector('.drag-box')
const css = document.documentElement.style
let boxPressed = false
let currentX = (window.innerWidth / 2) - (dragBox.offsetWidth / 2)
let currentY = (window.innerHeight / 2) - (dragBox.offsetHeight / 2)

//Position the dragBox at the center of the window
css.setProperty('--x-coord', `${currentX}px`)
css.setProperty('--y-coord', `${currentY}px`)

//Determine whether the dragBox is being pressed(param = true) else it is not(param = false)
function onMouseEvent(param) {
    boxPressed = param   

    if(boxPressed) {
        css.setProperty('--cursor', 'move')

        return
    }
    
    css.setProperty('--cursor', 'default')
}

//Move the box depending on the x and y coordinates of the cursor
function onMouseMove() {
    if(boxPressed && insideTheWindow() ) {
        currentX = event.clientX
        currentY = event.clientY
        css.setProperty('--x-coord', `${currentX}px`)
        css.setProperty('--y-coord', `${currentY}px`)
    }
}

//Check whether the outlines of the box is still inside the window
function insideTheWindow() {
    return event.clientX >= 0
        && event.clientY >= 0
        && (event.clientX + dragBox.offsetWidth) <= document.documentElement.clientWidth
        && (event.clientY + dragBox.offsetHeight) <= document.documentElement.clientHeight
}