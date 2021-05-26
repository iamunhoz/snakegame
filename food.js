import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let foodPosition = getRandomFoodPosition()
const EXPANSION_RATE = 1

function update() {
	if (onSnake(foodPosition)) {
		expandSnake(EXPANSION_RATE)
		foodPosition = getRandomFoodPosition()
	}	
}

function draw(gameboard) {
	const foodHtmlElement = document.createElement('div')
	foodHtmlElement.style.gridRowStart = foodPosition.y
	foodHtmlElement.style.gridColumnStart = foodPosition.x
	foodHtmlElement.classList.add('food', 'piece')
	gameboard.appendChild(foodHtmlElement)
}

function getRandomFoodPosition() {
	let newFoodPosition
	while(newFoodPosition == null || onSnake(newFoodPosition)) {
		newFoodPosition= randomGridPosition()
	}
	return newFoodPosition
}

export {
	update,
	draw
 }