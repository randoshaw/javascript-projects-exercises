const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
]

// const h1 = document.querySelector('h1')
// h1.addEventListener('mouseover', function(){
// 	console.log(this.innerText)
// })
const changeColor = function() {
	const h1 = document.querySelector('h1')
	h1.style.color = this.style.backgroundColor
	// console.log(this)
	// console.log(this.style.backgroundColor) // 'this' is the keyword to the individual div item that's clicked. 'this' inside a method, that's added on to an object, will refer to that object
}

const container = document.querySelector('#boxes')
for (let color of colors) {
	const box = document.createElement('div')
	box.style.backgroundColor = color
	box.classList.add('box')
	container.appendChild(box)
	box.addEventListener('click', changeColor)
}

