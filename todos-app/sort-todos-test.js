const todos = [
	{
		text: 'Buy food',
		completed: true
	},
	{
		text: 'Do work',
		completed: false
	},
	{
		text: 'Exercise',
		completed: true
	}
]
const sortTodos = function(todoss) {
	todoss.sort(function(a, b) {
		if (!a.completed && b.completed) {
			return -1
		} else if (!b.completed && a.completed) {
			return 1
		} else {
			return 0
		}
	})
}
sortTodos(todos)
console.log(todos)
