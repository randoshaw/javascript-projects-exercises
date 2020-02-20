let myAccount = {
    name: 'Rando',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, myIncome) {
    account.income = account.income + myIncome
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount)) //  ==> Account for Rando has $1837.5. $2000 in income. $162.5 in expenses.
resetAccount(myAccount)
console.log(getAccountSummary(myAccount)) // ==> Account for Rando has $0. $0 in income. $0 in expenses.
//After it reads 1st console.log, it runs the resetAccount function and zeros out expenses and income
