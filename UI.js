export const score = {
	points: 0,
	increaseScore() { score.points += 10 }
}

export function drawScore() {
	const scoreHtmlElement = document.getElementById('score')
	scoreHtmlElement.innerHTML = score.points
}

export function gameOverScreen() {
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