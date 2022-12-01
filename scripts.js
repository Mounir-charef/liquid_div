const board = document.getElementById('container')
const rekt = board.getBoundingClientRect()
const animateBubble = e => {
    const newBubble = document.createElement('div');
    newBubble.className = 'fluid'

    let x = e.clientX - rekt.x;

    newBubble.style.left = `${x}px`
    board.appendChild(newBubble)
    setTimeout(() => board.removeChild(newBubble), 1500)
}



board.onmousemove = e => animateBubble(e)