const balance = document.querySelector('#balance')
const moneyPlus = document.querySelector('#money-plus')
const moneyMinus = document.querySelector('#money-minus')
const list = document.querySelector('#list')
const form = document.querySelector('#form')
const text = document.querySelector('#text')
const amount = document.querySelector('#amount')

const dummyTransactions = [
	{ id: 1, text: 'Case', amount: -20 },
	{ id: 2, text: 'Payday', amount: 300 },
	{ id: 3, text: 'Gas', amount: -10 },
	{ id: 4, text: 'Photo Shoot', amount: 150 }
]

let transactions = dummyTransactions

// Add transactions to DOM list
function addTransactionDOM(transaction) {
	// get income or expense
	const sign = transaction.amount < 0 ? '-' : '+'

	const item = document.createElement('li')

	// Add class based on value
	item.classList.add(transaction.amount < 0 ? '-' : '+')

	// Math.abs ==> if -num, will turn to +num (absolute num)
	item.innerHTML = `
  ${transaction.text} <span>${sign}${Math.abs(
		transaction.amount
	)}</span> <button class="delete-btn">x</button>
  `

	list.appendChild(item)
}

// Update the balance, income and expense
function updateValues() {
	const amounts = transactions.map(transaction => transaction.amount)

	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2) // toFixed adds 2 decimal places

	const income = amounts
		.filter(item => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2)

	const expense = (
		amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
		-1
	).toFixed(2)

	// console.log(total) // 420.00
	// console.log(income) // 450.00
	// console.log(expense) // 30.00

	balance.innerText = `$${total}`
	moneyPlus.innerText = `$${income}`
	moneyMinus.innerText = `$${expense}`
}

// Initial app
function init() {
	list.innerHTML = ''

	transactions.forEach(addTransactionDOM)
	updateValues()
}

init()
