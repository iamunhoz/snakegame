import { onSnake, expandSnake } from './snake.js'

let food = { x: 5, y: 5 }
const EXPANSION_RATE = 1

function update() {
	if (onSnake(food)) {
		expandSnake(EXPANSION_RATE)
		food = { x: 10, y: 10 }
	}	
}

function draw(gameboard) {
	const foodHtmlElement = document.createElement('div')
	foodHtmlElement.style.gridRowStart = food.y
	foodHtmlElement.style.gridColumnStart = food.x
	foodHtmlElement.classList.add('food', 'piece')
	gameboard.appendChild(foodHtmlElement)
}

export {
	update,
	draw
 }