export const score = {
	points: 0,
	increaseScore() { score.points += 10 }
}

export function drawScore() {
	const scoreHtmlElement = document.getElementById('score')
	scoreHtmlElement.innerHTML = score.points
}