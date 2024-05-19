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
        if (typeof this.income !== 'number' || typeof this.expense !== 'number') {
            alert("Income and expense must be numbers!");
        } if (this.income < this.expense) {
            alert("Get your money up!")
        } else if (this.income === 0 || this.expense === 0) {
            alert("Must have valid number entries")

        }
    }
}

//this prevents the form from resetting when submitting
function preventFormReset(event) {
    event.preventDefault();
    updateData();
    Budget.inputValidation();
}

//this will link to my submit button. Whenever values are inputted, javascript will receive them as strings. So below I added a for loop that will parse/convert each entry into a number using parseFloat. Float means any number with a decimal or a super long number, but when put next to parse, will help convert all entries into numbers. 
function updateData() {
    let incomeAmount = 0;
    let expenseAmount = 0;

    let incomeInputs = document.querySelectorAll("input[name='income-number']");
    let expenseInputs = document.querySelectorAll("input[name='expenses-number']");

    for (let i = 0; i < incomeInputs.length; i++) {
        incomeAmount += parseFloat(incomeInputs[i].value) || 0;
    }

    for (let i = 0; i < expenseInputs.length; i++) {
        expenseAmount += parseFloat(expenseInputs[i].value) || 0;
    }

    // Create a new instance of Budget class
    let budget = new Budget(incomeAmount, expenseAmount);

    // Call inputValidation method
    budget.inputValidation();

    //this calculates income minus expenses
    const grandTotalAmount = budget.grandTotal();

    //below the code will update the all the total displays from the user's input
    document.getElementById("incomeTotal").innerHTML = `<em>Total Income: ${incomeAmount}</em>`;
    document.getElementById("expenseTotal").innerHTML = `<em>Total Expense: ${expenseAmount}</em>`;
    document.getElementById("grandTotal").innerHTML = `<strong>Grand Total: ${grandTotalAmount}</strong>`;


}

// below I'm defining the reset button to reset the form before submitting and reset the values on the display after submitting
function resetTotals() {
    document.getElementById("incomeTotal").innerHTML = `<em>Total Income: 0</em>`;
    document.getElementById("expenseTotal").innerHTML = `<em>Total Expense: 0</em>`;
    document.getElementById("grandTotal").innerHTML = `<strong>Grand Total: 0</strong>`;
}


//here I'm targeting the table body so I can add input fields with both Add+ buttons
const inputFields = document.getElementById("inputFields")

//I'm confirming if the html elements are inside the inputFields variable
console.log(inputFields);

// below is a function that will add income cells
function addIncomeInput() {
    var incomeTable = document.getElementById('incomeTable');
    const newRow = document.createElement('tr');
    var incomeCell = document.createElement('td');
    incomeCell.innerHTML =
        `<input type="text" id="income-description" name="income-description" placeholder="Name your income">
         <input type="text" id="income-number" name="income-number" placeholder="type the amount">`
    newRow.appendChild(incomeCell);
    incomeTable.appendChild(newRow)
}

//below is a function that will add expense cells
function addExpenseInput() {
    var expenseTable = document.getElementById('expenseTable');
    const newRow = document.createElement('tr');
    var expenseCell = document.createElement('td');
    expenseCell.innerHTML = `
    <input type="text" id="expenses-description" name="expenses-description" placeholder="Name your expense">
    <input type="text" id="expenses-number" name="expenses-number" placeholder="type the amount">`;
    newRow.appendChild(expenseCell);
    expenseTable.appendChild(newRow)
}


