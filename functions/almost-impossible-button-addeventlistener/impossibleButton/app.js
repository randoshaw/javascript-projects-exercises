const btn = document.querySelector('button')

//window.innerHeight & window.innerWidth shows the actual size of the window for when it's resized.

btn.addEventListener('mouseover', () => {
  console.log('moused over')
 const height = Math.floor(Math.random() * window.innerHeight)
 const width = Math.floor(Math.random() * window.innerWidth)
	btn.style.left = `${width}px`
	btn.style.top = `${height}px`
})


btn.addEventListener('click', () => {
  btn.textContent = 'CONGRATS you finally got me ;D'
  document.body.style.backgroundColor = 'blue'
})