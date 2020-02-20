/** 
 * 1. make array of objects -> text, completed properties
 * 2. make function to remove a todo by text value
 */

const todos = [{
    text: 'Order dog food',
    completed: true
}, {
    text: 'Clean room',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Practice javascript',
    completed: true
}, {
    text: 'Go to bed early',
    completed: false
}]

const deleteTodo = function (todosList, todoText) {
    const index = todosList.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) { // if greater than -1, there's a match!
        todosList.splice(index, 1) // splice removes the item. index = start, 1 = how many items to remove
    }
}

/** find non-completed todos */
const getThingsToDo = (todos) => {
    return todos.filter((todo) => {
        // return todo.completed === false
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))
 
// deleteTodo(todos, 'buy food')
// deleteTodo(todos, '!!buy food')
// console.log(todos)