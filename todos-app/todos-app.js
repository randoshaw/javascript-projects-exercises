let todos = []

const filters = {
	searchText: '',
	hideCompleted: false
}

const todosJSON = localStorage.getItem('todosKey')
// .parse takes string and turns it into array
if (todosJSON !== null) {
	todos = JSON.parse(todosJSON)
}

const renderTodos = function(todos, filters) {
	const filteredTodos = todos.filter(function(todo) {
		const searchTextMatch = todo.text
			.toLowerCase()
			.includes(filters.searchText.toLowerCase())
		const hideCompletedMatch = !filters.hideCompleted || !todo.completed
		// return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
		return searchTextMatch && hideCompletedMatch
	})

	// filteredTodos = filteredTodos.filter(function(todo) {
	// 	return !filters.hideCompleted || !todo.completed
	// 	// if (filters.hideCompleted) {
	// 	//     return !todo.completed
	// 	// } else {
	// 	//     return true
	// 	// }
	// })

	const incompleteTodos = filteredTodos.filter(function(todo) {
		return !todo.completed
	})

	document.querySelector('#todos-list').textContent = ''

	const summary = document.createElement('h2')
	summary.textContent = `You have ${incompleteTodos.length} todos left`
	document.querySelector('#todos-list').appendChild(summary)

	filteredTodos.forEach(function(todo) {
		const p = document.createElement('p')
		p.textContent = todo.text
		document.querySelector('#todos-list').appendChild(p)
	})
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
	filters.searchText = e.target.value
	renderTodos(todos, filters)
})

// Submit handler and cancel the default action of reloading on submit with e.preventDefault()
document.querySelector('#new-todo').addEventListener('submit', function(e) {
	e.preventDefault()
	todos.push({
		text: e.target.elements.text.value, // 'e.target' gets to the DOM element on the form. '.elements' gets the form fields that are setup. '.text' access the name it's assigned. '.value' access the DOM input.
		completed: false
	})
	localStorage.setItem('todos', JSON.stringify(todos))
	renderTodos(todos, filters)
	e.target.elements.text.value = ''
})

document
	.querySelector('#hide-completed')
	.addEventListener('change', function(e) {
		filters.hideCompleted = e.target.checked
		renderTodos(todos, filters)
	})
