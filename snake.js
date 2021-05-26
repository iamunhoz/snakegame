import {getInputDirection} from './input.js'

// set the dvisor to the desired FPS
const FPS = 6
const SNAKE_SPEED = 1 / FPS
let newSegments = 0
//each obj in this array creates a body segment for the snake using x-y coordinates
const snakeBody = [
	{ x: 11, y: 11 }
]

function update() {
	addSegments()
	const inputDirection = getInputDirection()
	for (let i = snakeBody.length - 2; i >= 0; i--) {
		snakeBody[i + 1] = { ...snakeBody[i] }
	}
	snakeBody[0].x += inputDirection.x
	snakeBody[0].y += inputDirection.y
	
}

function draw(gameboard) {
	snakeBody.forEach(segment => {
		const snakeHtmlElement = document.createElement('div')
		snakeHtmlElement.style.gridRowStart = segment.y
		snakeHtmlElement.style.gridColumnStart = segment.x
		snakeHtmlElement.classList.add('snake', 'piece')
		gameboard.appendChild(snakeHtmlElement)
	})
}

function expandSnake(amount) {
	newSegments += amount
}

function onSnake(position) {
	return snakeBody.some(segment => {
		return position.x === segment.x && position.y === segment.y
	})
}

function addSegments() {
	for (let i = 0; i < newSegments; i++) {
		snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
	}
	newSegments = 0
}

export { 
	SNAKE_SPEED,
	update,
	draw,
	expandSnake,
	onSnake
 }