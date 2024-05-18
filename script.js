//here I'm targeting the table body so I can add input fields with both Add+ buttons
const inputFields = document.getElementById("inputFields")


//I'm confirming if the html elements are inside the variables
console.log(inputFields)


//below is a function that will repeat
function addIncomeInput() {
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    newCell.innerHTML =
        `<input type="text" id="income-description" name="income-description"
                            placeholder="Name your income">
                        <input type="text" id="income-number" name="income-number" placeholder="type the amount">`
    newRow.appendChild(newCell)
    inputFields.appendChild(newRow)
}

function addExpenseInput() {
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    newCell.innerHTML = `
        <input type="text" id="expenses-description" name="expenses-description"
        placeholder="Name your expense">
    <input type="text" id="expenses-number" name="expenses-number" placeholder="type the amount">`
    // newCell.style = (<i class="material-icons" style="font-size:48px;color:red">delete</i>)
    newRow.appendChild(newCell)
    inputFields.appendChild(newRow)
}



//below is the logic for the difference in income and expenses totaling the budget

class Budget {
    constructor(income = 0, expense = 0) {
        this.income = income;
        this.expense = expense;
        this.total = 0;
    }

    addingIncome(income) {
        this.income += income;
    }

    addingExpense(expense) {
        this.expense += expense;
    }

    grandTotal() {
        return this.total = this.income - this.expense
    }

    inputValidation() {
        //if else statements will be used to display alerts for any income amounts that are less than the expense and for empty input fields
        if (this.income < this.expense) {
            alert("Get your money up!")
        } else if (this.income === 0 || this.expense === 0) {
            alert("Must have valid number entries")
        }
    }
}
//below are test runs to see if they work
let mayBudget = new Budget(10000, 500)
let decemberBudget = new Budget(29554, 5000)
let januaryBudget = new Budget(5, 500)
let augustBudget = new Budget()
console.log(mayBudget.grandTotal());
console.log(decemberBudget.grandTotal());
console.log(januaryBudget.inputValidation());
console.log(augustBudget.inputValidation());