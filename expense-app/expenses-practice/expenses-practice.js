const account = {
	name: 'Rando',
	expenses: [],
	income: [],
  
  addExpense: function(description, amount) {
		this.expenses.push({
			description: description,
			amount: amount
		})
	},

	addIncome: function(description, amount) {
		this.income.push({
			description: description,
			amount: amount
		})
	},

	getAccountSummary: function() {
		let totalExpenses = null
		let totalIncome = null
		let accBalance = null

		this.expenses.forEach(function(expense) {
			totalExpenses = totalExpenses + expense.amount
		})

		this.income.forEach(function(myIncome) {
			totalIncome = totalIncome + myIncome.amount
		})

		accBalance = totalIncome - totalExpenses

		return `${this.name} has a balance of $${accBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
	}
}

account.addExpense('Phone', 35)
account.addExpense('Car', 85)
account.addIncome('Job', 500)
console.log(account.getAccountSummary())
