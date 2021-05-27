import {getInputDirection} from './input.js'

// set the dvisor to the desired FPS

let newSegments = 0
//each obj in this array creates a body segment for the snake using x-y coordinates
const snakeBody = [
	{ x: 11, y: 11 },
	{ x: 12, y: 11 },
	{ x: 13, y: 11 }
]

function getSnakeSpeed() {
	let fps = snakeBody.length * .5
	if (fps < 6) fps = 6
	let snakeSpeed = 1 / fps
	return snakeSpeed
}

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

function onSnake(position, { ignoreHead = false } = {}) {
	return snakeBody.some((segment, index) => {
		if (ignoreHead && index === 0) return false
		return equalPositions(segment, position)
	})
}

function addSegments() {
	for (let i = 0; i < newSegments; i++) {
		snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
	}
	newSegments = 0
}

function equalPositions (pos1, pos2) {
	return pos1.x === pos2.x && pos1.y === pos2.y
}

function getSnakeHead(){
	return snakeBody[0]
}

function snakeBodyOverlap(){
	if (snakeBody.length > 3) {
		return onSnake(snakeBody[0], { ignoreHead: true })
	} else return false
}

export { 
	getSnakeSpeed,
	update,
	draw,
	expandSnake,
	onSnake,
	getSnakeHead,
	snakeBodyOverlap
 }