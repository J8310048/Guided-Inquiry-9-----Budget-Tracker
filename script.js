//here I'm targeting the table body so I can add input fields with both Add+ buttons
const inputFields = document.getElementById("inputFields")


//I'm confirming if the html elements are inside the inputFields variable
console.log(inputFields);


//below is a function that will add income cells
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

//below is a function that will add expense cells
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
//below I created different instances as test runs to see if the Budget class works properly
let mayBudget = new Budget(10000, 500)
let decemberBudget = new Budget(29554, 5000)
let januaryBudget = new Budget(5, 500)
let augustBudget = new Budget()
console.log(mayBudget.grandTotal());
console.log(decemberBudget.grandTotal());
// console.log(januaryBudget.inputValidation());
// console.log(augustBudget.inputValidation());

//below I created an one instance 
let totalAmount = new Budget();

//
const incomeAmount = totalAmount.income;
const expenseAmount = totalAmount.expense;
const grandTotalAmount = incomeAmount - expenseAmount;

//below the code will update the all the total displays from the user's input
const incomeTotal = document.getElementById("incomeTotal").textContent = incomeAmount;
const expenseTotal = document.getElementById("expenseTotal").textContent = expenseAmount;
const grandTotal = document.getElementById("grandTotal").textContent = grandTotalAmount;

//below I'm verifying if the numbers are zero
console.log(incomeTotal);
console.log(expenseTotal);
console.log(grandTotalAmount);