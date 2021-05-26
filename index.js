import { SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeBodyOverlap } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import { drawScore } from './score.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false

function main(currentTime) {
	if (gameOver) {
		return gameOverScreen()
	}
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
function gameOverScreen() {
	const gameOverWall = document.createElement('div')
	gameOverWall.classList.add('gameOverWall')
	
	const gameOverContent = document.createElement('div')
	gameOverContent.classList.add('gameOverContent')

	const gameOverButton = document.createElement('button')
	gameOverButton.classList.add('gameOverButton')
	gameOverButton.innerHTML = 'Play Again'
	gameOverButton.onclick = restartGame

	const gameOverText = document.createElement('h2')
	gameOverText.classList.add('gameOverText')
	gameOverText.innerHTML = 'You lost'


	gameOverContent.appendChild(gameOverText)
	gameOverContent.appendChild(gameOverButton)
	gameOverWall.appendChild(gameOverContent)
	document.body.appendChild(gameOverWall)
}

function restartGame () {
	location.reload()
}

window.requestAnimationFrame(main)

