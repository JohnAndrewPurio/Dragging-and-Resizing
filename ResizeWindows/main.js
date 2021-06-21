const dragger = document.querySelector('.dragger')
const css = document.documentElement.style
const offset = dragger.offsetWidth / 2

let draggerPressed = false
let currentX = (window.innerWidth / 2) - (offset) //Middle X offset

//Set the dragger to the middle of the window
css.setProperty('--dragger-x-coord', `${currentX}px`)

//If dragger div is pressed(param = true), change cursor else(param = false) revert back to default cursor
function onMouseEvent(param) {
    draggerPressed = param

    if (draggerPressed) {
        css.setProperty('--cursor', 'col-resize')

        return
    }

    css.setProperty('--cursor', 'default')
}

//On mouseMove in the window, if the dragger is pressed, resize the left and right windows while moving the dragger
function onMouseMove() {
    const leftPercent = (100 * currentX / window.innerWidth) - offset / (window.innerWidth / 2)
    const rightPercent = (100 - leftPercent)

    if( draggerPressed ) {
        currentX = event.clientX
        css.setProperty('--dragger-x-coord', `${currentX - offset}px`)
        css.setProperty('--left-window-width', `${leftPercent}%`)
        css.setProperty('--right-window-width', `${rightPercent}%`)
    }
}