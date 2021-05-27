import { getSnakeSpeed, update as updateSnake, draw as drawSnake, getSnakeHead, snakeBodyOverlap } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import { gameOverScreen } from './UI.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false

function main(currentTime) {
	if (gameOver) {
		return gameOverScreen()
	}
	const milisecondsSinceLastRender = (currentTime - lastRenderTime) / 1000
	window.requestAnimationFrame(main)
	if (milisecondsSinceLastRender < getSnakeSpeed()) return
	lastRenderTime = currentTime
	
	update() // controller
	draw() // view
}
function update() {
	updateSnake()
	updateFood()
	checkGameOver()
}
function draw() {
	clearBoard()
	//drawScore()
	drawSnake(gameBoard)
	drawFood(gameBoard)
}
function checkGameOver() {
	gameOver = outsideGrid(getSnakeHead()) || snakeBodyOverlap()
}
function clearBoard() {
	gameBoard.innerHTML = ''
}


window.requestAnimationFrame(main)

