import { SNAKE_SPEED, update as updateSnake, draw as drawSnake } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
	const milisecondsSinceLastRender = (currentTime - lastRenderTime) / 1000
	window.requestAnimationFrame(main)
	if (milisecondsSinceLastRender < SNAKE_SPEED) return
	lastRenderTime = currentTime
	
	update() // controller
	draw() // view
}

function update() {
	updateSnake()
	updateFood()
}

function draw() {
	gameBoard.innerHTML = ''
	drawSnake(gameBoard)
	drawFood(gameBoard)
}
window.requestAnimationFrame(main)